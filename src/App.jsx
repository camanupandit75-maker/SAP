import { useState } from 'react';

// ─── Curriculum (CA-focused: where to click, what to type; no accounting theory) ─
const curriculum = [
  {
    title: 'SAP Navigation',
    subtitle: 'Day 1 to 2',
    lessons: [
      {
        title: 'SAP GUI Interface',
        tcodes: [],
        content: 'SAP screen layout — transaction box, menu bar, work area, status bar. Like Tally but you type shortcuts instead of clicking menus. Status bar shows errors — always check it after every action.',
        caInsight: 'Same as switching from manual ledgers to Tally years ago — same work, new screen.',
        commonMistakes: 'Ignoring the status bar, clicking menus instead of typing T-codes',
        quiz: {
          question: 'What should you always check after every action in SAP?',
          options: ['The status bar', 'The menu bar', 'The transaction box', 'The work area'],
          correctIndex: 0,
          explanation: 'The status bar at the bottom shows errors and messages. Always check it after every action.',
        },
      },
      {
        title: 'T-Codes and Navigation',
        tcodes: ['/n', '/o', '/nex'],
        content: 'T-codes are direct shortcuts. /n opens in same window. /o opens new session — use this to have multiple screens open like multiple browser tabs. /nex to log off. Add frequent T-codes to Favourites on Day 1.',
        caInsight: 'Like keyboard shortcuts in Excel — once you know them you never go back to menus.',
        commonMistakes: 'Not using /o for multiple sessions, not setting up Favourites',
        quiz: {
          question: 'Which T-code opens a new session so you can have multiple screens open?',
          options: ['/n', '/o', '/nex', '/f'],
          correctIndex: 1,
          explanation: '/o opens a new session. /n opens in the same window. /nex logs you off.',
        },
      },
      {
        title: 'SAP Document Concept',
        tcodes: [],
        content: 'Every action in SAP creates a Document with a unique number. Documents are never deleted — only reversed. Every document has: Document Number, Company Code, Fiscal Year, Posting Period. Always note the document number after saving — it is your reference.',
        caInsight: 'Like a voucher number in Tally — except SAP assigns it automatically and it can never be deleted.',
        commonMistakes: 'Not noting document number after posting, confusing document date with posting date',
        quiz: {
          question: 'What should you always do after saving a document in SAP?',
          options: ['Delete the draft', 'Note the document number', 'Close the session', 'Run a report'],
          correctIndex: 1,
          explanation: 'Always note the document number after saving — it is your reference for audit and follow-up.',
        },
      },
    ],
  },
  {
    title: 'Journal Entries',
    subtitle: 'Day 3 to 5',
    lessons: [
      {
        title: 'Post Journal Entry',
        tcodes: ['FB50'],
        content: 'Step 1 — type FB50, press Enter. Step 2 — enter Document Date (date of transaction) and Posting Date (which accounting period it falls in). Step 3 — enter Company Code. Step 4 — in line items enter G/L Account, D for debit or C for credit, Amount, Cost Centre if required. Step 5 — verify balance shows zero at bottom. Step 6 — Ctrl+S to save. Note the document number.',
        caInsight: 'Identical to passing a journal in Tally. Debit equals credit — same rule, different screen.',
        commonMistakes: 'Wrong posting date puts entry in wrong period, forgetting cost centre when it is mandatory, saving without checking balance is zero',
        quiz: {
          question: 'Before saving in FB50, what must you verify at the bottom of the screen?',
          options: ['Document type', 'Balance shows zero', 'Company code', 'User ID'],
          correctIndex: 1,
          explanation: 'Verify balance shows zero at bottom before saving. Same as ensuring debits equal credits.',
        },
      },
      {
        title: 'Display a Posted Document',
        tcodes: ['FB03'],
        content: 'Type FB03, Enter. Enter Document Number, Company Code, Fiscal Year. Press Enter. See all line items, amounts, who posted it, exact time. Double click any line to see full details.',
        caInsight: 'Like opening a saved voucher in Tally to verify it. Full audit trail — user ID and timestamp always visible.',
        commonMistakes: 'Not knowing the document number — always note it when you post',
        quiz: {
          question: 'Which T-code do you use to display a posted document?',
          options: ['FB50', 'FB03', 'FB08', 'FBL3N'],
          correctIndex: 1,
          explanation: 'FB03 is used to display a posted document. You need the document number, company code, and fiscal year.',
        },
      },
      {
        title: 'Reverse a Document',
        tcodes: ['FB08'],
        content: 'Type FB08, Enter. Enter original document number, company code, year. Enter Reversal Reason from dropdown. Enter Reversal Date. Save. SAP automatically posts exact opposite entry. Original document remains — both entries visible forever.',
        caInsight: 'Like a contra entry in Tally. Except SAP forces you to give a reason — good for audit compliance.',
        commonMistakes: 'Reversing the wrong document, using wrong reversal date which puts it in wrong period',
        quiz: {
          question: 'In SAP, can you delete a posted document?',
          options: ['Yes, from the document display', 'No — documents are only reversed', 'Yes, with FB08', 'Only before saving'],
          correctIndex: 1,
          explanation: 'Documents are never deleted — only reversed. FB08 posts the exact opposite entry; both remain visible.',
        },
      },
      {
        title: 'GL Account Line Item Report',
        tcodes: ['FBL3N'],
        content: 'Type FBL3N, Enter. Enter G/L Account number and Company Code. Choose All Items. Enter date range. Press F8 to execute. See every posting to that account. Double click any line to open the full document. Export to Excel using the spreadsheet icon or Ctrl+Shift+F7.',
        caInsight: 'Like a detailed ledger in Tally. Except you can drill into any entry instantly and export everything to Excel.',
        commonMistakes: 'Forgetting to select All Items and missing cleared entries, wrong date range',
        quiz: {
          question: 'To see every posting to a G/L account including cleared items, what should you select in FBL3N?',
          options: ['Open Items only', 'All Items', 'Cleared Items only', 'Last 30 days'],
          correctIndex: 1,
          explanation: 'Choose All Items so you do not miss cleared entries. Wrong selection gives incomplete ledger.',
        },
      },
    ],
  },
  {
    title: 'Accounts Payable',
    subtitle: 'Day 6 to 8',
    lessons: [
      {
        title: 'Look Up a Vendor',
        tcodes: ['FK03'],
        content: 'Type FK03, Enter. Enter Vendor Code and Company Code. See all vendor details — bank account, payment terms, address. You will not create vendors — that is the master data team. If you do not know a vendor code ask the team or search by name in the vendor list.',
        caInsight: 'Like looking up a creditor ledger in Tally to check bank details before payment.',
        commonMistakes: 'Trying to pay a vendor before confirming bank details are updated in master',
        quiz: {
          question: 'Who typically creates or maintains vendor master data in SAP?',
          options: ['Every user', 'Master data team', 'Only Finance Controller', 'BASIS team'],
          correctIndex: 1,
          explanation: 'You will not create vendors — that is the master data team. Use FK03 to look up details.',
        },
      },
      {
        title: 'Post Vendor Invoice',
        tcodes: ['FB60'],
        content: 'Type FB60, Enter. Enter Vendor Code — payment terms auto populate from master. Enter Invoice Date and Posting Date. Enter Amount and Currency. In G/L tab enter the expense account to debit. Verify balance zero. Save.',
        caInsight: 'Like posting a creditor entry in Tally. SAP automatically calculates due date from payment terms.',
        commonMistakes: 'Wrong invoice date affects due date and causes early or late payment, wrong expense account',
        quiz: {
          question: 'Where do payment terms come from when you post a vendor invoice in FB60?',
          options: ['You type them every time', 'They auto populate from master', 'From the G/L tab', 'From OB52'],
          correctIndex: 1,
          explanation: 'Payment terms auto populate from the vendor master. Wrong invoice date still affects due date.',
        },
      },
      {
        title: 'PO Based Invoice — MIRO',
        tcodes: ['MIRO'],
        content: 'Used when a Purchase Order exists. Type MIRO, Enter. Enter PO number — SAP pulls all PO details automatically. SAP matches against Goods Receipt. Verify quantities and amounts match. Post. Use MIRO instead of FB60 whenever a PO exists — FB60 without PO breaks the 3-way match.',
        caInsight: 'Like a GRN-linked invoice in any ERP. The 3-way match is PO plus GRN plus Invoice — SAP enforces this automatically.',
        commonMistakes: 'Using FB60 when PO exists — always ask if a PO was raised before posting',
        quiz: {
          question: 'When a Purchase Order exists for an invoice, which transaction should you use?',
          options: ['FB60', 'MIRO', 'F-53', 'FK03'],
          correctIndex: 1,
          explanation: 'Use MIRO when a PO exists. FB60 without PO breaks the 3-way match (PO, GRN, Invoice).',
        },
      },
      {
        title: 'Manual Vendor Payment',
        tcodes: ['F-53'],
        content: 'Type F-53, Enter. Enter Document Date and Posting Date. Enter Bank G/L Account — the SAP code for the bank you are paying from. Enter Amount. Enter Vendor Code. Click Process Open Items — SAP shows all unpaid invoices for this vendor. Select invoice being paid. Verify balance zero. Save.',
        caInsight: 'Like passing a payment entry in Tally against a specific bill. Same logic — select the bill, pay it.',
        commonMistakes: 'Selecting wrong bank G/L account, not matching against specific invoice',
        quiz: {
          question: 'In F-53, after entering vendor and amount, what do you click to see unpaid invoices?',
          options: ['Save', 'Process Open Items', 'Execute', 'Post'],
          correctIndex: 1,
          explanation: 'Click Process Open Items — SAP shows all unpaid invoices for this vendor. Select the one you are paying.',
        },
      },
      {
        title: 'Automatic Payment Run',
        tcodes: ['F110'],
        content: 'Type F110, Enter. Set Run Date and give an Identification name. In Parameters tab set Company Code, Payment Methods, Vendor range and Next Payment Date. Save Parameters. Click Proposal — SAP shows all invoices it will pay. REVIEW THIS CAREFULLY. If proposal looks correct click Payment Run to execute. Print payment advices after.',
        caInsight: 'Like a bulk NEFT payment batch — SAP picks all due invoices and pays them in one run.',
        commonMistakes: 'Running payment without reviewing proposal first — this is the most dangerous mistake in SAP, wrong parameters can pay wrong vendors',
        quiz: {
          question: 'Before executing the payment in F110, what must you do?',
          options: ['Print advices first', 'Review the Proposal carefully', 'Close other sessions', 'Run in test mode'],
          correctIndex: 1,
          explanation: 'Click Proposal and REVIEW THIS CAREFULLY. Wrong parameters can pay wrong vendors — always review before Payment Run.',
        },
      },
      {
        title: 'Vendor Line Item Report',
        tcodes: ['FBL1N'],
        content: 'Type FBL1N, Enter. Enter Vendor Code or range. Enter Company Code. Select Open Items to see unpaid invoices or All Items for complete history. Execute F8. Export to Excel for ageing analysis.',
        caInsight: 'Like a creditor ledger in Tally with outstanding bill-wise details.',
        commonMistakes: 'Not filtering by open items when checking outstanding payables',
        quiz: {
          question: 'To see only unpaid vendor invoices in FBL1N, which option do you select?',
          options: ['All Items', 'Open Items', 'Cleared Items', 'By due date'],
          correctIndex: 1,
          explanation: 'Select Open Items to see unpaid invoices. Use All Items for complete history.',
        },
      },
    ],
  },
  {
    title: 'Accounts Receivable',
    subtitle: 'Day 9 to 10',
    lessons: [
      {
        title: 'Post Customer Invoice',
        tcodes: ['FB70'],
        content: 'Type FB70, Enter. Enter Customer Code. Enter Invoice Date and Posting Date. Enter Amount. In G/L tab enter the income account to credit. Verify balance zero. Save. Note: if company uses SD sales module invoices come from there automatically — ask your team first.',
        caInsight: 'Like posting a debtor entry in Tally bill by bill.',
        commonMistakes: 'Posting in FB70 when SD module is active causes duplicates — always confirm with team',
        quiz: {
          question: 'Before posting a customer invoice in FB70, what should you confirm with your team?',
          options: ['Customer code', 'Whether SD module is active', 'Posting date', 'Currency'],
          correctIndex: 1,
          explanation: 'If SD is active, invoices may come from there automatically. Posting in FB70 can cause duplicates.',
        },
      },
      {
        title: 'Post Customer Receipt',
        tcodes: ['F-28'],
        content: 'Type F-28, Enter. Enter Document Date and Posting Date. Enter Bank G/L Account where money arrived. Enter Amount received. Enter Customer Code. Click Process Open Items — SAP shows all unpaid invoices for this customer. Select the invoice being paid. Verify balance zero. Save.',
        caInsight: 'Like posting a receipt entry in Tally against a specific debtor invoice. Match the money to the bill.',
        commonMistakes: 'Not matching against specific invoice — leaves both entries open and inflates debtors balance',
        quiz: {
          question: 'What happens if you do not match a receipt to a specific invoice in F-28?',
          options: ['SAP rejects the entry', 'Both entries stay open and debtors balance is inflated', 'Nothing', 'It clears the oldest invoice'],
          correctIndex: 1,
          explanation: 'Not matching against specific invoice leaves both entries open and inflates debtors balance. Always select the invoice.',
        },
      },
      {
        title: 'Customer Line Item Report',
        tcodes: ['FBL5N'],
        content: 'Type FBL5N, Enter. Enter Customer Code or range. Company Code. Select Open Items for outstanding debtors. Execute F8. Export to Excel for follow-up and ageing.',
        caInsight: 'Like your debtors outstanding report in Tally. Bill-wise outstanding with dates.',
        commonMistakes: 'Not exporting to Excel for proper ageing analysis',
        quiz: {
          question: 'Which T-code gives you bill-wise outstanding debtors?',
          options: ['FB70', 'F-28', 'FBL5N', 'F.01'],
          correctIndex: 2,
          explanation: 'FBL5N shows customer line items. Select Open Items for outstanding; export to Excel for ageing.',
        },
      },
    ],
  },
  {
    title: 'Financial Reporting',
    subtitle: 'Day 11 to 13',
    lessons: [
      {
        title: 'Financial Statements',
        tcodes: ['F.01'],
        content: 'Type F.01, Enter. Enter Financial Statement Version — ask your team for the correct code used in your company. Enter Company Code. Enter Fiscal Year and Reporting Periods — Period 1 is April, Period 12 is March for Indian companies. Execute F8. Gives Balance Sheet and P&L in one screen.',
        caInsight: 'Like pulling the final accounts in Tally. Except SAP gives it in seconds for any period you want.',
        commonMistakes: 'Wrong Financial Statement Version gives wrong format, wrong period selection gives partial figures',
        quiz: {
          question: 'For Indian companies in F.01, which period is typically March?',
          options: ['Period 1', 'Period 6', 'Period 12', 'Period 0'],
          correctIndex: 2,
          explanation: 'Period 1 is April, Period 12 is March for Indian companies. Wrong period gives partial figures.',
        },
      },
      {
        title: 'Balance Sheet and P&L Reports',
        tcodes: ['S_ALR_87012284', 'S_ALR_87012249'],
        content: 'S_ALR_87012284 for detailed Balance Sheet. S_ALR_87012249 for P&L. Enter Company Code and period. Execute. These give more drill-down than F.01. Click any line to see underlying GL accounts. Export everything to Excel.',
        caInsight: 'Like Schedule 3 format financial statements. You can drill from total to individual account to individual voucher in three clicks.',
        commonMistakes: 'Not drilling down to verify unusual balances',
        quiz: {
          question: 'Which report gives more drill-down than F.01 for the Balance Sheet?',
          options: ['FB03', 'S_ALR_87012284', 'FBL3N', 'OB52'],
          correctIndex: 1,
          explanation: 'S_ALR_87012284 gives detailed Balance Sheet with drill-down. Click any line to see underlying GL.',
        },
      },
      {
        title: 'GL Account Balances',
        tcodes: ['S_ALR_87012172'],
        content: 'Type S_ALR_87012172, Enter. Enter Company Code, Fiscal Year, Account range. Execute. Shows period-wise balance for every GL account — opening, period movement, closing. Essential for month end review.',
        caInsight: 'Like a trial balance with period-wise columns in Excel — except SAP generates it instantly.',
        commonMistakes: 'Not selecting all periods when reviewing full year movement',
        quiz: {
          question: 'What does S_ALR_87012172 show for each G/L account?',
          options: ['Only opening balance', 'Only closing balance', 'Opening, period movement, and closing', 'Only cleared items'],
          correctIndex: 2,
          explanation: 'It shows period-wise balance — opening, period movement, closing. Essential for month end review.',
        },
      },
    ],
  },
  {
    title: 'Bank Reconciliation',
    subtitle: 'Day 14 to 15',
    lessons: [
      {
        title: 'Bank Reconciliation Concept in SAP',
        tcodes: [],
        content: 'SAP maintains a Bank GL account. Every payment and receipt you post hits this GL account. The actual bank statement shows what the bank processed. Reconciliation means matching these two. Differences are caused by timing — cheques issued but not cleared, bank charges not yet posted. SAP eliminates most manual BRS work by auto-matching.',
        caInsight: 'Same as manual BRS you have done for years. SAP just does the matching automatically for most entries.',
        commonMistakes: 'Thinking SAP BRS is different from manual BRS — the concept is identical',
        quiz: {
          question: 'How is SAP bank reconciliation concept different from manual BRS?',
          options: ['Completely different', 'Concept is identical; SAP auto-matches most entries', 'SAP has no BRS', 'Only timing differs'],
          correctIndex: 1,
          explanation: 'Same as manual BRS. SAP just auto-matches most entries; you handle exceptions.',
        },
      },
      {
        title: 'Manual Bank Statement Entry',
        tcodes: ['FF67'],
        content: 'Type FF67, Enter. Enter House Bank code and Account ID — get these from your team. Enter Statement Date. Enter Opening Balance from actual bank statement. Enter each transaction from bank statement. SAP auto-matches known entries. For unmatched items create new postings. Enter Closing Balance. Must match bank statement closing balance exactly. Post.',
        caInsight: 'Like entering bank statement line by line in Tally for BRS — SAP just auto-matches most of it.',
        commonMistakes: 'Opening balance not matching previous statement closing balance, wrong House Bank code',
        quiz: {
          question: 'In FF67, where do you get the House Bank code and Account ID?',
          options: ['From the status bar', 'From your team', 'From F.01', 'They are the same for all companies'],
          correctIndex: 1,
          explanation: 'Get House Bank and Account ID from your team. Wrong code causes wrong reconciliation.',
        },
      },
      {
        title: 'Electronic Bank Statement',
        tcodes: ['FEBAN'],
        content: 'Most large companies upload bank statements automatically. Type FEBAN, Enter. Select your bank account and date. SAP shows auto-matched and unmatched items. Your job is only to handle exceptions — the unmatched items. Post matched items. Investigate and clear unmatched items manually.',
        caInsight: 'Like receiving a pre-filled BRS where 90 percent is already done — you only fix the exceptions.',
        commonMistakes: 'Ignoring unmatched items — they accumulate and create reconciliation nightmare',
        quiz: {
          question: 'In FEBAN, what is your main job?',
          options: ['Enter every line manually', 'Handle only the unmatched items', 'Run depreciation', 'Close the period'],
          correctIndex: 1,
          explanation: 'Your job is to handle exceptions — unmatched items. Post matched; investigate and clear unmatched manually.',
        },
      },
    ],
  },
  {
    title: 'Month End Closing',
    subtitle: 'Day 16 to 18',
    lessons: [
      {
        title: 'Month End Checklist',
        tcodes: [],
        content: 'Before a period closes in SAP these must be done: all invoices posted, all payments cleared, bank reconciliation complete, depreciation run done, accruals and provisions posted, intercompany entries confirmed. Period close is done by the Finance Controller or BASIS team — you must complete your postings before the deadline they communicate.',
        caInsight: 'Same as your month end checklist always — SAP just enforces it with hard deadlines by closing periods.',
        commonMistakes: 'Missing the period close deadline — you cannot post in a closed period without special access',
        quiz: {
          question: 'Who typically closes the posting period in SAP?',
          options: ['Any user', 'Finance Controller or BASIS team', 'Only BASIS', 'Master data team'],
          correctIndex: 1,
          explanation: 'Period close is done by Finance Controller or BASIS. You must complete your postings before their deadline.',
        },
      },
      {
        title: 'Check Open and Closed Periods',
        tcodes: ['OB52'],
        content: 'Type OB52, Enter. Shows which posting periods are open for which account types. If you get error "Posting period not open" it means the period is closed. Contact your Finance Controller or BASIS team to open it. You cannot open periods yourself.',
        caInsight: 'Like a lock on a financial year in Tally — except in SAP it is period by period and only admins can open or close.',
        commonMistakes: 'Trying to fix period errors yourself — always escalate to Finance Controller',
        quiz: {
          question: 'If you get "Posting period not open" error, what should you do?',
          options: ['Open the period yourself in OB52', 'Escalate to Finance Controller or BASIS', 'Use FB08', 'Change the posting date'],
          correctIndex: 1,
          explanation: 'You cannot open periods yourself. Contact Finance Controller or BASIS team.',
        },
      },
      {
        title: 'Depreciation Run',
        tcodes: ['AFAB'],
        content: 'Type AFAB, Enter. Enter Company Code and Fiscal Year and Period. First run in Test Mode — review output. If correct run in Productive Mode. SAP calculates and posts depreciation for all assets automatically. Run only once per period — running twice causes double depreciation.',
        caInsight: 'Like passing a depreciation journal — except SAP calculates every asset automatically based on the asset master data.',
        commonMistakes: 'Running in productive mode without test mode first, running twice in same period',
        quiz: {
          question: 'Before running AFAB in productive mode, what should you do?',
          options: ['Close other sessions', 'Run in Test Mode first and review', 'Run F.16', 'Open OB52'],
          correctIndex: 1,
          explanation: 'First run in Test Mode and review output. Running twice in same period causes double depreciation.',
        },
      },
      {
        title: 'Carry Forward Balances',
        tcodes: ['F.16'],
        content: 'Run at year end only. Type F.16, Enter. Enter Company Code and Fiscal Year ending. Execute. SAP carries forward all balance sheet account balances to next year. P&L balances go to retained earnings. Run only after all year end entries are complete and auditors have signed off.',
        caInsight: 'Like closing the books at year end in Tally and opening new year — SAP does it in one step.',
        commonMistakes: 'Running before year end audit is complete, running multiple times',
        quiz: {
          question: 'When should F.16 (carry forward) be run?',
          options: ['Every month', 'At year end only, after audit sign-off', 'When period is closed', 'After AFAB'],
          correctIndex: 1,
          explanation: 'Run at year end only, after all year end entries and auditor sign-off. Running multiple times is wrong.',
        },
      },
    ],
  },
];

