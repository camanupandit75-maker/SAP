const crypto = require('crypto')
const { createClient } = require('@supabase/supabase-js')

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { 
    razorpay_order_id, 
    razorpay_payment_id, 
    razorpay_signature,
    email 
  } = req.body

  try {
    // Verify signature
    const body = razorpay_order_id + '|' + razorpay_payment_id
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest('hex')

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ 
        success: false, 
        error: 'Payment verification failed' 
      })
    }

    // Signature valid — update Supabase
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_KEY
    )

    // Save payment record
    await supabase.from('payments').insert({
      email,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      amount: 500000,
      currency: 'INR',
      status: 'success',
      paid_at: new Date().toISOString()
    })

    // Upgrade user access
    const expiryDate = new Date(
      Date.now() + 90 * 24 * 60 * 60 * 1000
    ).toISOString()
    await supabase
      .from('users')
      .update({
        access_type: 'paid',
        access_expires_at: expiryDate
      })
      .eq('email', email)

    res.status(200).json({ success: true })

  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'Verification error' 
    })
  }
}
