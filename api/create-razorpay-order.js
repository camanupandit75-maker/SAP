const Razorpay = require('razorpay')

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET
    })
    
    const order = await razorpay.orders.create({
      amount: 200000,
      currency: 'INR',
      receipt: 'zerofico_' + Date.now()
    })
    
    res.status(200).json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      key_id: process.env.RAZORPAY_KEY_ID
    })
  } catch (error) {
    res.status(500).json({ error: 'Order creation failed' })
  }
}