// ─── SAP Screen Mockups (inline HTML snippets) ───────────────────────────────────
// Minimal CSS for SAP-style window, scoped to .sap-mock
const SAP_SCREEN_CSS = `
.sap-mock .sap-window {
  border: 2px solid #888;
  border-radius: 3px;
  overflow: hidden;
  font-family: 'Courier New', monospace;
  font-size: 11px;
  max-width: 780px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
}
.sap-mock .sap-titlebar {
  background: linear-gradient(180deg, #0054a6, #003d7a);
  color: white;
  padding: 4px 10px;
  font-size: 11px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Segoe UI', sans-serif;
}
.sap-mock .sap-titlebar-btns { display: flex; gap: 4px; }
.sap-mock .sap-titlebar-btns span {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background: #5a8fd0;
  display: inline-block;
  font-size: 9px;
  text-align: center;
  line-height: 12px;
}
.sap-mock .sap-menubar {
  background: #d4d0c8;
  border-bottom: 1px solid #888;
  padding: 2px 4px;
  display: flex;
  gap: 2px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 11px;
}
.sap-mock .sap-menu-item { padding: 2px 8px; cursor: pointer; color: #000; }
.sap-mock .sap-toolbar {
  background: #d4d0c8;
  border-bottom: 1px solid #999;
  padding: 3px 6px;
  display: flex;
  align-items: center;
  gap: 2px;
}
.sap-mock .sap-btn {
  background: #d4d0c8;
  border: 1px solid #888;
  padding: 2px 6px;
  font-size: 10px;
  cursor: pointer;
  color: #000;
  font-family: 'Segoe UI', sans-serif;
  border-radius: 1px;
}
.sap-mock .sap-btn-icon {
  width: 22px;
  height: 22px;
  background: #d4d0c8;
  border: 1px solid #888;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
.sap-mock .sap-separator { width: 1px; height: 20px; background: #999; margin: 0 3px; }
.sap-mock .sap-tcode-bar {
  background: #d4d0c8;
  border-bottom: 2px solid #888;
  padding: 3px 6px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 11px;
}
.sap-mock .sap-tcode-field {
  border: 1px inset #666;
  background: white;
  padding: 2px 6px;
  width: 120px;
  font-family: 'Courier New', monospace;
  font-size: 11px;
  color: #000080;
  font-weight: bold;
}
.sap-mock .sap-content {
  background: #f0f0f0;
  padding: 12px;
  min-height: 220px;
}
.sap-mock .sap-screen-title {
  background: #0054a6;
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  font-family: 'Segoe UI', sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
}
.sap-mock .sap-form { margin-bottom: 8px; }
.sap-mock .sap-row {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  gap: 6px;
  flex-wrap: wrap;
}
.sap-mock .sap-label,
.sap-mock .sap-label-req {
  color: #000;
  font-size: 11px;
  min-width: 140px;
  font-family: 'Segoe UI', sans-serif;
}
.sap-mock .sap-label-req { font-weight: bold; }
.sap-mock .sap-field {
  border: 1px solid #666;
  background: white;
  padding: 1px 4px;
  font-size: 11px;
  font-family: 'Courier New', monospace;
  color: #000080;
  height: 18px;
}
.sap-mock .sap-field-wide { width: 200px; }
.sap-mock .sap-field-med { width: 120px; }
.sap-mock .sap-field-small { width: 70px; }
.sap-mock .sap-field-filled { background: #ffffd0; }
.sap-mock .sap-field-req { background: #e8f0ff; border-color: #0054a6; }
.sap-mock .sap-section-header {
  background: #b8d4e8;
  border: 1px solid #888;
  padding: 3px 8px;
  font-size: 11px;
  font-family: 'Segoe UI', sans-serif;
  font-weight: bold;
  color: #000;
  margin-bottom: 4px;
  margin-top: 8px;
}
.sap-mock .sap-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 10px;
  font-family: 'Segoe UI', sans-serif;
  margin-top: 6px;
}
.sap-mock .sap-table th {
  background: #b0cce8;
  border: 1px solid #888;
  padding: 3px 6px;
  text-align: left;
  color: #000;
  font-weight: bold;
}
.sap-mock .sap-table td {
  border: 1px solid #ccc;
  padding: 2px 6px;
  background: white;
  color: #000;
  height: 16px;
}
.sap-mock .sap-table tr:nth-child(even) td { background: #f5f8ff; }
.sap-mock .sap-table .editable { background: #ffffd0; }
.sap-mock .sap-statusbar {
  background: #d4d0c8;
  border-top: 1px solid #888;
  padding: 2px 8px;
  font-size: 10px;
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  justify-content: space-between;
  color: #000;
}
.sap-mock .sap-status-msg { color: #006600; font-weight: bold; }
.sap-mock .sap-radio,
.sap-mock .sap-checkbox {
  display: flex;
  gap: 16px;
  font-size: 11px;
  font-family: 'Segoe UI', sans-serif;
  color: #000;
  align-items: center;
  margin: 4px 0;
}
.sap-mock .balance-zero { color: #006600; font-weight: bold; font-size: 12px; }
@keyframes sapPulse { 0%,100% { opacity: 1; } 50% { opacity: 0.6; } }
.sap-mock .red-arrow { animation: sapPulse 1.5s infinite; }
`;

// One representative screen per module (used for all lessons in that module)
const sapScreenByModule = {
  // Module 0 — SAP Navigation: Easy Access / T-code entry
  0: `
<div class="sap-mock">
  <style>${SAP_SCREEN_CSS}</style>
  <div class="sap-window">
    <div class="sap-titlebar">
      <span>SAP Easy Access</span>
      <div class="sap-titlebar-btns"><span>─</span><span>□</span><span>✕</span></div>
    </div>
    <div class="sap-menubar">
      <span class="sap-menu-item">Menu</span>
      <span class="sap-menu-item">Edit</span>
      <span class="sap-menu-item">Favorites</span>
      <span class="sap-menu-item">Extras</span>
      <span class="sap-menu-item">System</span>
      <span class="sap-menu-item">Help</span>
    </div>
    <div class="sap-toolbar">
      <span class="sap-btn-icon">◀</span>
      <span class="sap-btn-icon">▶</span>
      <span class="sap-btn-icon">⬆</span>
      <div class="sap-separator"></div>
      <span class="sap-btn-icon">💾</span>
      <span class="sap-btn-icon">⚡</span>
      <div class="sap-separator"></div>
      <span class="sap-btn-icon">🖨</span>
      <span class="sap-btn-icon">🔍</span>
    </div>
    <div class="sap-tcode-bar">
      <span style="font-family:'Segoe UI',sans-serif;font-size:11px;">Transaction:</span>
      <div style="position:relative;display:inline-block;">
        <input class="sap-tcode-field" value="FB50" readonly>
        <span style="position:absolute;top:-18px;left:10px;color:red;font-size:18px;font-weight:bold;" class="red-arrow">▼</span>
        <span style="position:absolute;top:-32px;left:-10px;background:red;color:white;font-size:9px;padding:2px 6px;border-radius:3px;white-space:nowrap;font-family:'Segoe UI',sans-serif;">Type T-code here</span>
      </div>
      <span class="sap-btn">✓</span>
    </div>
    <div class="sap-content" style="display:flex;gap:12px;padding:10px;">
      <div style="width:220px;border:1px solid #999;background:white;font-size:10px;font-family:'Segoe UI',sans-serif;">
        <div style="background:#0054a6;color:white;padding:3px 6px;font-weight:bold;">Favorites</div>
        <div style="padding:4px 8px;color:#0054a6;cursor:pointer;">📁 FB50 - Enter G/L Account Doc</div>
        <div style="padding:4px 8px;color:#0054a6;cursor:pointer;">📁 FBL3N - G/L Line Items</div>
        <div style="padding:4px 8px;color:#0054a6;cursor:pointer;">📁 F110 - Payment Run</div>
        <div style="padding:4px 8px;color:#0054a6;cursor:pointer;">📁 F.01 - Financial Statements</div>
      </div>
      <div style="flex:1;font-size:11px;font-family:'Segoe UI',sans-serif;color:#333;">
        <div style="background:#ffffd0;border:1px solid #ccaa00;padding:8px;border-radius:3px;margin-bottom:8px;">
          <strong>CA Tip:</strong> Add your 5 most used T-codes to Favorites on Day 1. Right-click any item → Add to Favorites.
        </div>
        <div style="background:#e8f0ff;border:1px solid #0054a6;padding:8px;border-radius:3px;">
          <strong>Key Commands:</strong><br/>
          /n — Back to main menu<br/>
          /o — Open new session (like new browser tab)<br/>
          /nex — Log off SAP
        </div>
      </div>
    </div>
    <div class="sap-statusbar">
      <span class="sap-status-msg">Welcome to SAP ERP — FI Posting</span>
      <span>SYS: PRD | Client: 100 | User: MANU.CA</span>
    </div>
  </div>
</div>
`,
  // Module 1 — Journal Entries: FB50 journal entry screen
  1: `
<div class="sap-mock">
  <style>${SAP_SCREEN_CSS}</style>
  <div class="sap-window">
    <div class="sap-titlebar">
      <span>Enter G/L Account Document: Company Code 1000</span>
      <div class="sap-titlebar-btns"><span>─</span><span>□</span><span>✕</span></div>
    </div>
    <div class="sap-menubar">
      <span class="sap-menu-item">Document</span>
      <span class="sap-menu-item">Edit</span>
      <span class="sap-menu-item">Goto</span>
      <span class="sap-menu-item">Extras</span>
      <span class="sap-menu-item">Environment</span>
    </div>
    <div class="sap-toolbar">
      <span class="sap-btn">💾 Post</span>
      <div class="sap-separator"></div>
      <span class="sap-btn">🔍 Simulate</span>
      <span class="sap-btn">Hold</span>
      <span class="sap-btn">Park</span>
    </div>
    <div class="sap-tcode-bar">
      <span style="font-family:'Segoe UI',sans-serif;font-size:11px;">Transaction:</span>
      <input class="sap-tcode-field" value="FB50" readonly>
    </div>
    <div class="sap-content">
      <div class="sap-form">
        <div class="sap-row">
          <span class="sap-label-req">Document Date *</span>
          <input class="sap-field sap-field-med sap-field-filled" value="31.03.2025" readonly>
          <span class="sap-label" style="min-width:80px;">Posting Date</span>
          <input class="sap-field sap-field-med sap-field-filled" value="31.03.2025" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Company Code *</span>
          <input class="sap-field sap-field-small sap-field-req" value="1000" readonly>
          <span class="sap-label" style="min-width:80px;">Currency</span>
          <input class="sap-field sap-field-small sap-field-filled" value="INR" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label">Reference</span>
          <input class="sap-field sap-field-wide" value="JV-2025-031" readonly>
          <span class="sap-label" style="min-width:80px;">Doc.Header Text</span>
          <input class="sap-field sap-field-wide" value="Audit Provision March" readonly>
        </div>
      </div>
      <div class="sap-section-header">G/L Line Items</div>
      <table class="sap-table">
        <tr><th>G/L Acct</th><th>D/C</th><th>Amount</th><th>Cost Ctr</th><th>Text</th></tr>
        <tr><td class="editable">400100</td><td class="editable">D</td><td class="editable" style="text-align:right;">50,000.00</td><td class="editable">CC001</td><td class="editable">Audit fee provision</td></tr>
        <tr><td class="editable">200300</td><td class="editable">C</td><td class="editable" style="text-align:right;">50,000.00</td><td class="editable"></td><td class="editable">Provision - audit fees</td></tr>
      </table>
      <div style="margin-top:8px;text-align:right;font-family:'Segoe UI',sans-serif;font-size:11px;">
        <span class="balance-zero">Balance: 0.00 ✓ Ready to Post</span>
      </div>
    </div>
    <div class="sap-statusbar">
      <span>FB50 | Enter G/L Account Document</span>
      <span>INR | Period 12 | FY 2025</span>
    </div>
  </div>
</div>
`,
  // Module 2 — Accounts Payable: FB60 vendor invoice
  2: `
<div class="sap-mock">
  <style>${SAP_SCREEN_CSS}</style>
  <div class="sap-window">
    <div class="sap-titlebar">
      <span>Enter Incoming Invoice</span>
      <div class="sap-titlebar-btns"><span>─</span><span>□</span><span>✕</span></div>
    </div>
    <div class="sap-menubar">
      <span class="sap-menu-item">Invoice</span>
      <span class="sap-menu-item">Edit</span>
      <span class="sap-menu-item">Goto</span>
      <span class="sap-menu-item">Extras</span>
    </div>
    <div class="sap-toolbar">
      <span class="sap-btn">💾 Post</span>
      <span class="sap-btn">Simulate</span>
      <span class="sap-btn">Hold</span>
      <span class="sap-btn">Park</span>
    </div>
    <div class="sap-tcode-bar">
      <span style="font-family:'Segoe UI',sans-serif;font-size:11px;">Transaction:</span>
      <input class="sap-tcode-field" value="FB60" readonly>
    </div>
    <div class="sap-content">
      <div class="sap-form">
        <div class="sap-row">
          <span class="sap-label-req">Vendor *</span>
          <input class="sap-field sap-field-med sap-field-req" value="V100045" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Invoice Date *</span>
          <input class="sap-field sap-field-med sap-field-filled" value="25.03.2025" readonly>
          <span class="sap-label" style="min-width:90px;">Posting Date</span>
          <input class="sap-field sap-field-med sap-field-filled" value="31.03.2025" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Amount *</span>
          <input class="sap-field sap-field-med sap-field-filled" value="1,18,000.00" readonly>
          <span class="sap-label" style="min-width:60px;">Currency</span>
          <input class="sap-field sap-field-small sap-field-filled" value="INR" readonly>
        </div>
      </div>
      <div class="sap-section-header">G/L Account Assignment</div>
      <table class="sap-table">
        <tr><th>G/L Account</th><th>D/C</th><th>Amount</th><th>Cost Centre</th><th>Text</th></tr>
        <tr><td class="editable">415000</td><td>D</td><td class="editable" style="text-align:right;">1,00,000.00</td><td class="editable">CC005</td><td class="editable">IT Services Mar 25</td></tr>
        <tr><td class="editable">175100</td><td>D</td><td class="editable" style="text-align:right;">18,000.00</td><td></td><td class="editable">GST Input 18%</td></tr>
      </table>
      <div style="margin-top:6px;text-align:right;font-size:11px;font-family:'Segoe UI',sans-serif;">
        <span class="balance-zero">Balance: 0.00 ✓</span>
      </div>
    </div>
    <div class="sap-statusbar">
      <span>FB60 | Vendor Invoice Entry</span>
      <span>Due Date: 24.04.2025 (NT30)</span>
    </div>
  </div>
</div>
`,
  // Module 3 — Accounts Receivable: F-28 incoming payment
  3: `
<div class="sap-mock">
  <style>${SAP_SCREEN_CSS}</style>
  <div class="sap-window">
    <div class="sap-titlebar">
      <span>Post Incoming Payments: Header Data</span>
      <div class="sap-titlebar-btns"><span>─</span><span>□</span><span>✕</span></div>
    </div>
    <div class="sap-tcode-bar">
      <span style="font-family:'Segoe UI',sans-serif;font-size:11px;">Transaction:</span>
      <input class="sap-tcode-field" value="F-28" readonly>
    </div>
    <div class="sap-content">
      <div class="sap-section-header">Bank Data</div>
      <div class="sap-form">
        <div class="sap-row">
          <span class="sap-label-req">Document Date *</span>
          <input class="sap-field sap-field-med sap-field-filled" value="01.04.2025" readonly>
          <span class="sap-label" style="min-width:80px;">Posting Date</span>
          <input class="sap-field sap-field-med sap-field-filled" value="01.04.2025" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Bank Account *</span>
          <input class="sap-field sap-field-med sap-field-req" value="113100" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Amount *</span>
          <input class="sap-field sap-field-med sap-field-filled" value="2,00,000.00" readonly>
          <span class="sap-label" style="min-width:60px;">Currency</span>
          <input class="sap-field sap-field-small sap-field-filled" value="INR" readonly>
        </div>
      </div>
      <div class="sap-section-header">Open Item Selection</div>
      <div class="sap-form">
        <div class="sap-row">
          <span class="sap-label-req">Customer *</span>
          <input class="sap-field sap-field-med sap-field-req" value="C200156" readonly>
        </div>
      </div>
      <div style="text-align:center;margin-top:10px;">
        <span class="sap-btn" style="padding:4px 20px;font-size:11px;background:#0054a6;color:white;">Process Open Items →</span>
      </div>
    </div>
    <div class="sap-statusbar">
      <span>F-28 | Incoming Payment</span>
      <span>Amount to clear: ₹ 2,00,000.00</span>
    </div>
  </div>
</div>
`,
  // Module 4 — Financial Reporting: F.01 financial statements
  4: `
<div class="sap-mock">
  <style>${SAP_SCREEN_CSS}</style>
  <div class="sap-window">
    <div class="sap-titlebar">
      <span>Financial Statements</span>
      <div class="sap-titlebar-btns"><span>─</span><span>□</span><span>✕</span></div>
    </div>
    <div class="sap-tcode-bar">
      <span style="font-family:'Segoe UI',sans-serif;font-size:11px;">Transaction:</span>
      <input class="sap-tcode-field" value="F.01" readonly>
    </div>
    <div class="sap-content">
      <div class="sap-form">
        <div class="sap-row">
          <span class="sap-label-req">Fin. Statement Version *</span>
          <input class="sap-field sap-field-med sap-field-req" value="INDIA" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Company Code *</span>
          <input class="sap-field sap-field-small sap-field-req" value="1000" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Fiscal Year *</span>
          <input class="sap-field sap-field-small sap-field-req" value="2025" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Reporting Periods *</span>
          <input class="sap-field sap-field-small sap-field-req" value="1" readonly>
          <span style="font-size:10px;font-family:'Segoe UI',sans-serif;color:#666;">to</span>
          <input class="sap-field sap-field-small sap-field-req" value="12" readonly>
        </div>
      </div>
      <div class="sap-section-header">Output Options</div>
      <div class="sap-checkbox">
        <input type="checkbox" checked> <span>Balance Sheet</span>
        <input type="checkbox" checked style="margin-left:16px;"> <span>Profit &amp; Loss Statement</span>
      </div>
      <div style="text-align:center;margin-top:10px;">
        <span class="sap-btn" style="padding:4px 20px;font-size:11px;background:#0054a6;color:white;">▶ Execute (F8)</span>
      </div>
    </div>
    <div class="sap-statusbar">
      <span>F.01 | Financial Statements</span>
      <span>FY 2025 | Periods 1-12</span>
    </div>
  </div>
</div>
`,
  // Module 5 — Bank Reconciliation: FF67 manual bank statement
  5: `
<div class="sap-mock">
  <style>${SAP_SCREEN_CSS}</style>
  <div class="sap-window">
    <div class="sap-titlebar">
      <span>Enter Bank Statement Manually</span>
      <div class="sap-titlebar-btns"><span>─</span><span>□</span><span>✕</span></div>
    </div>
    <div class="sap-tcode-bar">
      <span style="font-family:'Segoe UI',sans-serif;font-size:11px;">Transaction:</span>
      <input class="sap-tcode-field" value="FF67" readonly>
    </div>
    <div class="sap-content">
      <div class="sap-form">
        <div class="sap-row">
          <span class="sap-label-req">House Bank *</span>
          <input class="sap-field sap-field-med sap-field-req" value="HDFC1" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Account ID *</span>
          <input class="sap-field sap-field-med sap-field-req" value="CURR01" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Statement Date *</span>
          <input class="sap-field sap-field-med sap-field-req" value="31.03.2025" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Opening Balance *</span>
          <input class="sap-field sap-field-med sap-field-filled" value="45,23,456.00" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Closing Balance *</span>
          <input class="sap-field sap-field-med sap-field-filled" value="52,18,320.00" readonly>
        </div>
      </div>
      <div class="sap-section-header">Statement Line Items</div>
      <table class="sap-table">
        <tr><th>Value Date</th><th>Amount</th><th>Description</th><th>Match</th></tr>
        <tr><td>28.03.25</td><td style="text-align:right;color:#006600;">+8,00,000.00</td><td>NEFT CR - Reliance Ind</td><td style="color:#006600;">✓ Auto</td></tr>
        <tr><td>29.03.25</td><td style="text-align:right;color:#cc0000;">-2,36,000.00</td><td>NEFT DR - Infosys Ltd</td><td style="color:#006600;">✓ Auto</td></tr>
        <tr><td>31.03.25</td><td style="text-align:right;color:#cc0000;">-1,05,136.00</td><td>Bank Charges + GST</td><td style="color:#cc6600;">⚠ Manual</td></tr>
      </table>
    </div>
    <div class="sap-statusbar">
      <span>FF67 | Difference: 0.00 ✓</span>
      <span>1 item needs manual posting</span>
    </div>
  </div>
</div>
`,
  // Module 6 — Month End Closing: AFAB depreciation run
  6: `
<div class="sap-mock">
  <style>${SAP_SCREEN_CSS}</style>
  <div class="sap-window">
    <div class="sap-titlebar">
      <span>Depreciation Posting Run</span>
      <div class="sap-titlebar-btns"><span>─</span><span>□</span><span>✕</span></div>
    </div>
    <div class="sap-tcode-bar">
      <span style="font-family:'Segoe UI',sans-serif;font-size:11px;">Transaction:</span>
      <input class="sap-tcode-field" value="AFAB" readonly>
    </div>
    <div class="sap-content">
      <div class="sap-form">
        <div class="sap-row">
          <span class="sap-label-req">Company Code *</span>
          <input class="sap-field sap-field-small sap-field-req" value="1000" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Fiscal Year *</span>
          <input class="sap-field sap-field-small sap-field-req" value="2025" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Posting Period *</span>
          <input class="sap-field sap-field-small sap-field-req" value="12" readonly>
        </div>
      </div>
      <div class="sap-section-header">Processing Options</div>
      <div class="sap-radio" style="flex-direction:column;gap:6px;">
        <label style="display:flex;align-items:center;gap:6px;"><input type="radio" name="dep" checked> <span style="color:#cc6600;font-weight:bold;">Test Run (always first)</span></label>
        <label style="display:flex;align-items:center;gap:6px;"><input type="radio" name="dep"> <span>Productive Run (after review)</span></label>
      </div>
      <div style="margin-top:10px;background:#ffe0e0;border:1px solid #cc0000;padding:6px;font-size:10px;font-family:'Segoe UI',sans-serif;color:#cc0000;">
        Running productive mode twice in same period = double depreciation. There is no undo — only manual correction.
      </div>
      <div style="text-align:center;margin-top:8px;">
        <span class="sap-btn" style="padding:4px 20px;font-size:11px;background:#0054a6;color:white;">▶ Execute (F8)</span>
      </div>
    </div>
    <div class="sap-statusbar">
      <span>AFAB | Depreciation Run</span>
      <span>Co: 1000 | Period 12 | FY 2025</span>
    </div>
  </div>
</div>
`,
};

// Lesson-specific overrides (moduleIndex-lessonIndex)
// If a key exists here it takes precedence over the module-level screen.
const sapScreenByLesson = {
  // FB70 lesson → show FB60 (closest vendor invoice match)
  '3-0': sapScreenByModule[2],
  // FB03 Display Document → dedicated FB03 screen
  '1-1': `
<div class="sap-mock">
  <style>${SAP_SCREEN_CSS}</style>
  <div class="sap-window">
    <div class="sap-titlebar">
      <span>Display Document: Data Entry View</span>
      <div class="sap-titlebar-btns"><span>─</span><span>□</span><span>✕</span></div>
    </div>
    <div class="sap-menubar">
      <span class="sap-menu-item">Document</span>
      <span class="sap-menu-item">Edit</span>
      <span class="sap-menu-item">Goto</span>
      <span class="sap-menu-item">Environment</span>
    </div>
    <div class="sap-tcode-bar">
      <span style="font-family:'Segoe UI',sans-serif;font-size:11px;">Transaction:</span>
      <input class="sap-tcode-field" value="FB03" readonly>
    </div>
    <div class="sap-content">
      <div class="sap-form">
        <div class="sap-row">
          <span class="sap-label">Document Number</span>
          <input class="sap-field sap-field-med sap-field-filled" value="1800000123" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label">Company Code</span>
          <input class="sap-field sap-field-small sap-field-filled" value="1000" readonly>
          <span class="sap-label" style="min-width:60px;">Fiscal Year</span>
          <input class="sap-field sap-field-small sap-field-filled" value="2025" readonly>
        </div>
      </div>
      <div class="sap-section-header">Document Header — Posted by MANU.CA on 31.03.2025 14:22</div>
      <div style="font-family:'Segoe UI',sans-serif;font-size:10px;background:white;border:1px solid #ccc;padding:6px;margin-bottom:6px;">
        <div><b>Doc Type:</b> SA &nbsp;&nbsp; <b>Doc Date:</b> 31.03.2025 &nbsp;&nbsp; <b>Posting Date:</b> 31.03.2025 &nbsp;&nbsp; <b>Period:</b> 12</div>
        <div style="margin-top:4px;"><b>Reference:</b> JV-2025-031 &nbsp;&nbsp; <b>Header Text:</b> Audit Provision March</div>
      </div>
      <table class="sap-table">
        <tr><th>Itm</th><th>PK</th><th>Account</th><th>Description</th><th>Amount</th></tr>
        <tr><td>1</td><td>40</td><td>400100</td><td>Audit Expenses</td><td style="text-align:right;">50,000.00</td></tr>
        <tr><td>2</td><td>50</td><td>200300</td><td>Provisions A/c</td><td style="text-align:right;">50,000.00-</td></tr>
      </table>
      <div style="margin-top:6px;font-size:10px;font-family:'Segoe UI',sans-serif;color:#006600;">
        Document posted successfully. Double-click any line for details.
      </div>
    </div>
    <div class="sap-statusbar">
      <span>Document 1800000123 displayed</span>
      <span>Co.Cd: 1000 | FY: 2025</span>
    </div>
  </div>
</div>
`,
  // FBL5N lesson → dedicated Customer Line Items output screen
  '3-2': `
<div class="sap-mock">
  <style>${SAP_SCREEN_CSS}</style>
  <div class="sap-window">
    <div class="sap-titlebar">
      <span>Customer Line Item Display — Output</span>
      <div class="sap-titlebar-btns"><span>─</span><span>□</span><span>✕</span></div>
    </div>
    <div class="sap-tcode-bar">
      <span style="font-family:'Segoe UI',sans-serif;font-size:11px;">Transaction:</span>
      <input class="sap-tcode-field" value="FBL5N" readonly>
    </div>
    <div class="sap-content">
      <div style="display:flex;gap:8px;margin-bottom:8px;">
        <span class="sap-btn">📊 Export Excel</span>
        <span class="sap-btn">Ageing</span>
        <span class="sap-btn">Sum</span>
      </div>
      <table class="sap-table" style="font-size:10px;">
        <tr><th>Doc No</th><th>Doc Date</th><th>Due Date</th><th>Customer</th><th>Amount (INR)</th><th>Days O/D</th></tr>
        <tr><td>1400234</td><td>01.02.25</td><td style="color:#cc0000;font-weight:bold;">03.03.25</td><td>Reliance Ind</td><td style="text-align:right;">5,00,000.00</td><td style="color:#cc0000;font-weight:bold;">29</td></tr>
        <tr><td>1400198</td><td>15.01.25</td><td style="color:#cc0000;font-weight:bold;">15.02.25</td><td>Reliance Ind</td><td style="text-align:right;">2,00,000.00</td><td style="color:#cc0000;font-weight:bold;">45</td></tr>
        <tr><td>1400167</td><td>01.01.25</td><td>31.01.25</td><td>Adani Ports</td><td style="text-align:right;">3,50,000.00</td><td style="color:#006600;">0</td></tr>
      </table>
      <div style="margin-top:6px;font-size:11px;font-family:'Segoe UI',sans-serif;">
        <span style="color:#cc0000;font-weight:bold;">Overdue: ₹ 7,00,000.00</span>
        &nbsp;|&nbsp; Total Open: ₹ 10,50,000.00
      </div>
    </div>
    <div class="sap-statusbar">
      <span>3 open items | 2 overdue</span>
      <span>FBL5N | Co: 1000</span>
    </div>
  </div>
</div>
`,
  // S_ALR_87012284 lesson → Balance Sheet output screen
  '4-1': `
<div class="sap-mock">
  <style>${SAP_SCREEN_CSS}</style>
  <div class="sap-window">
    <div class="sap-titlebar">
      <span>Balance Sheet as of 31.03.2025</span>
      <div class="sap-titlebar-btns"><span>─</span><span>□</span><span>✕</span></div>
    </div>
    <div class="sap-tcode-bar">
      <span style="font-family:'Segoe UI',sans-serif;font-size:11px;">Transaction:</span>
      <input class="sap-tcode-field" value="S_ALR_87012284" readonly>
    </div>
    <div class="sap-content">
      <div style="display:flex;gap:6px;margin-bottom:8px;">
        <span class="sap-btn">📊 Export Excel</span>
        <span class="sap-btn">🖨 Print</span>
        <span class="sap-btn">PDF</span>
      </div>
      <table class="sap-table" style="font-size:10px;">
        <tr><th colspan="3" style="background:#003d7a;color:white;">LIABILITIES &amp; EQUITY</th><th colspan="2" style="background:#003d7a;color:white;">ASSETS</th></tr>
        <tr><th>Account</th><th>FY 2025</th><th>FY 2024</th><th>Account</th><th>FY 2025</th></tr>
        <tr><td style="color:#0054a6;cursor:pointer;font-weight:bold;">▶ Share Capital</td><td style="text-align:right;">10,00,00,000</td><td style="text-align:right;">10,00,00,000</td><td style="color:#0054a6;cursor:pointer;font-weight:bold;">▶ Fixed Assets</td><td style="text-align:right;">8,50,00,000</td></tr>
        <tr><td style="color:#0054a6;cursor:pointer;">▶ Reserves &amp; Surplus</td><td style="text-align:right;">5,50,00,000</td><td style="text-align:right;">4,20,00,000</td><td style="color:#0054a6;cursor:pointer;">▶ Investments</td><td style="text-align:right;">2,00,00,000</td></tr>
        <tr><td style="color:#0054a6;cursor:pointer;">▶ Long Term Loans</td><td style="text-align:right;">3,00,00,000</td><td style="text-align:right;">4,00,00,000</td><td style="color:#0054a6;cursor:pointer;">▶ Debtors</td><td style="text-align:right;">7,50,00,000</td></tr>
        <tr><td style="color:#0054a6;cursor:pointer;">▶ Current Liabilities</td><td style="text-align:right;">4,50,00,000</td><td style="text-align:right;">3,80,00,000</td><td style="color:#0054a6;cursor:pointer;">▶ Cash &amp; Bank</td><td style="text-align:right;">3,00,00,000</td></tr>
        <tr style="background:#b8d4e8;font-weight:bold;"><td>TOTAL</td><td style="text-align:right;">23,00,00,000</td><td style="text-align:right;">22,00,00,000</td><td>TOTAL</td><td style="text-align:right;">23,00,00,000</td></tr>
      </table>
      <div style="margin-top:6px;font-size:10px;font-family:'Segoe UI',sans-serif;color:#0054a6;">
        Double-click any ▶ row to drill into individual GL accounts.
      </div>
    </div>
    <div class="sap-statusbar">
      <span class="sap-status-msg">Balance Sheet balanced ✓</span>
      <span>Co: 1000 | FY: 2025</span>
    </div>
  </div>
</div>
`,
  // OB52 lesson → Posting Periods overview screen
  '6-1': `
<div class="sap-mock">
  <style>${SAP_SCREEN_CSS}</style>
  <div class="sap-window">
    <div class="sap-titlebar">
      <span>Change View: Posting Periods — Overview</span>
      <div class="sap-titlebar-btns"><span>─</span><span>□</span><span>✕</span></div>
    </div>
    <div class="sap-tcode-bar">
      <span style="font-family:'Segoe UI',sans-serif;font-size:11px;">Transaction:</span>
      <input class="sap-tcode-field" value="OB52" readonly>
    </div>
    <div class="sap-content">
      <table class="sap-table" style="font-size:10px;">
        <tr><th>Var</th><th>A</th><th>From Per 1</th><th>Year</th><th>To Per 1</th><th>Year</th><th>Status</th></tr>
        <tr><td>1000</td><td>+</td><td>1</td><td>2025</td><td>12</td><td>2025</td><td style="color:#006600;font-weight:bold;">✓ OPEN</td></tr>
        <tr><td>1000</td><td>A</td><td>1</td><td>2025</td><td>12</td><td>2025</td><td style="color:#006600;font-weight:bold;">✓ OPEN</td></tr>
        <tr><td>1000</td><td>D</td><td>1</td><td>2025</td><td>12</td><td>2025</td><td style="color:#006600;font-weight:bold;">✓ OPEN</td></tr>
        <tr><td>1000</td><td>K</td><td>1</td><td>2025</td><td>12</td><td>2025</td><td style="color:#006600;font-weight:bold;">✓ OPEN</td></tr>
        <tr><td>1000</td><td>+</td><td>1</td><td>2024</td><td>12</td><td>2024</td><td style="color:#cc0000;font-weight:bold;">🔒 CLOSED</td></tr>
      </table>
      <div style="margin-top:10px;background:#ffffd0;border:1px solid #ccaa00;padding:8px;font-size:10px;font-family:'Segoe UI',sans-serif;">
        Error &quot;Posting period not open&quot;? Do not try to fix this yourself. Contact Finance Controller or BASIS with Company Code and period.
      </div>
    </div>
    <div class="sap-statusbar">
      <span>OB52 | Posting Periods</span>
      <span>FY 2025 Open | FY 2024 Closed</span>
    </div>
  </div>
</div>
`,
  // Month End Checklist lesson → explicitly no screen
  '6-0': null,
  // Bank Reconciliation Concept in SAP → no specific screen
  '5-0': null,
  // Electronic Bank Statement lesson → FEBAN monitor screen
  '5-2': `
<div class="sap-mock">
  <style>${SAP_SCREEN_CSS}</style>
  <div class="sap-window">
    <div class="sap-titlebar">
      <span>Bank Statement Monitor</span>
      <div class="sap-titlebar-btns"><span>─</span><span>□</span><span>✕</span></div>
    </div>
    <div class="sap-tcode-bar">
      <span style="font-family:'Segoe UI',sans-serif;font-size:11px;">Transaction:</span>
      <input class="sap-tcode-field" value="FEBAN" readonly>
    </div>
    <div class="sap-content">
      <div style="display:flex;gap:16px;margin-bottom:10px;font-size:11px;font-family:'Segoe UI',sans-serif;">
        <div style="background:white;border:1px solid #ccc;padding:8px 12px;text-align:center;border-radius:3px;">
          <div style="font-size:18px;font-weight:bold;color:#006600;">47</div>
          <div style="color:#666;">Auto Matched</div>
        </div>
        <div style="background:white;border:1px solid #ccc;padding:8px 12px;text-align:center;border-radius:3px;">
          <div style="font-size:18px;font-weight:bold;color:#cc6600;">3</div>
          <div style="color:#666;">Exceptions</div>
        </div>
        <div style="background:white;border:1px solid #ccc;padding:8px 12px;text-align:center;border-radius:3px;">
          <div style="font-size:18px;font-weight:bold;color:#0054a6;">50</div>
          <div style="color:#666;">Total Lines</div>
        </div>
      </div>
      <div class="sap-section-header" style="background:#ffe0e0;border-color:#cc0000;color:#cc0000;">Exceptions — Needs Your Attention</div>
      <table class="sap-table" style="font-size:10px;">
        <tr><th>Date</th><th>Amount</th><th>Description</th><th>Reason</th></tr>
        <tr><td>31.03.25</td><td style="color:#cc0000;">-1,05,136</td><td>Bank Charges</td><td style="color:#cc6600;">No match found</td></tr>
        <tr><td>30.03.25</td><td style="color:#006600;">+50,000</td><td>Unknown NEFT</td><td style="color:#cc6600;">No customer match</td></tr>
        <tr><td>28.03.25</td><td style="color:#cc0000;">-18,200</td><td>Cheque 004521</td><td style="color:#cc6600;">Stale cheque</td></tr>
      </table>
      <div style="margin-top:6px;font-size:10px;font-family:'Segoe UI',sans-serif;color:#006600;">
        Post matched items first, then investigate each exception one by one.
      </div>
    </div>
    <div class="sap-statusbar">
      <span>FEBAN | 94% auto-matched</span>
      <span>3 exceptions pending</span>
    </div>
  </div>
</div>
`,
  // GL Account Line Item Report → FBL3N selection screen
  '1-3': `
<div class="sap-mock">
  <style>${SAP_SCREEN_CSS}</style>
  <div class="sap-window">
    <div class="sap-titlebar">
      <span>G/L Account Line Item Display</span>
      <div class="sap-titlebar-btns"><span>─</span><span>□</span><span>✕</span></div>
    </div>
    <div class="sap-tcode-bar">
      <span style="font-family:'Segoe UI',sans-serif;font-size:11px;">Transaction:</span>
      <input class="sap-tcode-field" value="FBL3N" readonly>
    </div>
    <div class="sap-content">
      <div class="sap-form">
        <div class="sap-row">
          <span class="sap-label-req">G/L Account *</span>
          <input class="sap-field sap-field-med sap-field-req" value="400100" readonly>
          <span style="font-size:10px;font-family:'Segoe UI',sans-serif;color:#666;">to</span>
          <input class="sap-field sap-field-med" value="" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Company Code *</span>
          <input class="sap-field sap-field-small sap-field-req" value="1000" readonly>
        </div>
        <div style="margin:6px 0;font-family:'Segoe UI',sans-serif;font-size:11px;font-weight:bold;color:#000;">Line Item Selection</div>
        <div class="sap-radio">
          <label><input type="radio" name="li"> Open Items</label>
          <label><input type="radio" name="li"> Cleared Items</label>
          <label><input type="radio" name="li" checked> All Items</label>
        </div>
        <div class="sap-row" style="margin-top:6px;">
          <span class="sap-label">Posting Date</span>
          <input class="sap-field sap-field-med sap-field-filled" value="01.04.2024" readonly>
          <span style="font-size:10px;font-family:'Segoe UI',sans-serif;color:#666;">to</span>
          <input class="sap-field sap-field-med sap-field-filled" value="31.03.2025" readonly>
        </div>
      </div>
      <div style="text-align:center;margin-top:10px;">
        <span class="sap-btn" style="padding:4px 20px;font-size:12px;background:#0054a6;color:white;border-color:#003d7a;">▶ Execute (F8)</span>
        <span style="margin-left:20px;font-size:10px;font-family:'Segoe UI',sans-serif;color:#666;">Results export to Excel via toolbar.</span>
      </div>
    </div>
    <div class="sap-statusbar">
      <span>FBL3N | G/L Line Items</span>
      <span>Tip: Ctrl+Shift+F7 to export to Excel</span>
    </div>
  </div>
</div>
`,
};

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const Icons = {
  logo: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="2" y="2" width="28" height="28" rx="6" stroke="#c8a96e" strokeWidth="2" />
      <path d="M9 22V10h4.5c2.5 0 4 1.2 4 3.2 0 1.5-1 2.6-2.5 3L18 22h-3l-2.5-5H12v5H9z" fill="#c8a96e" />
      <circle cx="22" cy="12" r="3" fill="#5aacda" opacity="0.6" />
      <rect x="19" y="18" width="6" height="2" rx="1" fill="#c8a96e" opacity="0.4" />
    </svg>
  ),
  back: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  check: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="8" stroke="#4aaa7a" strokeWidth="1.5" />
      <path d="M5.5 9l2.5 2.5L12.5 7" stroke="#4aaa7a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  copy: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="5" y="5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 11V3.5A.5.5 0 013.5 3H11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  search: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="7.5" cy="7.5" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11.5 11.5L15.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  clock: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 4v3.5l2.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  book: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 19.5V4.5A2 2 0 016 2.5h14v17H6a2 2 0 00-2 2z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 19.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 7h8M8 11h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  chart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="12" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="6" width="4" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="17" y="9" width="4" height="11" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  settings: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M15.66 15.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M15.66 8.34l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  layers: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l10 6-10 6L2 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M2 12l10 6 10-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M2 16l10 6 10-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  database: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  shield: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l7 4v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V7l7-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  print: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M4 6V2h10v4M4 12h10v6H4v-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="2" y="6" width="14" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
};

const moduleIcons = [Icons.book, Icons.chart, Icons.settings, Icons.layers, Icons.database, Icons.shield];

// Derive total lessons and T-code list from curriculum
const totalLessons = curriculum.reduce((acc, m) => acc + m.lessons.length, 0);
function getTcodeList() {
  const list = [];
  curriculum.forEach((mod, mi) => {
    mod.lessons.forEach((les, li) => {
      (les.tcodes || []).forEach((code) => {
        list.push({ code, module: mod.title, lesson: les.title });
      });
    });
  });
  return list;
}

// ─── Style Constants ──────────────────────────────────────────────────────────
const C = {
  bgPrimary: '#0a0e1a',
  bgSecondary: '#111827',
  bgCard: '#151f30',
  accent: '#c8a96e',
  accentLight: '#e8d5a3',
  textPrimary: '#e8d5a3',
  textSecondary: '#8a9bb0',
  textMuted: '#4a5a6a',
  success: '#4aaa7a',
  tcode: '#5aacda',
  tcodeBg: '#0f2030',
  border: '#1e2a3a',
  warning: '#d4a44a',
  heading: "'Playfair Display', Georgia, serif",
  body: "'IBM Plex Sans', -apple-system, sans-serif",
  mono: "'IBM Plex Mono', 'Courier New', monospace",
};

// ─── Shared Styles ────────────────────────────────────────────────────────────
const s = {
  card: {
    background: C.bgCard,
    border: `1px solid ${C.border}`,
    borderRadius: 12,
    transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
    cursor: 'pointer',
  },
  cardHover: {
    borderColor: C.accent,
    transform: 'translateY(-2px)',
    boxShadow: `0 8px 32px rgba(200,169,110,0.08)`,
  },
  btnPrimary: {
    background: `linear-gradient(135deg, ${C.accent} 0%, #b8954e 100%)`,
    color: '#0a0e1a',
    border: 'none',
    borderRadius: 8,
    padding: '12px 28px',
    fontSize: 14,
    fontWeight: 600,
    fontFamily: C.body,
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    boxShadow: '0 4px 16px rgba(200,169,110,0.2)',
    letterSpacing: '0.3px',
  },
  btnPrimaryHover: {
    transform: 'scale(1.04)',
    boxShadow: '0 6px 24px rgba(200,169,110,0.35)',
  },
  tcodeChip: {
    display: 'inline-block',
    fontFamily: C.mono,
    color: C.tcode,
    background: C.tcodeBg,
    padding: '3px 10px',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: '0.5px',
    marginRight: 6,
    marginBottom: 4,
  },
  backBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    color: C.textSecondary,
    background: 'none',
    border: 'none',
    fontFamily: C.body,
    fontSize: 14,
    cursor: 'pointer',
    padding: '6px 0',
    transition: 'color 0.2s',
    marginBottom: 24,
  },
  progressBar: (pct, color = C.accent) => ({
    width: '100%',
    height: 6,
    background: 'rgba(255,255,255,0.06)',
    borderRadius: 3,
    overflow: 'hidden',
    position: 'relative',
  }),
  progressFill: (pct, color = C.accent) => ({
    width: `${pct}%`,
    height: '100%',
    background: `linear-gradient(90deg, ${color}, ${C.accentLight})`,
    borderRadius: 3,
    transition: 'width 0.4s ease',
  }),
};

// ─── Hover helper ─────────────────────────────────────────────────────────────
function useHover() {
  const [hovered, setHovered] = useState(null);
  return {
    hovered,
    bind: (id) => ({
      onMouseEnter: () => setHovered(id),
      onMouseLeave: () => setHovered(null),
    }),
    is: (id) => hovered === id,
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE 1: HOME
// ═══════════════════════════════════════════════════════════════════════════════
function HomePage({ navigate, completedLessons }) {
  const h = useHover();

  const completedCount = completedLessons.size;
  const progressPct = totalLessons ? Math.round((completedCount / totalLessons) * 100) : 0;

  // First incomplete: first lesson (mod, les) not in completedLessons
  let firstIncomplete = null;
  for (let mi = 0; mi < curriculum.length; mi++) {
    for (let li = 0; li < curriculum[mi].lessons.length; li++) {
      if (!completedLessons.has(`${mi}-${li}`)) {
        firstIncomplete = { mi, li };
        break;
      }
    }
    if (firstIncomplete) break;
  }

  return (
    <div style={{ minHeight: '100vh', fontFamily: C.body }}>
      {/* ── Header ─────────────────────────────────────────── */}
      <header style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px 32px',
        borderBottom: `1px solid ${C.border}`,
        background: 'rgba(10,14,26,0.8)',
        backdropFilter: 'blur(12px)',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {Icons.logo}
          <span style={{
            fontFamily: C.heading, fontSize: 18, fontWeight: 700,
            color: C.accentLight, letterSpacing: '0.5px',
          }}>
            SAP FICO
          </span>
          <span style={{ color: C.textMuted, fontSize: 12, fontWeight: 400, marginLeft: 4 }}>
            Learning Platform
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 160 }}>
            <div style={{ fontSize: 10, color: C.textMuted, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Overall Progress
            </div>
            <div style={s.progressBar(progressPct)}>
              <div style={s.progressFill(progressPct)} />
            </div>
          </div>
          <button
            style={{
              ...s.card,
              padding: '8px 16px',
              fontSize: 12,
              color: C.tcode,
              fontFamily: C.mono,
              fontWeight: 500,
              display: 'flex', alignItems: 'center', gap: 6,
              background: C.tcodeBg,
              border: `1px solid ${C.border}`,
              ...(h.is('tcode-btn') ? { borderColor: C.tcode, color: '#7cc4ea' } : {}),
            }}
            {...h.bind('tcode-btn')}
            onClick={() => navigate('tcode')}
          >
            T-Code Reference
          </button>
          <button
            style={{
              ...s.card,
              padding: '8px 16px',
              fontSize: 12,
              color: C.tcode,
              fontFamily: C.mono,
              fontWeight: 500,
              display: 'flex', alignItems: 'center', gap: 6,
              background: C.tcodeBg,
              border: `1px solid ${C.border}`,
              ...(h.is('cheat-btn') ? { borderColor: C.tcode, color: '#7cc4ea' } : {}),
            }}
            {...h.bind('cheat-btn')}
            onClick={() => navigate('cheatsheet')}
          >
            Cheat Sheet
          </button>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section style={{ padding: '60px 32px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{
          fontFamily: C.heading, fontSize: 42, fontWeight: 700,
          color: C.accentLight, marginBottom: 8, lineHeight: 1.2,
        }}>
          Master SAP FICO
        </h1>
        <p style={{ fontSize: 16, color: C.textSecondary, marginBottom: 40, maxWidth: 560, lineHeight: 1.6 }}>
          Financial Accounting & Controlling — structured learning with real-world
          transaction codes, CA insights, and assessment-driven mastery.
        </p>

        {/* Stat boxes */}
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 48 }}>
          {[
            { label: 'Lessons Completed', value: String(completedCount), sub: `of ${totalLessons}` },
            { label: 'Quizzes Passed', value: String(completedCount), sub: `of ${totalLessons}` },
            { label: 'Days Remaining', value: '90', sub: 'subscription' },
          ].map((st, i) => (
            <div key={i} style={{
              ...s.card,
              padding: '20px 28px',
              minWidth: 180,
              flex: '1 1 180px',
              ...(h.is(`stat-${i}`) ? s.cardHover : {}),
            }} {...h.bind(`stat-${i}`)}>
              <div style={{ fontSize: 11, color: C.textMuted, textTransform: 'uppercase', letterSpacing: '1.2px', marginBottom: 8 }}>
                {st.label}
              </div>
              <div style={{ fontFamily: C.heading, fontSize: 32, fontWeight: 700, color: C.accentLight }}>
                {st.value}
              </div>
              <div style={{ fontSize: 12, color: C.textMuted, marginTop: 4 }}>{st.sub}</div>
            </div>
          ))}
        </div>

        {/* ── Module Grid ──────────────────────────────────── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h2 style={{ fontFamily: C.heading, fontSize: 22, color: C.accentLight, fontWeight: 600 }}>
            Learning Modules
          </h2>
          <button
            style={{
              ...s.btnPrimary,
              ...(h.is('continue') ? s.btnPrimaryHover : {}),
            }}
            {...h.bind('continue')}
            onClick={() => firstIncomplete != null && navigate('lesson', firstIncomplete.mi, firstIncomplete.li)}
          >
            Continue Learning →
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 20,
        }}>
          {curriculum.map((mod, i) => {
            const lessonCount = mod.lessons.length;
            const complete = mod.lessons.reduce((c, _, li) => c + (completedLessons.has(`${i}-${li}`) ? 1 : 0), 0);
            const allDone = complete === lessonCount;
            return (
              <div
                key={i}
                style={{
                  ...s.card,
                  padding: '24px',
                  display: 'flex', flexDirection: 'column', gap: 16,
                  ...(h.is(`mod-${i}`) ? s.cardHover : {}),
                }}
                {...h.bind(`mod-${i}`)}
                onClick={() => navigate('module', i)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ color: C.accent, opacity: 0.8 }}>
                    {moduleIcons[i % moduleIcons.length]}
                  </div>
                  <span style={{
                    fontSize: 10, fontWeight: 600, textTransform: 'uppercase',
                    letterSpacing: '1px', color: allDone ? C.success : C.textMuted,
                    background: 'rgba(255,255,255,0.04)',
                    padding: '3px 10px', borderRadius: 20,
                  }}>
                    {allDone ? '✓ Complete' : `${complete}/${lessonCount}`}
                  </span>
                </div>
                <div>
                  <h3 style={{ fontFamily: C.heading, fontSize: 18, color: C.accentLight, fontWeight: 600, marginBottom: 6 }}>
                    {mod.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 12, color: C.textMuted }}>
                    <span>{mod.subtitle}</span>
                    <span>{lessonCount} lessons</span>
                  </div>
                </div>
                <div style={s.progressBar(100)}>
                  <div style={s.progressFill(lessonCount ? (complete / lessonCount) * 100 : 0)} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE 2: MODULE
// ═══════════════════════════════════════════════════════════════════════════════
function ModulePage({ navigate, moduleIndex, completedLessons }) {
  const h = useHover();
  const idx = moduleIndex ?? 0;
  const mod = curriculum[idx];
  if (!mod) return null;

  const lessonCount = mod.lessons.length;
  const complete = mod.lessons.reduce((c, _, li) => c + (completedLessons.has(`${idx}-${li}`) ? 1 : 0), 0);
  const progressPct = lessonCount ? Math.round((complete / lessonCount) * 100) : 0;
  const allDone = complete === lessonCount;

  return (
    <div style={{ minHeight: '100vh', fontFamily: C.body, padding: '32px', maxWidth: 900, margin: '0 auto' }}>
      <button
        style={{ ...s.backBtn, ...(h.is('back') ? { color: C.accentLight } : {}) }}
        {...h.bind('back')}
        onClick={() => navigate('home')}
      >
        {Icons.back} Back to Modules
      </button>

      {/* Module header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32 }}>
        <div style={{
          width: 56, height: 56, borderRadius: 14,
          background: `linear-gradient(135deg, ${C.bgCard}, ${C.bgSecondary})`,
          border: `1px solid ${C.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: C.accent,
        }}>
          {moduleIcons[idx % moduleIcons.length]}
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontFamily: C.heading, fontSize: 28, color: C.accentLight, fontWeight: 700, marginBottom: 4 }}>
            {mod.title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: C.textMuted, flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>{Icons.clock} {mod.subtitle}</span>
            <span>•</span>
            <span>{lessonCount} lessons</span>
            {allDone && (
              <span style={{
                fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: C.success,
                background: 'rgba(74,170,122,0.15)', padding: '3px 10px', borderRadius: 20,
              }}>
                ✓ Module Complete
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ marginBottom: 36 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontSize: 11, color: C.textMuted, textTransform: 'uppercase', letterSpacing: '1px' }}>Module Progress</span>
          <span style={{ fontSize: 12, color: C.textMuted }}>{progressPct}%</span>
        </div>
        <div style={s.progressBar(progressPct)}>
          <div style={s.progressFill(progressPct)} />
        </div>
      </div>

      {/* Lesson list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {mod.lessons.map((lesson, i) => {
          const done = completedLessons.has(`${idx}-${i}`);
          return (
            <div
              key={i}
              style={{
                ...s.card,
                padding: '18px 24px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                ...(h.is(`lesson-${i}`) ? s.cardHover : {}),
              }}
              {...h.bind(`lesson-${i}`)}
              onClick={() => navigate('lesson', moduleIndex, i)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: 'rgba(255,255,255,0.03)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 600, color: C.textMuted,
                  fontFamily: C.mono,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <div style={{ fontSize: 15, color: C.accentLight, fontWeight: 500, marginBottom: 6 }}>
                    {lesson.title}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {(lesson.tcodes || []).map((tc, j) => (
                      <span key={j} style={s.tcodeChip}>{tc}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                {done && Icons.check}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE 3: LESSON
// ═══════════════════════════════════════════════════════════════════════════════
function LessonPage({ navigate, moduleIndex, lessonIndex, onCompleteLesson, completedLessons }) {
  const h = useHover();
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizAttempted, setQuizAttempted] = useState(false);

  const mod = curriculum[moduleIndex];
  const lesson = mod?.lessons[lessonIndex];
  if (!lesson) return null;

  const quiz = lesson.quiz;
  const tcodes = lesson.tcodes || [];
  const alreadyCompleted = completedLessons.has(`${moduleIndex}-${lessonIndex}`);

  const lessonKey = `${moduleIndex}-${lessonIndex}`;
  const hasOverride = Object.prototype.hasOwnProperty.call(sapScreenByLesson, lessonKey);
  const sapScreenHtml = hasOverride
    ? sapScreenByLesson[lessonKey]
    : sapScreenByModule[moduleIndex] || null;

  const handleOptionClick = (i) => {
    if (quizAttempted) return;
    setSelectedOption(i);
    setQuizAttempted(true);
  };

  const handleMarkComplete = () => {
    if (!quizAttempted || alreadyCompleted) return;
    onCompleteLesson(moduleIndex, lessonIndex);
    navigate('module', moduleIndex);
  };

  return (
    <div style={{ minHeight: '100vh', fontFamily: C.body, padding: '32px', maxWidth: 860, margin: '0 auto' }}>
      <button
        style={{ ...s.backBtn, ...(h.is('back') ? { color: C.accentLight } : {}) }}
        {...h.bind('back')}
        onClick={() => navigate('module', moduleIndex)}
      >
        {Icons.back} Back to Module
      </button>

      {/* Lesson header */}
      <div style={{ marginBottom: 36 }}>
        <h1 style={{ fontFamily: C.heading, fontSize: 28, color: C.accentLight, fontWeight: 700, marginBottom: 12 }}>
          {lesson.title}
        </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {tcodes.map((tc, i) => (
            <span key={i} style={{ ...s.tcodeChip, fontSize: 13, padding: '5px 14px' }}>{tc}</span>
          ))}
        </div>
      </div>

      {/* What you will see in SAP */}
      {sapScreenHtml && (
        <div style={{ marginBottom: 24 }}>
          <div style={{
            fontSize: 11,
            fontWeight: 700,
            color: C.accentLight,
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            marginBottom: 10,
          }}>
            What you will see in SAP
          </div>
          <div
            style={{
              borderRadius: 12,
              border: '1px solid rgba(200,169,110,0.5)',
              padding: 12,
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              background: 'rgba(10,14,26,0.7)',
            }}
          >
            <div
              style={{ minWidth: 640 }}
              dangerouslySetInnerHTML={{ __html: sapScreenHtml }}
            />
          </div>
        </div>
      )}

      {/* Content area */}
      <div style={{
        ...s.card,
        padding: '40px 32px',
        marginBottom: 24,
        minHeight: 80,
        borderColor: 'transparent',
      }}>
        <div style={{ fontSize: 14, color: C.textSecondary, lineHeight: 1.8 }}>
          {lesson.content}
        </div>
      </div>

      {/* CA Insight box */}
      <div style={{
        background: 'rgba(74,170,122,0.06)',
        border: `1px solid rgba(74,170,122,0.2)`,
        borderRadius: 12,
        padding: '20px 24px',
        marginBottom: 16,
      }}>
        <div style={{
          fontSize: 11, fontWeight: 700, color: C.success,
          textTransform: 'uppercase', letterSpacing: '1.5px',
          marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.success, display: 'inline-block' }} />
          CA Insight
        </div>
        <div style={{ fontSize: 14, color: C.textSecondary, lineHeight: 1.7 }}>
          {lesson.caInsight}
        </div>
      </div>

      {/* Common Mistakes box */}
      <div style={{
        background: 'rgba(212,164,74,0.06)',
        border: `1px solid rgba(212,164,74,0.2)`,
        borderRadius: 12,
        padding: '20px 24px',
        marginBottom: 40,
      }}>
        <div style={{
          fontSize: 11, fontWeight: 700, color: C.warning,
          textTransform: 'uppercase', letterSpacing: '1.5px',
          marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.warning, display: 'inline-block' }} />
          Common Mistakes
        </div>
        <div style={{ fontSize: 14, color: C.textSecondary, lineHeight: 1.7 }}>
          {lesson.commonMistakes}
        </div>
      </div>

      {/* Quiz section */}
      {quiz && (
        <div style={{
          borderTop: `1px solid ${C.border}`,
          paddingTop: 36,
          marginBottom: 40,
        }}>
          <h2 style={{
            fontFamily: C.heading, fontSize: 20, color: C.accentLight,
            fontWeight: 600, marginBottom: 8,
          }}>
            Knowledge Check
          </h2>
          <p style={{ fontSize: 14, color: C.textSecondary, marginBottom: 24, lineHeight: 1.6 }}>
            {quiz.question}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {quiz.options.map((opt, i) => {
              const isSelected = selectedOption === i;
              const isCorrect = i === quiz.correctIndex;
              const showResult = quizAttempted;
              const showAsCorrect = showResult && isCorrect;
              const showAsWrong = showResult && isSelected && !isCorrect;
              return (
                <button
                  key={i}
                  style={{
                    ...s.card,
                    padding: '14px 20px',
                    fontSize: 14,
                    color: isSelected ? C.accentLight : C.textSecondary,
                    fontFamily: C.body,
                    textAlign: 'left',
                    display: 'flex', alignItems: 'center', gap: 12,
                    borderColor: showAsCorrect ? C.success : showAsWrong ? '#c85a5a' : isSelected ? C.accent : C.border,
                    background: showAsCorrect ? 'rgba(74,170,122,0.08)' : showAsWrong ? 'rgba(200,90,90,0.08)' : isSelected ? 'rgba(200,169,110,0.06)' : C.bgCard,
                    ...(h.is(`opt-${i}`) && !quizAttempted && selectedOption !== i ? { borderColor: 'rgba(200,169,110,0.3)' } : {}),
                  }}
                  {...h.bind(`opt-${i}`)}
                  onClick={() => handleOptionClick(i)}
                  disabled={quizAttempted}
                >
                  <span style={{
                    width: 28, height: 28, borderRadius: '50%',
                    border: `1.5px solid ${showAsCorrect ? C.success : showAsWrong ? '#c85a5a' : isSelected ? C.accent : C.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 12, fontWeight: 600, fontFamily: C.mono,
                    color: showAsCorrect ? C.success : showAsWrong ? '#c85a5a' : isSelected ? C.accent : C.textMuted,
                    flexShrink: 0,
                  }}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                  {showAsCorrect && <span style={{ marginLeft: 'auto', color: C.success, fontSize: 12 }}>✓ Correct</span>}
                </button>
              );
            })}
          </div>

          {/* Show correct answer and explanation immediately after quiz */}
          {quizAttempted && (
            <div style={{
              marginTop: 20,
              padding: '16px 20px',
              background: 'rgba(74,170,122,0.08)',
              border: `1px solid rgba(74,170,122,0.25)`,
              borderRadius: 12,
            }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: C.success, marginBottom: 8 }}>
                Correct answer: {quiz.options[quiz.correctIndex]}
              </div>
              <div style={{ fontSize: 14, color: C.textSecondary, lineHeight: 1.6 }}>
                {quiz.explanation}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Mark Complete — only enabled after quiz attempted */}
      <div style={{ textAlign: 'center', paddingBottom: 40 }}>
        <button
          style={{
            ...s.btnPrimary,
            padding: '14px 48px',
            fontSize: 15,
            opacity: quizAttempted && !alreadyCompleted ? 1 : 0.6,
            cursor: quizAttempted && !alreadyCompleted ? 'pointer' : 'not-allowed',
            ...(h.is('complete') && quizAttempted && !alreadyCompleted ? s.btnPrimaryHover : {}),
          }}
          {...h.bind('complete')}
          onClick={handleMarkComplete}
          disabled={!quizAttempted || alreadyCompleted}
        >
          {alreadyCompleted ? 'Completed ✓' : 'Mark Complete ✓'}
        </button>
        {!quizAttempted && quiz && (
          <p style={{ fontSize: 12, color: C.textMuted, marginTop: 12 }}>
            Attempt the quiz above to mark this lesson complete.
          </p>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE 4: T-CODE REFERENCE
// ═══════════════════════════════════════════════════════════════════════════════
function TCodePage({ navigate }) {
  const h = useHover();
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState(null);

  const tcodeList = getTcodeList();
  const filtered = tcodeList.filter(
    (t) =>
      t.code.toLowerCase().includes(search.toLowerCase()) ||
      (t.lesson && t.lesson.toLowerCase().includes(search.toLowerCase())) ||
      t.module.toLowerCase().includes(search.toLowerCase())
  );

  const handleCopy = (code) => {
    navigator.clipboard?.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div style={{ minHeight: '100vh', fontFamily: C.body, padding: '32px', maxWidth: 1100, margin: '0 auto' }}>
      <button
        style={{ ...s.backBtn, ...(h.is('back') ? { color: C.accentLight } : {}) }}
        {...h.bind('back')}
        onClick={() => navigate('home')}
      >
        {Icons.back} Back to Home
      </button>

      <h1 style={{
        fontFamily: C.heading, fontSize: 28, color: C.accentLight,
        fontWeight: 700, marginBottom: 28,
      }}>
        T-Code Reference
      </h1>

      {/* Search bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        background: C.bgCard,
        border: `1px solid ${C.border}`,
        borderRadius: 12,
        padding: '12px 20px',
        marginBottom: 32,
        transition: 'border-color 0.2s',
        ...(h.is('search') ? { borderColor: C.accent } : {}),
      }} {...h.bind('search')}>
        <span style={{ color: C.textMuted }}>{Icons.search}</span>
        <input
          type="text"
          placeholder="Search by T-code, lesson, or module..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            background: 'none',
            border: 'none',
            outline: 'none',
            color: C.accentLight,
            fontSize: 14,
            fontFamily: C.body,
            width: '100%',
            caretColor: C.accent,
          }}
        />
        {search && (
          <span style={{ fontSize: 12, color: C.textMuted, whiteSpace: 'nowrap' }}>
            {filtered.length} result{filtered.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      {/* T-Code grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 16,
      }}>
        {filtered.map((t, i) => (
          <div
            key={i}
            style={{
              ...s.card,
              padding: '20px',
              display: 'flex', flexDirection: 'column', gap: 10,
              ...(h.is(`tc-${i}`) ? s.cardHover : {}),
            }}
            {...h.bind(`tc-${i}`)}
            onClick={() => handleCopy(t.code)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{
                fontFamily: C.mono,
                fontSize: 16, fontWeight: 600,
                color: C.tcode,
                letterSpacing: '0.5px',
              }}>
                {t.code}
              </span>
              <button
                onClick={(e) => { e.stopPropagation(); handleCopy(t.code); }}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: copied === t.code ? C.success : C.textMuted,
                  transition: 'color 0.2s', padding: 4,
                  display: 'flex', alignItems: 'center',
                }}
                title="Copy to clipboard"
              >
                {copied === t.code ? Icons.check : Icons.copy}
              </button>
            </div>
            <div style={{ fontSize: 13, color: C.textSecondary, lineHeight: 1.5 }}>
              {t.lesson}
            </div>
            <div style={{
              fontSize: 10, fontWeight: 600, color: C.textMuted,
              textTransform: 'uppercase', letterSpacing: '1px',
              background: 'rgba(255,255,255,0.03)',
              padding: '3px 10px', borderRadius: 20,
              alignSelf: 'flex-start',
            }}>
              {t.module}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{
          textAlign: 'center', padding: '60px 20px',
          color: C.textMuted, fontSize: 14,
        }}>
          No T-codes match your search.
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE 5: CHEAT SHEET — T-codes grouped by module, print
// ═══════════════════════════════════════════════════════════════════════════════
function CheatSheetPage({ navigate }) {
  const h = useHover();
  const [copied, setCopied] = useState(null);
  const tcodeList = getTcodeList();
  const byModule = curriculum.map((mod) => ({
    title: mod.title,
    tcodes: tcodeList.filter((t) => t.module === mod.title),
  })).filter((g) => g.tcodes.length > 0);

  const handleCopy = (code) => {
    navigator.clipboard?.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 1500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ minHeight: '100vh', fontFamily: C.body, padding: '32px', maxWidth: 900, margin: '0 auto' }} className="cheatsheet-page">
      <button
        style={{ ...s.backBtn, ...(h.is('back') ? { color: C.accentLight } : {}) }}
        {...h.bind('back')}
        onClick={() => navigate('home')}
      >
        {Icons.back} Back to Home
      </button>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
        <h1 style={{
          fontFamily: C.heading, fontSize: 28, color: C.accentLight,
          fontWeight: 700,
        }}>
          T-Code Cheat Sheet
        </h1>
        <button
          style={{
            ...s.btnPrimary,
            display: 'inline-flex', alignItems: 'center', gap: 8,
            ...(h.is('print') ? s.btnPrimaryHover : {}),
          }}
          {...h.bind('print')}
          onClick={handlePrint}
          className="no-print"
        >
          {Icons.print} Print
        </button>
      </div>

      <div className="cheatsheet-content">
        {byModule.map((group, gi) => (
          <div key={gi} style={{ marginBottom: 32 }}>
            <h2 style={{
              fontFamily: C.heading, fontSize: 18, color: C.accent,
              fontWeight: 600, marginBottom: 16, borderBottom: `1px solid ${C.border}`,
              paddingBottom: 8,
            }}>
              {group.title}
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {group.tcodes.map((t, ti) => (
                <button
                  key={ti}
                  type="button"
                  style={{
                    ...s.tcodeChip,
                    cursor: 'pointer',
                    border: 'none',
                    fontFamily: C.mono,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    ...(h.is(`cs-${gi}-${ti}`) ? { opacity: 0.9 } : {}),
                  }}
                  {...h.bind(`cs-${gi}-${ti}`)}
                  onClick={() => handleCopy(t.code)}
                  title={`${t.lesson} — click to copy`}
                >
                  {t.code}
                  {copied === t.code ? Icons.check : Icons.copy}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// APP SHELL — Navigation Router
// ═══════════════════════════════════════════════════════════════════════════════
export default function App() {
  const [page, setPage] = useState('home');
  const [moduleIndex, setModuleIndex] = useState(0);
  const [lessonIndex, setLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState(() => new Set());

  const navigate = (target, modIdx, lesIdx) => {
    setPage(target);
    if (modIdx !== undefined) setModuleIndex(modIdx);
    if (lesIdx !== undefined) setLessonIndex(lesIdx);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onCompleteLesson = (modIdx, lesIdx) => {
    setCompletedLessons((prev) => {
      const next = new Set(prev);
      next.add(`${modIdx}-${lesIdx}`);
      return next;
    });
  };

  switch (page) {
    case 'module':
      return (
        <ModulePage
          navigate={navigate}
          moduleIndex={moduleIndex}
          completedLessons={completedLessons}
        />
      );
    case 'lesson':
      return (
        <LessonPage
          navigate={navigate}
          moduleIndex={moduleIndex}
          lessonIndex={lessonIndex}
          onCompleteLesson={onCompleteLesson}
          completedLessons={completedLessons}
        />
      );
    case 'tcode':
      return <TCodePage navigate={navigate} />;
    case 'cheatsheet':
      return <CheatSheetPage navigate={navigate} />;
    default:
      return <HomePage navigate={navigate} completedLessons={completedLessons} />;
  }
}
