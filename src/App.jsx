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
  // FB70 lesson → dedicated FB70 Customer Invoice screen
  '3-0': `
<div class="sap-mock">
  <style>${SAP_SCREEN_CSS}</style>
  <div class="sap-window">
    <div class="sap-titlebar">
      <span>Enter Customer Invoice</span>
      <div class="sap-titlebar-btns"><span>─</span><span>□</span><span>✕</span></div>
    </div>
    <div class="sap-menubar">
      <span class="sap-menu-item">Invoice</span><span class="sap-menu-item">Edit</span><span class="sap-menu-item">Goto</span><span class="sap-menu-item">Extras</span>
    </div>
    <div class="sap-toolbar">
      <span class="sap-btn">💾 Post</span>
      <span class="sap-btn">Simulate</span>
      <span class="sap-btn">Hold</span>
      <span class="sap-btn">Park</span>
    </div>
    <div class="sap-tcode-bar">
      <span style="font-family:'Segoe UI',sans-serif;font-size:11px;">Transaction:</span>
      <input class="sap-tcode-field" value="FB70" readonly>
    </div>
    <div class="sap-content">
      <div class="sap-tabs">
        <div class="sap-tab sap-tab-active">Basic Data</div>
        <div class="sap-tab">Payment</div>
        <div class="sap-tab">Tax</div>
        <div class="sap-tab">Notes</div>
      </div>
      <div class="sap-form">
        <div class="sap-row">
          <span class="sap-label-req">Customer *</span>
          <input class="sap-field sap-field-med sap-field-req" value="C200156" readonly>
          <span style="font-size:10px;color:#0054a6;font-family:'Segoe UI',sans-serif;">Reliance Industries Ltd</span>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Invoice Date *</span>
          <input class="sap-field sap-field-med sap-field-filled" value="31.03.2025" readonly>
          <span class="sap-label" style="min-width:80px;">Posting Date</span>
          <input class="sap-field sap-field-med sap-field-filled" value="31.03.2025" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Amount *</span>
          <input class="sap-field sap-field-med sap-field-filled" value="5,90,000.00" readonly>
          <span class="sap-label" style="min-width:60px;">Currency</span>
          <input class="sap-field sap-field-small sap-field-filled" value="INR" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label">Payment Terms</span>
          <input class="sap-field sap-field-med" value="NT30" readonly style="background:#e0ffe0;">
          <span style="font-size:10px;color:#006600;font-family:'Segoe UI',sans-serif;">⟵ Auto from customer master</span>
        </div>
        <div class="sap-row">
          <span class="sap-label">Reference</span>
          <input class="sap-field sap-field-wide" value="INV/2025/RIL/001" readonly>
        </div>
      </div>
      <div class="sap-section-header">G/L Account Assignment</div>
      <table class="sap-table">
        <tr><th>G/L Account</th><th>D/C</th><th>Amount</th><th>Cost Centre</th><th>Text</th></tr>
        <tr><td class="editable">500100</td><td>C</td><td class="editable" style="text-align:right;">5,00,000.00</td><td class="editable">CC010</td><td class="editable">Sales - Product A</td></tr>
        <tr><td class="editable">175200</td><td>C</td><td class="editable" style="text-align:right;">90,000.00</td><td></td><td class="editable">GST Output 18%</td></tr>
      </table>
      <div style="margin-top:6px;text-align:right;font-size:11px;font-family:'Segoe UI',sans-serif;">
        <span style="color:#006600;font-weight:bold;">Balance: 0.00 ✓</span>
      </div>
      <div style="margin-top:6px;background:#ffe0e0;border:1px solid #cc0000;padding:6px;font-size:10px;font-family:'Segoe UI',sans-serif;color:#cc0000;">
        ⚠ Confirm with your team — if SD module is active, invoices come from there. Using FB70 will create DUPLICATE entries.
      </div>
    </div>
    <div class="sap-statusbar">
      <span>FB70 | Customer Invoice Entry</span>
      <span>Due Date: 30.04.2025 (NT30)</span>
    </div>
  </div>
</div>
`,
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
  // FK03 Look Up a Vendor → Vendor Master screen
  '2-0': `
<div class="sap-mock">
  <style>${SAP_SCREEN_CSS}</style>
  <div class="sap-window">
    <div class="sap-titlebar">
      <span>Display Vendor: General Data</span>
      <div class="sap-titlebar-btns"><span>─</span><span>□</span><span>✕</span></div>
    </div>
    <div class="sap-tcode-bar">
      <span style="font-family:'Segoe UI',sans-serif;font-size:11px;">Transaction:</span>
      <input class="sap-tcode-field" value="FK03" readonly>
    </div>
    <div class="sap-content">
      <div class="sap-tabs">
        <div class="sap-tab sap-tab-active">General Data</div>
        <div class="sap-tab">Company Code Data</div>
        <div class="sap-tab">Payment Transactions</div>
      </div>
      <div style="background:white;border:1px solid #ccc;padding:10px;font-size:11px;font-family:'Segoe UI',sans-serif;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
          <div>
            <div style="font-weight:bold;color:#0054a6;margin-bottom:6px;">Vendor Information</div>
            <div class="sap-row"><span class="sap-label">Vendor Code</span><span style="color:#000080;font-family:monospace;">V100045</span></div>
            <div class="sap-row"><span class="sap-label">Name</span><span>Tata Consulting Services Ltd</span></div>
            <div class="sap-row"><span class="sap-label">Search Term</span><span>TCS</span></div>
            <div class="sap-row"><span class="sap-label">Street</span><span>TCS House, Raveline Street</span></div>
            <div class="sap-row"><span class="sap-label">City</span><span>Mumbai</span></div>
            <div class="sap-row"><span class="sap-label">Country</span><span>IN — India</span></div>
            <div class="sap-row"><span class="sap-label">GST Number</span><span>27AAACT2727Q1ZW</span></div>
            <div class="sap-row"><span class="sap-label">PAN</span><span>AAACT2727Q</span></div>
          </div>
          <div>
            <div style="font-weight:bold;color:#0054a6;margin-bottom:6px;">Payment Details</div>
            <div class="sap-row"><span class="sap-label">Payment Terms</span><span style="color:#006600;font-weight:bold;">NT30 (Net 30 days)</span></div>
            <div class="sap-row"><span class="sap-label">Payment Method</span><span>T — Bank Transfer</span></div>
            <div class="sap-row"><span class="sap-label">Bank</span><span>HDFC Bank</span></div>
            <div class="sap-row"><span class="sap-label">Account No</span><span>XXXX XXXX 1234</span></div>
            <div class="sap-row"><span class="sap-label">IFSC</span><span>HDFC0000060</span></div>
            <div class="sap-row"><span class="sap-label">Recon. Account</span><span style="color:#000080;font-family:monospace;">200100</span></div>
            <div style="margin-top:8px;background:#ffffd0;border:1px solid #ccaa00;padding:6px;font-size:10px;">
              ⚠ Always verify bank details before payment run. Contact master data team for any changes.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sap-statusbar">
      <span>FK03 | Vendor V100045 displayed</span>
      <span>Co: 1000 | Read Only</span>
    </div>
  </div>
</div>
`,
  // MIRO lesson → PO-based Invoice 3-way match screen
  '2-2': `
<div class="sap-mock">
  <style>${SAP_SCREEN_CSS}</style>
  <div class="sap-window">
    <div class="sap-titlebar">
      <span>Enter Incoming Invoice</span>
      <div class="sap-titlebar-btns"><span>─</span><span>□</span><span>✕</span></div>
    </div>
    <div class="sap-menubar">
      <span class="sap-menu-item">Invoice</span><span class="sap-menu-item">Edit</span><span class="sap-menu-item">Goto</span><span class="sap-menu-item">Extras</span>
    </div>
    <div class="sap-toolbar">
      <span class="sap-btn">💾 Post</span>
      <span class="sap-btn">Simulate</span>
      <span class="sap-btn">Hold</span>
      <div class="sap-separator"></div>
      <span class="sap-btn">🔍 Show PO</span>
    </div>
    <div class="sap-tcode-bar">
      <span style="font-family:'Segoe UI',sans-serif;font-size:11px;">Transaction:</span>
      <input class="sap-tcode-field" value="MIRO" readonly>
    </div>
    <div class="sap-content">
      <div class="sap-tabs">
        <div class="sap-tab sap-tab-active">Basic Data</div>
        <div class="sap-tab">Payment</div>
        <div class="sap-tab">Tax</div>
        <div class="sap-tab">Contacts</div>
      </div>
      <div class="sap-form">
        <div class="sap-row">
          <span class="sap-label-req">Invoice Date *</span>
          <input class="sap-field sap-field-med sap-field-filled" value="20.03.2025" readonly>
          <span class="sap-label" style="min-width:80px;">Posting Date</span>
          <input class="sap-field sap-field-med sap-field-filled" value="31.03.2025" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Amount *</span>
          <input class="sap-field sap-field-med sap-field-filled" value="2,36,000.00" readonly>
          <span class="sap-label" style="min-width:60px;">Currency</span>
          <input class="sap-field sap-field-small sap-field-filled" value="INR" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Purchase Order *</span>
          <input class="sap-field sap-field-med sap-field-req" value="4500001234" readonly>
          <span style="font-size:10px;color:#006600;font-family:'Segoe UI',sans-serif;">PO found — details auto-loaded</span>
        </div>
      </div>
      <div class="sap-section-header">PO Line Items — 3-Way Match Status</div>
      <table class="sap-table">
        <tr><th>Item</th><th>Material</th><th>PO Qty</th><th>GR Qty</th><th>Inv Qty</th><th>Amount</th><th>Match</th></tr>
        <tr>
          <td>10</td>
          <td>Steel Rods 12mm</td>
          <td>100 MT</td>
          <td>100 MT</td>
          <td class="editable">100 MT</td>
          <td style="text-align:right;">2,00,000.00</td>
          <td style="color:#006600;font-weight:bold;">✓ Match</td>
        </tr>
        <tr>
          <td>20</td>
          <td>GST 18%</td>
          <td>—</td>
          <td>—</td>
          <td>—</td>
          <td style="text-align:right;">36,000.00</td>
          <td style="color:#006600;">✓ Tax</td>
        </tr>
      </table>
      <div style="margin-top:6px;font-size:10px;font-family:'Segoe UI',sans-serif;color:#0054a6;">
        3-Way Match: PO ✓ + GR ✓ + Invoice ✓ — Ready to post.
      </div>
    </div>
    <div class="sap-statusbar">
      <span>MIRO | Invoice Verification</span>
      <span>PO: 4500001234 | Vendor: V100045</span>
    </div>
  </div>
</div>
`,
  // F-53 Manual Vendor Payment → Outgoing Payment screen
  '2-3': `
<div class="sap-mock">
  <style>${SAP_SCREEN_CSS}</style>
  <div class="sap-window">
    <div class="sap-titlebar">
      <span>Post Outgoing Payments: Header Data</span>
      <div class="sap-titlebar-btns"><span>─</span><span>□</span><span>✕</span></div>
    </div>
    <div class="sap-tcode-bar">
      <span style="font-family:'Segoe UI',sans-serif;font-size:11px;">Transaction:</span>
      <input class="sap-tcode-field" value="F-53" readonly>
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
          <span class="sap-label-req">Bank G/L Account *</span>
          <input class="sap-field sap-field-med sap-field-req" value="113100" readonly>
          <span style="font-size:10px;color:#0054a6;font-family:'Segoe UI',sans-serif;">HDFC Current A/c</span>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Amount *</span>
          <input class="sap-field sap-field-med sap-field-filled" value="1,18,000.00" readonly>
          <span class="sap-label" style="min-width:60px;">Currency</span>
          <input class="sap-field sap-field-small sap-field-filled" value="INR" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label">Value Date</span>
          <input class="sap-field sap-field-med sap-field-filled" value="01.04.2025" readonly>
        </div>
      </div>
      <div class="sap-section-header">Open Item Selection</div>
      <div class="sap-form">
        <div class="sap-row">
          <span class="sap-label-req">Account Type *</span>
          <input class="sap-field sap-field-small sap-field-filled" value="K" readonly>
          <span style="font-size:10px;color:#0054a6;font-family:'Segoe UI',sans-serif;">K = Vendor</span>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Vendor Account *</span>
          <input class="sap-field sap-field-med sap-field-req" value="V100045" readonly>
          <span style="font-size:10px;color:#0054a6;font-family:'Segoe UI',sans-serif;">Tata Consulting</span>
        </div>
      </div>
      <div style="text-align:center;margin-top:10px;">
        <span class="sap-btn" style="padding:4px 20px;font-size:11px;background:#0054a6;color:white;">Process Open Items →</span>
        <div style="margin-top:6px;font-size:10px;font-family:'Segoe UI',sans-serif;color:#666;">SAP will show all unpaid invoices for this vendor.</div>
      </div>
    </div>
    <div class="sap-statusbar">
      <span>F-53 | Post Outgoing Payment</span>
      <span>Amount: ₹ 1,18,000.00 | HDFC A/c</span>
    </div>
  </div>
</div>
`,
  // F110 Automatic Payment Run → F110 status screen
  '2-4': `
<div class="sap-mock">
  <style>${SAP_SCREEN_CSS}</style>
  <div class="sap-window">
    <div class="sap-titlebar">
      <span>Automatic Payment Transactions: Status</span>
      <div class="sap-titlebar-btns"><span>─</span><span>□</span><span>✕</span></div>
    </div>
    <div class="sap-tcode-bar">
      <span style="font-family:'Segoe UI',sans-serif;font-size:11px;">Transaction:</span>
      <input class="sap-tcode-field" value="F110" readonly>
    </div>
    <div class="sap-content">
      <div class="sap-form">
        <div class="sap-row">
          <span class="sap-label-req">Run Date *</span>
          <input class="sap-field sap-field-med sap-field-req" value="01.04.2025" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Identification *</span>
          <input class="sap-field sap-field-med sap-field-req" value="APR01" readonly>
        </div>
      </div>
      <div class="sap-tabs" style="margin-top:8px;">
        <div class="sap-tab sap-tab-active">Status</div>
        <div class="sap-tab">Parameters</div>
        <div class="sap-tab">Free Selection</div>
        <div class="sap-tab">Additional Log</div>
        <div class="sap-tab">Printout</div>
      </div>
      <div style="background:white;border:1px solid #ccc;padding:8px;font-size:10px;font-family:'Segoe UI',sans-serif;">
        <div style="color:#006600;font-weight:bold;margin-bottom:4px;">✅ Parameters have been entered</div>
        <div style="color:#006600;font-weight:bold;margin-bottom:4px;">✅ Payment proposal has been created</div>
        <div style="color:#888;margin-bottom:4px;">◻ Payment run has not been carried out</div>
        <div style="color:#888;">◻ Printout has not been issued</div>
      </div>
      <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap;">
        <span class="sap-btn" style="background:#ffffd0;border-color:#ccaa00;">📋 Proposal</span>
        <span class="sap-btn" style="background:#e0f0ff;border-color:#0054a6;">▶ Payment Run</span>
        <span class="sap-btn">🖨 Printout</span>
        <span class="sap-btn">📊 Payment List</span>
      </div>
      <div style="margin-top:8px;background:#fff0e0;border:1px solid #cc6600;padding:6px;font-size:10px;font-family:'Segoe UI',sans-serif;color:#cc4400;">
        ⚠ Always click Proposal first and review all vendors and amounts before running Payment Run.
      </div>
    </div>
    <div class="sap-statusbar">
      <span class="sap-status-msg">Proposal created: 47 items | ₹ 28,45,320.00</span>
      <span>F110 | Run: APR01</span>
    </div>
  </div>
</div>
`,
  // FBL1N Vendor Line Item Report → vendor line item output screen
  '2-5': `
<div class="sap-mock">
  <style>${SAP_SCREEN_CSS}</style>
  <div class="sap-window">
    <div class="sap-titlebar">
      <span>Vendor Line Item Display — Output</span>
      <div class="sap-titlebar-btns"><span>─</span><span>□</span><span>✕</span></div>
    </div>
    <div class="sap-tcode-bar">
      <span style="font-family:'Segoe UI',sans-serif;font-size:11px;">Transaction:</span>
      <input class="sap-tcode-field" value="FBL1N" readonly>
    </div>
    <div class="sap-content">
      <div style="display:flex;gap:8px;margin-bottom:8px;font-size:10px;font-family:'Segoe UI',sans-serif;">
        <span class="sap-btn">📊 Export Excel</span>
        <span class="sap-btn">🔍 Filter</span>
        <span class="sap-btn">Sort</span>
        <span class="sap-btn">Sum</span>
      </div>
      <table class="sap-table" style="font-size:10px;">
        <tr><th>Doc No</th><th>Doc Date</th><th>Due Date</th><th>Vendor</th><th>Name</th><th>Amount (INR)</th><th>Status</th></tr>
        <tr><td>1900012</td><td>25.03.25</td><td style="color:#cc0000;font-weight:bold;">24.04.25</td><td>V100045</td><td>Tata Consulting</td><td style="text-align:right;">1,18,000.00</td><td style="color:#cc6600;">Open</td></tr>
        <tr><td>1900008</td><td>10.03.25</td><td style="color:#cc0000;font-weight:bold;">09.04.25</td><td>V100087</td><td>Infosys Ltd</td><td style="text-align:right;">2,36,000.00</td><td style="color:#cc6600;">Open</td></tr>
        <tr><td>1900003</td><td>01.03.25</td><td>31.03.25</td><td>V100023</td><td>Wipro Ltd</td><td style="text-align:right;">94,400.00</td><td style="color:#006600;">Cleared</td></tr>
        <tr><td>1899998</td><td>20.02.25</td><td>21.03.25</td><td>V100045</td><td>Tata Consulting</td><td style="text-align:right;">59,000.00</td><td style="color:#006600;">Cleared</td></tr>
      </table>
      <div style="margin-top:6px;font-size:11px;font-family:'Segoe UI',sans-serif;font-weight:bold;">
        Total Open Items: ₹ 3,54,000.00
      </div>
    </div>
    <div class="sap-statusbar">
      <span>4 items displayed | 2 open | 2 cleared</span>
      <span>FBL1N | Vendor: V100045 Co 1000</span>
    </div>
  </div>
</div>
`,
  // F.16 Carry Forward Balances lesson → dedicated F.16 screen
  '6-3': `
<div class="sap-mock">
  <style>${SAP_SCREEN_CSS}</style>
  <div class="sap-window">
    <div class="sap-titlebar">
      <span>Balance Carryforward: Accounts Receivable</span>
      <div class="sap-titlebar-btns"><span>─</span><span>□</span><span>✕</span></div>
    </div>
    <div class="sap-menubar">
      <span class="sap-menu-item">Program</span><span class="sap-menu-item">Edit</span><span class="sap-menu-item">Goto</span><span class="sap-menu-item">System</span>
    </div>
    <div class="sap-toolbar">
      <span class="sap-btn">▶ Execute (F8)</span>
      <div class="sap-separator"></div>
      <span class="sap-btn">🖨 Print</span>
    </div>
    <div class="sap-tcode-bar">
      <span style="font-family:'Segoe UI',sans-serif;font-size:11px;">Transaction:</span>
      <input class="sap-tcode-field" value="F.16" readonly>
    </div>
    <div class="sap-content">
      <div class="sap-form">
        <div class="sap-row">
          <span class="sap-label-req">Company Code *</span>
          <input class="sap-field sap-field-small sap-field-req" value="1000" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Carry Forward From FY *</span>
          <input class="sap-field sap-field-small sap-field-req" value="2025" readonly>
          <span style="font-size:10px;color:#0054a6;font-family:'Segoe UI',sans-serif;">Carries to FY 2026</span>
        </div>
      </div>
      <div class="sap-section-header">Processing Options</div>
      <div class="sap-radio" style="flex-direction:column;gap:6px;margin:8px 0;">
        <label style="display:flex;align-items:center;gap:6px;font-family:'Segoe UI',sans-serif;font-size:11px;"><input type="radio" name="cf" checked> <span>Test Run (recommended first)</span></label>
        <label style="display:flex;align-items:center;gap:6px;font-family:'Segoe UI',sans-serif;font-size:11px;"><input type="radio" name="cf"> <span>Productive Run</span></label>
      </div>
      <div style="background:#ffffd0;border:1px solid #ccaa00;padding:8px;font-size:10px;font-family:'Segoe UI',sans-serif;margin-top:8px;">
        <strong>Run only once per year end.</strong><br/>
        All Balance Sheet accounts carry forward to FY 2026.<br/>
        All P&L balances move to Retained Earnings.<br/>
        Run only after year end audit is complete and auditors have signed off.
      </div>
    </div>
    <div class="sap-statusbar">
      <span>F.16 | Balance Carryforward</span>
      <span>FY 2025 → FY 2026 | Co: 1000</span>
    </div>
  </div>
</div>
`,
  // S_ALR_87012172 lesson → G/L Account Balances output
  '4-2': `
<div class="sap-mock">
  <style>${SAP_SCREEN_CSS}</style>
  <div class="sap-window">
    <div class="sap-titlebar">
      <span>G/L Account Balances</span>
      <div class="sap-titlebar-btns"><span>─</span><span>□</span><span>✕</span></div>
    </div>
    <div class="sap-tcode-bar">
      <span style="font-family:'Segoe UI',sans-serif;font-size:11px;">Transaction:</span>
      <input class="sap-tcode-field" value="S_ALR_87012172" readonly>
    </div>
    <div class="sap-content">
      <div style="display:flex;gap:8px;margin-bottom:8px;">
        <span class="sap-btn">📊 Export Excel</span>
        <span class="sap-btn">🖨 Print</span>
        <span class="sap-btn">PDF</span>
        <span class="sap-btn">Filter</span>
      </div>
      <table class="sap-table" style="font-size:10px;">
        <tr>
          <th>G/L Acct</th>
          <th>Description</th>
          <th>Opening Bal</th>
          <th>Period 1</th>
          <th>Period 2</th>
          <th>Period 3</th>
          <th>YTD Balance</th>
        </tr>
        <tr>
          <td style="color:#0054a6;cursor:pointer;font-family:monospace;">113100</td>
          <td>HDFC Bank Current</td>
          <td style="text-align:right;">45,23,456</td>
          <td style="text-align:right;color:#006600;">+8,50,000</td>
          <td style="text-align:right;color:#cc0000;">-3,20,000</td>
          <td style="text-align:right;color:#006600;">+2,10,000</td>
          <td style="text-align:right;font-weight:bold;">52,63,456</td>
        </tr>
        <tr>
          <td style="color:#0054a6;cursor:pointer;font-family:monospace;">200100</td>
          <td>Accounts Payable</td>
          <td style="text-align:right;">12,40,000</td>
          <td style="text-align:right;color:#cc0000;">-2,36,000</td>
          <td style="text-align:right;color:#006600;">+1,18,000</td>
          <td style="text-align:right;color:#cc0000;">-94,400</td>
          <td style="text-align:right;font-weight:bold;">10,27,600</td>
        </tr>
        <tr>
          <td style="color:#0054a6;cursor:pointer;font-family:monospace;">300100</td>
          <td>Accounts Receivable</td>
          <td style="text-align:right;">18,50,000</td>
          <td style="text-align:right;color:#006600;">+5,90,000</td>
          <td style="text-align:right;color:#cc0000;">-2,00,000</td>
          <td style="text-align:right;color:#006600;">+3,50,000</td>
          <td style="text-align:right;font-weight:bold;">25,90,000</td>
        </tr>
        <tr>
          <td style="color:#0054a6;cursor:pointer;font-family:monospace;">400100</td>
          <td>Audit Expenses</td>
          <td style="text-align:right;">0</td>
          <td style="text-align:right;color:#006600;">+50,000</td>
          <td style="text-align:right;">0</td>
          <td style="text-align:right;">0</td>
          <td style="text-align:right;font-weight:bold;">50,000</td>
        </tr>
        <tr>
          <td style="color:#0054a6;cursor:pointer;font-family:monospace;">500100</td>
          <td>Sales Revenue</td>
          <td style="text-align:right;">0</td>
          <td style="text-align:right;color:#006600;">+5,00,000</td>
          <td style="text-align:right;color:#006600;">+3,20,000</td>
          <td style="text-align:right;color:#006600;">+4,10,000</td>
          <td style="text-align:right;font-weight:bold;">12,30,000</td>
        </tr>
      </table>
      <div style="margin-top:6px;font-size:10px;font-family:'Segoe UI',sans-serif;color:#0054a6;">
        Double-click any G/L Account to see all individual documents behind that balance (FBL3N drill-down).
      </div>
    </div>
    <div class="sap-statusbar">
      <span>S_ALR_87012172 | G/L Balances</span>
      <span>Co: 1000 | FY: 2025 | All Periods</span>
    </div>
  </div>
</div>
`,
  // GL Account Line Item Report → FBL3N output (G/L line items)
  '1-3': `
<div class="sap-mock">
  <style>${SAP_SCREEN_CSS}</style>
  <div class="sap-window">
    <div class="sap-titlebar">
      <span>G/L Account Line Item Display — Account 400100 Audit Expenses</span>
      <div class="sap-titlebar-btns"><span>─</span><span>□</span><span>✕</span></div>
    </div>
    <div class="sap-tcode-bar">
      <span style="font-family:'Segoe UI',sans-serif;font-size:11px;">Transaction:</span>
      <input class="sap-tcode-field" value="FBL3N" readonly>
    </div>
    <div class="sap-content">
      <div style="display:flex;gap:8px;margin-bottom:8px;">
        <span class="sap-btn">📊 Export Excel</span>
        <span class="sap-btn">🔍 Filter</span>
        <span class="sap-btn">Sort ↕</span>
        <span class="sap-btn">Σ Sum</span>
        <span class="sap-btn" style="margin-left:auto;">Change Layout</span>
      </div>
      <table class="sap-table" style="font-size:10px;">
        <tr>
          <th>Doc No</th>
          <th>Type</th>
          <th>Doc Date</th>
          <th>Posting Date</th>
          <th>Reference</th>
          <th>Text</th>
          <th>Amount (INR)</th>
          <th>Clrng Doc</th>
        </tr>
        <tr style="cursor:pointer;" title="Double-click to open document">
          <td style="color:#0054a6;text-decoration:underline;">1800000123</td>
          <td>SA</td>
          <td>31.03.25</td>
          <td>31.03.25</td>
          <td>JV-2025-031</td>
          <td>Audit fee provision</td>
          <td style="text-align:right;">50,000.00</td>
          <td></td>
        </tr>
        <tr style="cursor:pointer;">
          <td style="color:#0054a6;text-decoration:underline;">1800000089</td>
          <td>SA</td>
          <td>28.02.25</td>
          <td>28.02.25</td>
          <td>JV-2025-022</td>
          <td>Audit fee Q3</td>
          <td style="text-align:right;">45,000.00</td>
          <td>1800000102</td>
        </tr>
        <tr style="cursor:pointer;">
          <td style="color:#0054a6;text-decoration:underline;">1800000056</td>
          <td>SA</td>
          <td>31.01.25</td>
          <td>31.01.25</td>
          <td>JV-2025-011</td>
          <td>Audit fee Q3 adj</td>
          <td style="text-align:right;">5,000.00</td>
          <td>1800000102</td>
        </tr>
      </table>
      <div style="margin-top:6px;font-size:11px;font-family:'Segoe UI',sans-serif;font-weight:bold;">
        Total: ₹ 1,00,000.00 &nbsp;&nbsp; | &nbsp;&nbsp;
        <span style="color:#006600;">Open: ₹ 50,000.00</span> &nbsp;&nbsp; | &nbsp;&nbsp;
        <span style="color:#888;">Cleared: ₹ 50,000.00</span>
      </div>
      <div style="margin-top:4px;font-size:10px;font-family:'Segoe UI',sans-serif;color:#0054a6;">
        Double-click any document number to open it in FB03. Use Ctrl+Shift+F7 to export to Excel.
      </div>
    </div>
    <div class="sap-statusbar">
      <span>3 items | G/L: 400100 | All Items</span>
      <span>Co: 1000 | FY: 2025 | 01.04.24-31.03.25</span>
    </div>
  </div>
</div>
`,
  // FB08 Reverse a Document → dedicated FB08 screen
  '1-2': `
<div class="sap-mock">
  <style>${SAP_SCREEN_CSS}</style>
  <div class="sap-window">
    <div class="sap-titlebar">
      <span>Reverse Document: Header Data</span>
      <div class="sap-titlebar-btns"><span>─</span><span>□</span><span>✕</span></div>
    </div>
    <div class="sap-menubar">
      <span class="sap-menu-item">Document</span><span class="sap-menu-item">Edit</span><span class="sap-menu-item">Goto</span><span class="sap-menu-item">Extras</span>
    </div>
    <div class="sap-toolbar">
      <span class="sap-btn">💾 Post</span>
      <div class="sap-separator"></div>
      <span class="sap-btn">🔍 Display Doc</span>
    </div>
    <div class="sap-tcode-bar">
      <span style="font-family:'Segoe UI',sans-serif;font-size:11px;">Transaction:</span>
      <input class="sap-tcode-field" value="FB08" readonly>
    </div>
    <div class="sap-content">
      <div class="sap-form">
        <div class="sap-row">
          <span class="sap-label-req">Document Number *</span>
          <input class="sap-field sap-field-med sap-field-req" value="1800000123" readonly>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Company Code *</span>
          <input class="sap-field sap-field-small sap-field-req" value="1000" readonly>
          <span class="sap-label" style="min-width:60px;">Fiscal Year</span>
          <input class="sap-field sap-field-small sap-field-filled" value="2025" readonly>
        </div>
      </div>
      <div class="sap-section-header">Reversal Data</div>
      <div class="sap-form">
        <div class="sap-row">
          <span class="sap-label-req">Reversal Reason *</span>
          <select style="border:1px solid #666;background:white;padding:1px 4px;font-size:11px;font-family:'Segoe UI',sans-serif;height:20px;color:#000080;">
            <option>01 — Reversal in current period</option>
            <option>02 — Reversal in closed period</option>
            <option>03 — Accrual reversal</option>
          </select>
        </div>
        <div class="sap-row">
          <span class="sap-label-req">Reversal Date *</span>
          <input class="sap-field sap-field-med sap-field-req" value="31.03.2025" readonly>
          <span style="font-size:10px;color:#cc6600;font-family:'Segoe UI',sans-serif;">Must be in open period</span>
        </div>
      </div>
      <div style="background:#e8f0ff;border:1px solid #0054a6;padding:8px;font-size:10px;font-family:'Segoe UI',sans-serif;margin-top:8px;">
        <strong>Original Document Preview:</strong><br/>
        Doc: 1800000123 | Date: 31.03.2025 | Amount: ₹50,000 | Type: SA<br/>
        <span style="color:#006600;">Both original and reversal document remain visible for audit.</span>
      </div>
    </div>
    <div class="sap-statusbar">
      <span>FB08 | Reverse Document</span>
      <span>Reversal document will be created in same company code</span>
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
          <button
            style={{
              ...s.card,
              padding: '8px 16px',
              fontSize: 12,
              color: C.accentLight,
              fontFamily: C.mono,
              fontWeight: 500,
              display: 'flex', alignItems: 'center', gap: 6,
              background: 'rgba(15,32,48,0.9)',
              border: `1px solid ${C.border}`,
              ...(h.is('sim-btn') ? { borderColor: C.accent, color: C.accentLight } : {}),
            }}
            {...h.bind('sim-btn')}
            onClick={() => navigate('simulator')}
          >
            🖥 Launch SAP Simulator
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
// PAGE 6: SAP SIMULATOR (light SAP GUI shell, isolated state)
// ═══════════════════════════════════════════════════════════════════════════════

// Simulator colours and simple helpers (kept separate from dark platform theme)
const SAP_SIM = {
  bg: '#f0f2f5',
  shellBg: '#d4d0c8',
  headerBg: '#1a3a5c',
  headerText: '#ffffff',
  label: '#333333',
  fieldBorder: '#b0b8c4',
  tableHeaderBg: '#1a3a5c',
  tableAltRow: '#eef0f3',
  statusBg: '#1a1a1a',
  statusOk: '#63b35d',
  statusErr: '#e07171',
};

function createInitialSimState() {
  return {
    currentTcode: 'FB50',
    status: { type: 'info', message: 'Ready.' },
    journalDocs: [
      {
        docNo: '1800000001',
        tcode: 'FB50',
        date: '2024-04-01',
        companyCode: 'IN01',
        items: [
          { gl: '400100', dc: 'D', amount: 50000, text: 'Audit fee provision' },
          { gl: '200300', dc: 'C', amount: 50000, text: 'Provision - audit fees' },
        ],
      },
    ],
    vendorDocs: [
      {
        docNo: '1900000001',
        vendor: 'V1001',
        name: 'Tata Steel Ltd',
        amount: 118000,
        open: true,
        tcode: 'FB60',
      },
    ],
    customerDocs: [
      {
        docNo: '2000000001',
        customer: 'C2001',
        name: 'Mahindra & Mahindra',
        amount: 590000,
        open: true,
        tcode: 'FB70',
      },
    ],
    bankLines: [
      { id: 1, date: '2024-04-01', text: 'Opening balance', amount: 5263456 },
    ],
    depreciationTotal: 0,
    periods: { current: 1, year: 2024, open: true },
    assets: [
      { id: 'ASSET-001', class: 'Plant & Machinery', nbv: 1500000 },
      { id: 'ASSET-002', class: 'Office Equipment', nbv: 250000 },
    ],
    vendorMasters: [
      { code: 'V1001', name: 'Tata Steel Ltd', searchTerm: 'Tata Steel', street: 'Bombay House, 24 Homi Mody St', city: 'Mumbai', country: 'IN — India', gst: '27AAACT2727Q1ZW', pan: 'AAACT2727Q', paymentTerms: 'NT30 (Net 30 days)', paymentMethod: 'T — Bank Transfer', bank: 'HDFC Bank', accountNo: 'XXXX1234', ifsc: 'HDFC0000060', reconAccount: '200100' },
      { code: 'V1002', name: 'Infosys Ltd', searchTerm: 'Infosys', street: 'Electronics City', city: 'Bengaluru', country: 'IN — India', gst: '29AABCI1234A1Z5', pan: 'AABCI1234A', paymentTerms: 'NT45', paymentMethod: 'T — Bank Transfer', bank: 'ICICI Bank', accountNo: 'XXXX5678', ifsc: 'ICIC0000104', reconAccount: '200100' },
      { code: 'V1003', name: 'Reliance Industries Ltd', searchTerm: 'Reliance', street: 'Maker Chambers IV', city: 'Mumbai', country: 'IN — India', gst: '27AAACR5055K1Z1', pan: 'AAACR5055K', paymentTerms: 'NT30', paymentMethod: 'T — Bank Transfer', bank: 'SBI', accountNo: 'XXXX9012', ifsc: 'SBIN0000300', reconAccount: '200100' },
      { code: 'V1004', name: 'Wipro Ltd', searchTerm: 'Wipro', street: 'Doddakannelli', city: 'Bengaluru', country: 'IN — India', gst: '29AABCW1234A1Z6', pan: 'AABCW1234A', paymentTerms: 'NT30', paymentMethod: 'T — Bank Transfer', bank: 'HDFC Bank', accountNo: 'XXXX3456', ifsc: 'HDFC0000060', reconAccount: '200100' },
    ],
    customerMasters: [
      { code: 'C2001', name: 'Mahindra & Mahindra Ltd', searchTerm: 'Mahindra', street: 'Gateway Building', city: 'Mumbai', country: 'IN — India', creditLimit: 5000000, paymentTerms: 'NT30', dunningProcedure: 'MA01' },
      { code: 'C2002', name: 'Bajaj Auto Ltd', searchTerm: 'Bajaj', street: 'Bajaj Complex', city: 'Pune', country: 'IN — India', creditLimit: 3000000, paymentTerms: 'NT45', dunningProcedure: 'MA01' },
      { code: 'C2003', name: 'Hero MotoCorp Ltd', searchTerm: 'Hero', street: 'Nelson Mandela Road', city: 'New Delhi', country: 'IN — India', creditLimit: 4000000, paymentTerms: 'NT30', dunningProcedure: 'MA01' },
    ],
    febanItems: [
      { id: 'F1', date: '2024-04-01', amount: 800000, description: 'NEFT CR - Mahindra', status: 'Processed', action: '' },
      { id: 'F2', date: '2024-04-02', amount: -236000, description: 'NEFT DR - Infosys', status: 'Processed', action: '' },
      { id: 'F3', date: '2024-04-03', amount: 590000, description: 'NEFT CR - Bajaj', status: 'Processed', action: '' },
      { id: 'F4', date: '2024-04-04', amount: -105136, description: 'Bank Charges', status: 'Exception', action: 'Manual assign' },
      { id: 'F5', date: '2024-04-05', amount: 50000, description: 'Unknown NEFT', status: 'Unprocessed', action: 'Match' },
    ],
    glMasters: [
      { number: '100100', name: 'Cash', type: 'Asset' },
      { number: '200100', name: 'Sundry Creditors', type: 'Liability' },
      { number: '200300', name: 'Provisions', type: 'Liability' },
      { number: '400100', name: 'Sales Revenue', type: 'Income' },
      { number: '410000', name: 'Revenue from Operations', type: 'Income' },
      { number: '500100', name: 'Office Expenses', type: 'Expense' },
    ],
  };
}

const simulatorSidebar = [
  {
    label: 'G/L Accounting',
    items: [
      { code: 'FB50', label: 'Post G/L Document' },
      { code: 'FB03', label: 'Display Document' },
      { code: 'FB08', label: 'Reverse Document' },
      { code: 'FBL3N', label: 'G/L Line Items' },
    ],
  },
  {
    label: 'Accounts Payable',
    items: [
      { code: 'FK03', label: 'Vendor Master' },
      { code: 'FB60', label: 'Post Vendor Invoice' },
      { code: 'F-53', label: 'Manual Payment' },
      { code: 'F110', label: 'Auto Payment Run' },
      { code: 'FBL1N', label: 'Vendor Report' },
    ],
  },
  {
    label: 'Accounts Receivable',
    items: [
      { code: 'FD03', label: 'Customer Master' },
      { code: 'FB70', label: 'Customer Invoice' },
      { code: 'F-28', label: 'Incoming Payment' },
      { code: 'FBL5N', label: 'Customer Report' },
    ],
  },
  {
    label: 'Financial Reports',
    items: [
      { code: 'F.01', label: 'Financial Statements' },
      { code: 'S_ALR_87012284', label: 'BS/PL Report' },
    ],
  },
  {
    label: 'Bank',
    items: [
      { code: 'FF67', label: 'Bank Statement' },
      { code: 'FEBAN', label: 'Bank Processing' },
    ],
  },
  {
    label: 'Period Close',
    items: [
      { code: 'OB52', label: 'Posting Periods' },
      { code: 'AFAB', label: 'Depreciation Run' },
      { code: 'F.16', label: 'Carry Forward' },
    ],
  },
];

function SimulatorStatusBar({ status }) {
  const color =
    status.type === 'success'
      ? SAP_SIM.statusOk
      : status.type === 'error'
      ? SAP_SIM.statusErr
      : '#e0e0e0';
  return (
    <div
      style={{
        background: SAP_SIM.statusBg,
        color,
        fontSize: 11,
        padding: '4px 10px',
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: "'IBM Plex Sans', -apple-system, sans-serif",
      }}
    >
      <span>{status.message}</span>
      <span style={{ color: '#9ca3af' }}>Client 100 · User CA_TRAINEE</span>
    </div>
  );
}

function SimulatorShell({ state, setState }) {
  const [cmd, setCmd] = useState(state.currentTcode);

  const navigateTcode = (code) => {
    setState((prev) => ({ ...prev, currentTcode: code, status: prev.status }));
    setCmd(code);
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const trimmed = cmd.trim().toUpperCase();
    if (!trimmed) return;
    const exists = simulatorSidebar.some((group) =>
      group.items.some((it) => it.code === trimmed),
    );
    if (!exists) {
      setState((prev) => ({
        ...prev,
        status: {
          type: 'error',
          message: `Transaction ${trimmed} is not available in this training system`,
        },
      }));
      return;
    }
    navigateTcode(trimmed);
    setState((prev) => ({
      ...prev,
      status: {
        type: 'info',
        message: `Transaction ${trimmed} ready`,
      },
    }));
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: SAP_SIM.bg,
        padding: 16,
        fontFamily: "'IBM Plex Sans', -apple-system, sans-serif",
      }}
    >
      {/* SAP shell frame */}
      <div
        style={{
          borderRadius: 8,
          border: '1px solid #cbd5e1',
          overflow: 'hidden',
          boxShadow: '0 18px 45px rgba(15,23,42,0.25)',
          background: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Top bar */}
        <div
          style={{
            background:
              'linear-gradient(90deg,#0f172a,#1e293b,#0f172a)',
            color: '#e5e7eb',
            padding: '6px 12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 12,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 4,
                background:
                  'linear-gradient(135deg,#38bdf8,#0ea5e9,#0369a1)',
              }}
            />
            <span style={{ fontWeight: 600 }}>SAP</span>
          </div>
          <div>Bharat Manufacturing Pvt Ltd · SAP ERP 6.0 · Company Code IN01 · FY 2024-25</div>
          <div style={{ fontFamily: C.mono, fontSize: 11 }}>User: CA_TRAINEE</div>
        </div>

        {/* Menu bar */}
        <div
          style={{
            background: SAP_SIM.shellBg,
            borderBottom: '1px solid #9ca3af',
            padding: '2px 8px',
            display: 'flex',
            gap: 16,
            fontSize: 11,
          }}
        >
          {['System', 'Edit', 'Favourites', 'Extras', 'Help'].map((m) => (
            <span key={m} style={{ cursor: 'default', color: '#111827' }}>
              {m}
            </span>
          ))}
        </div>

        {/* Toolbar */}
        <div
          style={{
            background: SAP_SIM.shellBg,
            borderBottom: '1px solid #9ca3af',
            padding: '4px 8px',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 11,
          }}
        >
          {[
            '◀ Back',
            '▶ Forward',
            '✕ Cancel',
            '💾 Save',
            '🔍 Find',
            '🖨 Print',
          ].map((label) => (
            <button
              key={label}
              type="button"
              style={{
                borderRadius: 3,
                border: '1px solid #9ca3af',
                padding: '2px 8px',
                background:
                  'linear-gradient(180deg,#f9fafb,#e5e7eb)',
                fontSize: 11,
                cursor: 'default',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Command field */}
        <form
          onSubmit={handleCommandSubmit}
          style={{
            background: SAP_SIM.shellBg,
            borderBottom: '2px solid #9ca3af',
            padding: '4px 8px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 11,
          }}
        >
          <span style={{ minWidth: 70 }}>Transaction:</span>
          <input
            value={cmd}
            onChange={(e) => setCmd(e.target.value)}
            style={{
              border: '1px inset #6b7280',
              background: '#ffffff',
              padding: '2px 6px',
              width: 120,
              fontFamily: C.mono,
              fontSize: 11,
              color: '#1f2937',
            }}
          />
        </form>

        {/* Main simulator body */}
        <div
          style={{
            display: 'flex',
            minHeight: 520,
          }}
        >
          {/* Sidebar */}
          <div
            style={{
              width: 260,
              borderRight: '1px solid #e5e7eb',
              background: '#f9fafb',
              padding: '10px 8px',
              overflowY: 'auto',
            }}
          >
            {simulatorSidebar.map((group) => (
              <div key={group.label} style={{ marginBottom: 12 }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: '#0f172a',
                    marginBottom: 6,
                    textTransform: 'uppercase',
                  }}
                >
                  {group.label}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {group.items.map((it) => (
                    <button
                      key={it.code}
                      type="button"
                      onClick={() => navigateTcode(it.code)}
                      style={{
                        textAlign: 'left',
                        borderRadius: 4,
                        border: 'none',
                        padding: '4px 6px',
                        fontSize: 11,
                        background:
                          state.currentTcode === it.code
                            ? 'rgba(37,99,235,0.08)'
                            : 'transparent',
                        color:
                          state.currentTcode === it.code
                            ? '#1d4ed8'
                            : '#374151',
                        cursor: 'pointer',
                      }}
                    >
                      <span style={{ fontFamily: C.mono, marginRight: 4 }}>
                        {it.code}
                      </span>
                      {it.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Screen area */}
          <div
            style={{
              flex: 1,
              background: SAP_SIM.bg,
              padding: 16,
              overflow: 'auto',
            }}
          >
            <SimulatorScreen state={state} setState={setState} />
          </div>
        </div>

        <SimulatorStatusBar status={state.status} />
      </div>
    </div>
  );
}

function SimulatorScreen({ state, setState }) {
  const header = (
    <div
      style={{
        background: SAP_SIM.headerBg,
        color: SAP_SIM.headerText,
        padding: '8px 12px',
        borderRadius: 6,
        marginBottom: 12,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ fontSize: 13, fontWeight: 600 }}>
        Transaction {state.currentTcode}
      </div>
      <div style={{ fontSize: 11, opacity: 0.9 }}>
        Training system · Demo data only
      </div>
    </div>
  );

  const code = state.currentTcode;

  let body;
  switch (code) {
    case 'FB50':
      body = <SimFB50 state={state} setState={setState} />;
      break;
    case 'FB03':
      body = <SimFB03 state={state} />;
      break;
    case 'FBL3N':
      body = <SimFBL3N state={state} />;
      break;
    case 'FB08':
      body = <SimFB08 state={state} setState={setState} />;
      break;
    case 'FK03':
      body = <SimFK03 state={state} setState={setState} />;
      break;
    case 'FD03':
      body = <SimFD03 state={state} setState={setState} />;
      break;
    case 'FB70':
      body = <SimFB70 state={state} setState={setState} />;
      break;
    case 'F-28':
      body = <SimF28 state={state} setState={setState} />;
      break;
    case 'S_ALR_87012284':
      body = <SimS_ALR_87012284 state={state} />;
      break;
    case 'FB60':
      body = <SimFB60 state={state} setState={setState} />;
      break;
    case 'F-53':
      body = <SimF53 state={state} setState={setState} />;
      break;
    case 'F110':
      body = <SimF110 state={state} setState={setState} />;
      break;
    case 'FBL1N':
      body = <SimFBL1N state={state} />;
      break;
    case 'FBL5N':
      body = <SimFBL5N state={state} />;
      break;
    case 'F.01':
      body = <SimF01 state={state} setState={setState} />;
      break;
    case 'FF67':
      body = <SimFF67 state={state} />;
      break;
    case 'FEBAN':
      body = <SimFEBAN state={state} setState={setState} />;
      break;
    case 'OB52':
      body = <SimOB52 state={state} />;
      break;
    case 'AFAB':
      body = <SimAFAB state={state} setState={setState} />;
      break;
    case 'F.16':
      body = <SimF16 state={state} />;
      break;
    default:
      body = (
        <div
          style={{
            background: '#ffffff',
            borderRadius: 6,
            border: '1px solid #e5e7eb',
            padding: 16,
            fontSize: 12,
            color: '#111827',
          }}
        >
          <div style={{ marginBottom: 8, fontWeight: 600 }}>
            Screen not implemented yet
          </div>
          <div style={{ color: '#4b5563', lineHeight: 1.6 }}>
            The simulator shell is active, but this specific training screen
            has not been configured.
          </div>
        </div>
      );
  }

  return (
    <div>
      {header}
      {body}
    </div>
  );
}

// ─── Simulator screen helpers and implementations (light SAP theme) ────────────

function SimCard({ children }) {
  return (
    <div
      style={{
        background: '#ffffff',
        borderRadius: 6,
        border: '1px solid #e5e7eb',
        padding: 16,
        fontSize: 12,
        color: '#111827',
      }}
    >
      {children}
    </div>
  );
}

function SimFieldRow({ label, required, children }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 6,
      }}
    >
      <div
        style={{
          minWidth: 140,
          fontSize: 11,
          color: SAP_SIM.label,
          fontWeight: required ? 600 : 400,
        }}
      >
        {label}
        {required ? ' *' : ''}
      </div>
      {children}
    </div>
  );
}

function SimInput({ value, onChange, width = 140, readOnly }) {
  return (
    <input
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      style={{
        height: 22,
        borderRadius: 2,
        border: `1px solid ${SAP_SIM.fieldBorder}`,
        padding: '2px 6px',
        fontFamily: C.mono,
        fontSize: 11,
        width,
        background: readOnly ? '#f9fafb' : '#ffffff',
      }}
    />
  );
}

function SimTable({ columns, rows, getKey }) {
  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: 11,
        marginTop: 8,
      }}
    >
      <thead>
        <tr>
          {columns.map((c) => (
            <th
              key={c.key}
              style={{
                background: SAP_SIM.tableHeaderBg,
                color: '#ffffff',
                padding: '4px 6px',
                textAlign: 'left',
              }}
            >
              {c.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr
            key={getKey ? getKey(row, idx) : idx}
            style={{
              background: idx % 2 === 0 ? '#ffffff' : SAP_SIM.tableAltRow,
            }}
          >
            {columns.map((c) => (
              <td
                key={c.key}
                style={{ padding: '3px 6px', border: '1px solid #e5e7eb' }}
              >
                {c.render ? c.render(row, idx) : row[c.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// FB50 — Post G/L Document
function SimFB50({ state, setState }) {
  const [docDate, setDocDate] = useState('2024-04-30');
  const [postDate, setPostDate] = useState('2024-04-30');
  const [companyCode] = useState('IN01');
  const [rows, setRows] = useState([
    { gl: '400100', dc: 'D', amount: '50000', costCenter: 'CC001', text: '' },
    { gl: '200300', dc: 'C', amount: '50000', costCenter: '', text: '' },
  ]);
  const [glSearchRowIndex, setGlSearchRowIndex] = useState(null);
  const [showCreateGL, setShowCreateGL] = useState(false);
  const [newGLNumber, setNewGLNumber] = useState('');
  const [newGLName, setNewGLName] = useState('');
  const [newGLType, setNewGLType] = useState('Income');

  const addRow = () =>
    setRows((prev) => [...prev, { gl: '', dc: 'D', amount: '', costCenter: '', text: '' }]);

  const deleteRow = (index) =>
    setRows((prev) => prev.filter((_, idx) => idx !== index));

  const updateRow = (index, field, value) =>
    setRows((prev) =>
      prev.map((r, idx) => (idx === index ? { ...r, [field]: value } : r)),
    );

  const glMasters = state.glMasters || [];

  const handleSaveNewGL = () => {
    if (!newGLNumber.trim() || !newGLName.trim()) return;
    if (glMasters.some((g) => g.number === newGLNumber.trim())) {
      setState((prev) => ({ ...prev, status: { type: 'error', message: 'G/L account number already exists' } }));
      return;
    }
    const num = newGLNumber.trim();
    setState((prev) => ({
      ...prev,
      glMasters: [...(prev.glMasters || []), { number: num, name: newGLName.trim(), type: newGLType }],
    }));
    if (glSearchRowIndex !== null) setRows((prev) => prev.map((r, idx) => (idx === glSearchRowIndex ? { ...r, gl: num } : r)));
    setGlSearchRowIndex(null);
    setShowCreateGL(false);
    setNewGLNumber('');
    setNewGLName('');
    setNewGLType('Income');
  };

  const totals = rows.reduce(
    (acc, r) => {
      const amt = parseFloat(r.amount || '0') || 0;
      if (r.dc === 'D') acc.debit += amt;
      else acc.credit += amt;
      return acc;
    },
    { debit: 0, credit: 0 },
  );

  const handleSave = () => {
    if (!docDate || !postDate) {
      setState((prev) => ({
        ...prev,
        status: {
          type: 'error',
          message: 'Document Date and Posting Date are required in company code IN01',
        },
      }));
      return;
    }
    if (Math.round(totals.debit) !== Math.round(totals.credit)) {
      const diff = Math.abs(totals.debit - totals.credit).toFixed(2);
      setState((prev) => ({
        ...prev,
        status: {
          type: 'error',
          message: `Enter an account for the remaining amount of ₹${diff}`,
        },
      }));
      return;
    }
    const seq = state.journalDocs.length + 1;
    const docNo = `18${String(seq).padStart(8, '0')}`;
    const newDoc = {
      docNo,
      tcode: 'FB50',
      date: docDate,
      companyCode,
      items: rows.map((r) => ({
        gl: r.gl,
        dc: r.dc,
        amount: parseFloat(r.amount || '0') || 0,
        text: r.text,
      })),
    };
    setState((prev) => ({
      ...prev,
      journalDocs: [...prev.journalDocs, newDoc],
      status: {
        type: 'success',
        message: `Document ${docNo} posted in company code IN01`,
      },
    }));
  };

  return (
    <SimCard>
      <div style={{ fontWeight: 600, marginBottom: 8 }}>Enter G/L Account Document</div>
      <div style={{ marginBottom: 12 }}>
        <SimFieldRow label="Document Date" required>
          <SimInput value={docDate} onChange={(e) => setDocDate(e.target.value)} />
        </SimFieldRow>
        <SimFieldRow label="Posting Date" required>
          <SimInput value={postDate} onChange={(e) => setPostDate(e.target.value)} />
        </SimFieldRow>
        <SimFieldRow label="Company Code" required>
          <SimInput value={companyCode} readOnly />
        </SimFieldRow>
      </div>

      <div style={{ fontSize: 11, fontWeight: 600, color: SAP_SIM.label, marginBottom: 4 }}>
        G/L Line Items
      </div>
      {glSearchRowIndex !== null && (
        <div style={{ marginBottom: 12, border: '1px solid #cbd5e1', borderRadius: 4, padding: 10, background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
          <div style={{ fontWeight: 600, fontSize: 11, marginBottom: 8 }}>G/L Account search</div>
          {!showCreateGL ? (
            <>
              <button
                type="button"
                onClick={() => setShowCreateGL(true)}
                style={{
                  marginBottom: 8,
                  padding: '4px 10px',
                  background: SAP_SIM.headerBg,
                  color: '#fff',
                  border: 'none',
                  borderRadius: 4,
                  fontSize: 11,
                  cursor: 'pointer',
                }}
              >
                Create New G/L Account
              </button>
              <div style={{ maxHeight: 140, overflow: 'auto', border: '1px solid #e5e7eb', borderRadius: 4 }}>
                {glMasters.map((g) => (
                  <div
                    key={g.number}
                    onClick={() => { updateRow(glSearchRowIndex, 'gl', g.number); setGlSearchRowIndex(null); }}
                    style={{ padding: '6px 8px', cursor: 'pointer', fontSize: 11, borderBottom: '1px solid #f3f4f6' }}
                  >
                    {g.number} — {g.name} ({g.type})
                  </div>
                ))}
              </div>
              <button type="button" onClick={() => setGlSearchRowIndex(null)} style={{ marginTop: 6, fontSize: 11, color: '#6b7280', background: 'none', border: 'none', cursor: 'pointer' }}>Close</button>
            </>
          ) : (
            <div style={{ padding: 8, background: '#fafafa', borderRadius: 4, border: '1px solid #e5e7eb' }}>
              <div style={{ fontWeight: 600, fontSize: 11, marginBottom: 8 }}>Create New G/L Account</div>
              <SimFieldRow label="Account Number" required><SimInput value={newGLNumber} onChange={(e) => setNewGLNumber(e.target.value)} width={120} placeholder="e.g. 600100" /></SimFieldRow>
              <SimFieldRow label="Account Name" required><SimInput value={newGLName} onChange={(e) => setNewGLName(e.target.value)} width={200} /></SimFieldRow>
              <SimFieldRow label="Account Type">
                <select value={newGLType} onChange={(e) => setNewGLType(e.target.value)} style={{ height: 22, border: `1px solid ${SAP_SIM.fieldBorder}`, borderRadius: 2, fontSize: 11, minWidth: 140, background: '#fff' }}>
                  <option value="Asset">Asset</option>
                  <option value="Liability">Liability</option>
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
                </select>
              </SimFieldRow>
              <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
                <button type="button" onClick={handleSaveNewGL} style={{ padding: '4px 12px', background: SAP_SIM.headerBg, color: '#fff', border: 'none', borderRadius: 4, fontSize: 11, cursor: 'pointer' }}>Save</button>
                <button type="button" onClick={() => { setShowCreateGL(false); setNewGLNumber(''); setNewGLName(''); }} style={{ padding: '4px 12px', background: '#e5e7eb', color: '#374151', border: 'none', borderRadius: 4, fontSize: 11, cursor: 'pointer' }}>Cancel</button>
              </div>
            </div>
          )}
        </div>
      )}
      <SimTable
        columns={[
          {
            key: 'gl',
            label: 'G/L Account',
            render: (r, idx) => (
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <SimInput
                  value={r.gl}
                  onChange={(e) => updateRow(idx, 'gl', e.target.value)}
                  width={90}
                />
                <button
                  type="button"
                  onClick={() => setGlSearchRowIndex(idx)}
                  style={{ padding: '2px 4px', border: '1px solid #9ca3af', borderRadius: 2, fontSize: 10, background: '#f0f2f5', cursor: 'pointer' }}
                >
                  F4
                </button>
              </div>
            ),
          },
          {
            key: 'dc',
            label: 'D/C',
            render: (r, idx) => (
              <select
                value={r.dc}
                onChange={(e) => updateRow(idx, 'dc', e.target.value)}
                style={{
                  height: 22,
                  borderRadius: 2,
                  border: `1px solid ${SAP_SIM.fieldBorder}`,
                  fontSize: 11,
                }}
              >
                <option value="D">D</option>
                <option value="C">C</option>
              </select>
            ),
          },
          {
            key: 'amount',
            label: 'Amount',
            render: (r, idx) => (
              <SimInput
                value={r.amount}
                onChange={(e) => updateRow(idx, 'amount', e.target.value)}
                width={100}
              />
            ),
          },
          {
            key: 'costCenter',
            label: 'Cost Centre',
            render: (r, idx) => (
              <SimInput
                value={r.costCenter}
                onChange={(e) => updateRow(idx, 'costCenter', e.target.value)}
                width={100}
              />
            ),
          },
          {
            key: 'text',
            label: 'Text',
            render: (r, idx) => (
              <SimInput
                value={r.text}
                onChange={(e) => updateRow(idx, 'text', e.target.value)}
                width={180}
              />
            ),
          },
          {
            key: 'actions',
            label: '',
            render: (_r, idx) => (
              <button
                type="button"
                onClick={() => deleteRow(idx)}
                style={{
                  fontSize: 10,
                  border: 'none',
                  background: 'transparent',
                  color: '#b91c1c',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            ),
          },
        ]}
        rows={rows}
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 8,
          fontSize: 11,
        }}
      >
        <div>
          <button
            type="button"
            onClick={addRow}
            style={{
              borderRadius: 3,
              border: '1px solid #9ca3af',
              padding: '2px 8px',
              background: 'linear-gradient(180deg,#f9fafb,#e5e7eb)',
              fontSize: 11,
              cursor: 'pointer',
              marginRight: 6,
            }}
          >
            Add Row
          </button>
        </div>
        <div>
          <span style={{ marginRight: 12 }}>
            Debit: ₹{totals.debit.toFixed(2)}
          </span>
          <span>
            Credit: ₹{totals.credit.toFixed(2)}
          </span>
        </div>
      </div>

      <div style={{ textAlign: 'right', marginTop: 12 }}>
        <button
          type="button"
          onClick={handleSave}
          style={{
            borderRadius: 3,
            border: '1px solid #2563eb',
            padding: '4px 18px',
            background: 'linear-gradient(180deg,#3b82f6,#1d4ed8)',
            fontSize: 11,
            color: '#ffffff',
            cursor: 'pointer',
          }}
        >
          Post (Save)
        </button>
      </div>
    </SimCard>
  );
}

// FB03 — simple display of journalDocs
function SimFB03({ state }) {
  return (
    <SimCard>
      <div style={{ fontWeight: 600, marginBottom: 8 }}>Display Document</div>
      <div style={{ fontSize: 11, color: '#4b5563', marginBottom: 8 }}>
        Below are sample documents posted in this training client.
      </div>
      <SimTable
        columns={[
          { key: 'docNo', label: 'Document' },
          { key: 'date', label: 'Doc Date' },
          { key: 'companyCode', label: 'Company Code' },
          {
            key: 'amount',
            label: 'Amount',
            render: (r) =>
              r.items
                .filter((i) => i.dc === 'D')
                .reduce((a, i) => a + i.amount, 0)
                .toFixed(2),
          },
        ]}
        rows={state.journalDocs}
        getKey={(r) => r.docNo}
      />
    </SimCard>
  );
}

// FBL3N — flatten journalDocs
function SimFBL3N({ state }) {
  const rows = state.journalDocs.flatMap((doc) =>
    doc.items.map((it, idx) => ({
      docNo: doc.docNo,
      type: 'SA',
      date: doc.date,
      ref: `Item ${idx + 1}`,
      text: it.text || '',
      amount: (it.dc === 'D' ? 1 : -1) * it.amount,
    })),
  );
  const total = rows.reduce((a, r) => a + r.amount, 0);
  return (
    <SimCard>
      <div style={{ fontWeight: 600, marginBottom: 8 }}>G/L Account Line Items</div>
      <SimTable
        columns={[
          { key: 'docNo', label: 'Document' },
          { key: 'type', label: 'Type', render: () => 'SA' },
          { key: 'date', label: 'Date' },
          { key: 'ref', label: 'Reference' },
          { key: 'text', label: 'Text' },
          {
            key: 'amount',
            label: 'Amount',
            render: (r) => r.amount.toFixed(2),
          },
        ]}
        rows={rows}
      />
      <div style={{ marginTop: 8, fontSize: 11, fontWeight: 600 }}>
        Total: ₹{total.toFixed(2)}
      </div>
    </SimCard>
  );
}

// FB60 — skeleton vendor invoice posting (adds to vendorDocs)
function SimFB60({ state, setState }) {
  const [vendor, setVendor] = useState('V1001');
  const [amount, setAmount] = useState('118000');
  const [invDate, setInvDate] = useState('2024-04-05');

  const post = () => {
    if (!vendor || !amount) {
      setState((prev) => ({
        ...prev,
        status: {
          type: 'error',
          message: 'Vendor and Amount are required in company code IN01',
        },
      }));
      return;
    }
    const seq = state.vendorDocs.length + 1;
    const docNo = `1900000${String(seq).padStart(3, '0')}`;
    const newDoc = {
      docNo,
      vendor,
      name: vendor === 'V1001' ? 'Tata Steel Ltd' : 'Vendor',
      amount: parseFloat(amount || '0') || 0,
      open: true,
      tcode: 'FB60',
      date: invDate,
    };
    setState((prev) => ({
      ...prev,
      vendorDocs: [...prev.vendorDocs, newDoc],
      status: {
        type: 'success',
        message: `Document ${docNo} posted`,
      },
    }));
  };

  return (
    <SimCard>
      <div style={{ fontWeight: 600, marginBottom: 8 }}>Enter Vendor Invoice</div>
      <SimFieldRow label="Vendor" required>
        <SimInput value={vendor} onChange={(e) => setVendor(e.target.value)} />
      </SimFieldRow>
      <SimFieldRow label="Invoice Date" required>
        <SimInput value={invDate} onChange={(e) => setInvDate(e.target.value)} />
      </SimFieldRow>
      <SimFieldRow label="Amount" required>
        <SimInput value={amount} onChange={(e) => setAmount(e.target.value)} />
      </SimFieldRow>
      <div style={{ textAlign: 'right', marginTop: 12 }}>
        <button
          type="button"
          onClick={post}
          style={{
            borderRadius: 3,
            border: '1px solid #2563eb',
            padding: '4px 18px',
            background: 'linear-gradient(180deg,#3b82f6,#1d4ed8)',
            fontSize: 11,
            color: '#ffffff',
            cursor: 'pointer',
          }}
        >
          Post
        </button>
      </div>
    </SimCard>
  );
}

// FBL1N — vendor line items from vendorDocs
function SimFBL1N({ state }) {
  const rows = state.vendorDocs;
  const outstanding = rows
    .filter((d) => d.open)
    .reduce((a, d) => a + d.amount, 0);
  return (
    <SimCard>
      <div style={{ fontWeight: 600, marginBottom: 8 }}>Vendor Line Items</div>
      <SimTable
        columns={[
          { key: 'docNo', label: 'Document' },
          { key: 'vendor', label: 'Vendor' },
          { key: 'name', label: 'Name' },
          { key: 'date', label: 'Date' },
          {
            key: 'amount',
            label: 'Amount',
            render: (r) => r.amount.toFixed(2),
          },
          {
            key: 'status',
            label: 'Status',
            render: (r) => (r.open ? 'Open' : 'Cleared'),
          },
        ]}
        rows={rows}
        getKey={(r) => r.docNo}
      />
      <div style={{ marginTop: 8, fontSize: 11, fontWeight: 600 }}>
        Total outstanding: ₹{outstanding.toFixed(2)}
      </div>
    </SimCard>
  );
}

// FBL5N — customer line items (read-only from customerDocs)
function SimFBL5N({ state }) {
  const rows = state.customerDocs;
  const outstanding = rows
    .filter((d) => d.open)
    .reduce((a, d) => a + d.amount, 0);
  return (
    <SimCard>
      <div style={{ fontWeight: 600, marginBottom: 8 }}>Customer Line Items</div>
      <SimTable
        columns={[
          { key: 'docNo', label: 'Document' },
          { key: 'customer', label: 'Customer' },
          { key: 'name', label: 'Name' },
          {
            key: 'amount',
            label: 'Amount',
            render: (r) => r.amount.toFixed(2),
          },
          {
            key: 'status',
            label: 'Status',
            render: (r) => (r.open ? 'Open' : 'Cleared'),
          },
        ]}
        rows={rows}
        getKey={(r) => r.docNo}
      />
      <div style={{ marginTop: 8, fontSize: 11, fontWeight: 600 }}>
        Total outstanding: ₹{outstanding.toFixed(2)}
      </div>
    </SimCard>
  );
}

// F-53 — manual payment: clear vendor open items
function SimF53({ state, setState }) {
  const [vendor, setVendor] = useState('V1001');
  const [selected, setSelected] = useState({});

  const openDocs = state.vendorDocs.filter(
    (d) => d.vendor === vendor && d.open,
  );

  const toggle = (docNo) =>
    setSelected((prev) => ({ ...prev, [docNo]: !prev[docNo] }));

  const post = () => {
    const docsToClear = openDocs.filter((d) => selected[d.docNo]);
    if (!docsToClear.length) {
      setState((prev) => ({
        ...prev,
        status: {
          type: 'error',
          message: 'Select at least one open item to clear',
        },
      }));
      return;
    }
    setState((prev) => ({
      ...prev,
      vendorDocs: prev.vendorDocs.map((d) =>
        docsToClear.some((x) => x.docNo === d.docNo)
          ? { ...d, open: false }
          : d,
      ),
      status: {
        type: 'success',
        message: `Payment document posted. ${docsToClear.length} item(s) cleared.`,
      },
    }));
  };

  return (
    <SimCard>
      <div style={{ fontWeight: 600, marginBottom: 8 }}>Post Outgoing Payment</div>
      <SimFieldRow label="Vendor" required>
        <SimInput value={vendor} onChange={(e) => setVendor(e.target.value)} />
      </SimFieldRow>
      <div style={{ fontSize: 11, fontWeight: 600, marginTop: 8, marginBottom: 4 }}>
        Open Items
      </div>
      <SimTable
        columns={[
          {
            key: 'sel',
            label: '',
            render: (r) => (
              <input
                type="checkbox"
                checked={!!selected[r.docNo]}
                onChange={() => toggle(r.docNo)}
              />
            ),
          },
          { key: 'docNo', label: 'Document' },
          {
            key: 'amount',
            label: 'Amount',
            render: (r) => r.amount.toFixed(2),
          },
        ]}
        rows={openDocs}
        getKey={(r) => r.docNo}
      />
      <div style={{ textAlign: 'right', marginTop: 12 }}>
        <button
          type="button"
          onClick={post}
          style={{
            borderRadius: 3,
            border: '1px solid #2563eb',
            padding: '4px 18px',
            background: 'linear-gradient(180deg,#3b82f6,#1d4ed8)',
            fontSize: 11,
            color: '#ffffff',
            cursor: 'pointer',
          }}
        >
          Post Payment
        </button>
      </div>
    </SimCard>
  );
}

// F110 — simple proposal/execution summarising open vendor docs
function SimF110({ state, setState }) {
  const openDocs = state.vendorDocs.filter((d) => d.open);
  const total = openDocs.reduce((a, d) => a + d.amount, 0);

  const execute = () => {
    if (!openDocs.length) {
      setState((prev) => ({
        ...prev,
        status: {
          type: 'info',
          message: 'No due invoices found for payment run',
        },
      }));
      return;
    }
    setState((prev) => ({
      ...prev,
      vendorDocs: prev.vendorDocs.map((d) =>
        openDocs.some((x) => x.docNo === d.docNo) ? { ...d, open: false } : d,
      ),
      status: {
        type: 'success',
        message: `Payment run completed. ${openDocs.length} payments posted. Total: ₹${total.toFixed(
          2,
        )}`,
      },
    }));
  };

  return (
    <SimCard>
      <div style={{ fontWeight: 600, marginBottom: 8 }}>Automatic Payment Run</div>
      <div style={{ fontSize: 11, marginBottom: 6 }}>Proposal (due vendor invoices)</div>
      <SimTable
        columns={[
          { key: 'docNo', label: 'Document' },
          { key: 'vendor', label: 'Vendor' },
          { key: 'name', label: 'Name' },
          {
            key: 'amount',
            label: 'Amount',
            render: (r) => r.amount.toFixed(2),
          },
        ]}
        rows={openDocs}
        getKey={(r) => r.docNo}
      />
      <div style={{ marginTop: 8, fontSize: 11 }}>
        Total proposal amount: ₹{total.toFixed(2)}
      </div>
      <div style={{ textAlign: 'right', marginTop: 12 }}>
        <button
          type="button"
          onClick={execute}
          style={{
            borderRadius: 3,
            border: '1px solid #2563eb',
            padding: '4px 18px',
            background: 'linear-gradient(180deg,#3b82f6,#1d4ed8)',
            fontSize: 11,
            color: '#ffffff',
            cursor: 'pointer',
          }}
        >
          Execute Payment Run
        </button>
      </div>
    </SimCard>
  );
}

// F.01 — Schedule III Financial Statements (live from simulator state)
const F01_HEADER_BG = '#1a3a5c';
const F01_ROW_ALT = '#f8fafc';
const fmt = (n) => (n ?? 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function SimF01({ state, setState }) {
  const [companyCode, setCompanyCode] = useState('IN01');
  const [fiscalYear, setFiscalYear] = useState('2024');
  const [fromPeriod, setFromPeriod] = useState('1');
  const [toPeriod, setToPeriod] = useState('12');
  const [executed, setExecuted] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [exportMsg, setExportMsg] = useState(null);

  const glMasters = state.glMasters || [];
  const expenseGLs = new Set(glMasters.filter((g) => g.type === 'Expense').map((g) => g.number));
  const incomeGLs = new Set(glMasters.filter((g) => g.type === 'Income').map((g) => g.number));

  const debtors = (state.customerDocs || []).filter((d) => d.open === true).reduce((a, d) => a + (d.amount || 0), 0);
  const creditors = (state.vendorDocs || []).filter((d) => d.open === true).reduce((a, d) => a + (d.amount || 0), 0);
  const bankBalance = (state.bankLines || []).reduce((a, l) => a + (l.amount || 0), 0);
  const revenueFromOps = (state.customerDocs || []).reduce((a, d) => a + (d.amount || 0), 0);
  const expenseFromJournal = (state.journalDocs || [])
    .flatMap((d) => d.items || [])
    .filter((i) => i.dc === 'D' && expenseGLs.has(i.gl))
    .reduce((a, i) => a + (i.amount || 0), 0);
  const depreciation = state.depreciationTotal ?? 0;

  const PLANT_MACHINERY = 25000000;
  const SHARE_CAPITAL = 20000000;
  const LONG_TERM_LOANS = 5000000;
  const CLOSING_STOCK = 3500000;
  const CASH = 200000;
  const OTHER_INCOME = 0;
  const COST_OF_MATERIALS = 0;
  const EMPLOYEE_COSTS = 0;
  const GST_PAYABLE = 0;

  const accDepreciation = depreciation;
  const netBlock = PLANT_MACHINERY - accDepreciation;
  const totalCurrentAssets = debtors + bankBalance + CASH + CLOSING_STOCK;
  const totalAssets = netBlock + totalCurrentAssets;

  const totalIncome = revenueFromOps + OTHER_INCOME;
  const otherExpenses = Math.max(0, expenseFromJournal - depreciation);
  const totalExpenses = COST_OF_MATERIALS + EMPLOYEE_COSTS + depreciation + otherExpenses;
  const profitBeforeTax = totalIncome - totalExpenses;
  const tax = Math.max(0, profitBeforeTax * 0.25);
  const netProfit = profitBeforeTax - tax;

  const reservesAndSurplus = totalAssets - SHARE_CAPITAL - LONG_TERM_LOANS - creditors - GST_PAYABLE - netProfit;
  const totalLiabilities = SHARE_CAPITAL + reservesAndSurplus + LONG_TERM_LOANS + creditors + GST_PAYABLE + netProfit;

  const handleExecute = () => {
    setExecuted(true);
    setLastUpdated(new Date());
  };

  const handlePrint = () => window.print();

  const handleExport = () => {
    setExportMsg('Export to Excel completed successfully.');
    setTimeout(() => setExportMsg(null), 3000);
  };

  const BsRow = ({ label, amount, bold, sub, total, alt }) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: sub ? '2px 8px 2px 16px' : '4px 8px',
        fontSize: total ? 13 : 11,
        fontWeight: bold || total ? 600 : 400,
        background: total ? '#e0e7ff' : alt ? F01_ROW_ALT : '#fff',
        borderBottom: '1px solid #e5e7eb',
      }}
    >
      <span>{label}</span>
      <span style={{ fontFamily: 'monospace' }}>{amount != null ? `₹${fmt(amount)}` : '—'}</span>
    </div>
  );

  const BsSection = ({ title, children }) => (
    <>
      <div style={{ background: F01_HEADER_BG, color: '#fff', padding: '6px 10px', fontSize: 12, fontWeight: 600, marginTop: 8 }}>
        {title}
      </div>
      {children}
    </>
  );

  if (!executed) {
    return (
      <SimCard>
        <div style={{ fontWeight: 600, marginBottom: 10, color: F01_HEADER_BG }}>Financial Statements (F.01) — Schedule III</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', marginBottom: 16 }}>
          <SimFieldRow label="Company Code">
            <SimInput value={companyCode} onChange={(e) => setCompanyCode(e.target.value)} width={70} />
          </SimFieldRow>
          <SimFieldRow label="Fiscal Year">
            <SimInput value={fiscalYear} onChange={(e) => setFiscalYear(e.target.value)} width={70} />
          </SimFieldRow>
          <SimFieldRow label="From Period">
            <SimInput value={fromPeriod} onChange={(e) => setFromPeriod(e.target.value)} width={50} />
          </SimFieldRow>
          <SimFieldRow label="To Period">
            <SimInput value={toPeriod} onChange={(e) => setToPeriod(e.target.value)} width={50} />
          </SimFieldRow>
          <button
            type="button"
            onClick={handleExecute}
            style={{ padding: '6px 16px', background: F01_HEADER_BG, color: '#fff', border: 'none', borderRadius: 4, fontSize: 11, fontWeight: 600, cursor: 'pointer' }}
          >
            Execute
          </button>
        </div>
        <div style={{ fontSize: 11, color: '#6b7280' }}>Click Execute to generate Balance Sheet and P&amp;L from current period data.</div>
      </SimCard>
    );
  }

  return (
    <SimCard>
      <div style={{ fontWeight: 600, marginBottom: 8, color: F01_HEADER_BG }}>Financial Statements (F.01) — Schedule III</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', marginBottom: 12 }}>
        <SimFieldRow label="Company Code">
          <SimInput value={companyCode} onChange={(e) => setCompanyCode(e.target.value)} width={70} />
        </SimFieldRow>
        <SimFieldRow label="Fiscal Year">
          <SimInput value={fiscalYear} onChange={(e) => setFiscalYear(e.target.value)} width={70} />
        </SimFieldRow>
        <SimFieldRow label="From Period">
          <SimInput value={fromPeriod} onChange={(e) => setFromPeriod(e.target.value)} width={50} />
        </SimFieldRow>
        <SimFieldRow label="To Period">
          <SimInput value={toPeriod} onChange={(e) => setToPeriod(e.target.value)} width={50} />
        </SimFieldRow>
        <button type="button" onClick={handleExecute} style={{ padding: '4px 12px', background: F01_HEADER_BG, color: '#fff', border: 'none', borderRadius: 4, fontSize: 11, cursor: 'pointer' }}>Execute</button>
        <button type="button" onClick={handlePrint} style={{ padding: '4px 12px', background: '#f0f2f5', border: '1px solid #9ca3af', borderRadius: 4, fontSize: 11, cursor: 'pointer' }}>Print</button>
        <button type="button" onClick={handleExport} style={{ padding: '4px 12px', background: '#f0f2f5', border: '1px solid #9ca3af', borderRadius: 4, fontSize: 11, cursor: 'pointer' }}>Export to Excel</button>
        {exportMsg && <span style={{ fontSize: 11, color: '#059669' }}>{exportMsg}</span>}
      </div>
      {lastUpdated && (
        <div style={{ fontSize: 10, color: '#6b7280', marginBottom: 10 }}>Last updated: {lastUpdated.toLocaleString()}</div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'start' }}>
        {/* Balance Sheet — Left */}
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 4, overflow: 'hidden' }}>
          <BsSection title="BALANCE SHEET">{(() => {
            const rows = [
              { label: 'ASSETS', amount: null, header: true },
              { label: 'Fixed Assets', amount: null, sub: true },
              { label: 'Plant & Machinery', amount: PLANT_MACHINERY, sub: true },
              { label: 'Less: Accumulated Depreciation', amount: -accDepreciation, sub: true },
              { label: 'Net Block', amount: netBlock, bold: true, sub: true },
              { label: 'Current Assets', amount: null, sub: true },
              { label: 'Debtors', amount: debtors, sub: true },
              { label: 'Bank — HDFC Current', amount: bankBalance, sub: true },
              { label: 'Cash', amount: CASH, sub: true },
              { label: 'Closing Stock', amount: CLOSING_STOCK, sub: true },
              { label: 'Total Current Assets', amount: totalCurrentAssets, bold: true, sub: true },
              { label: 'TOTAL ASSETS', amount: totalAssets, total: true },
              { label: 'LIABILITIES & EQUITY', amount: null, header: true },
              { label: 'Share Capital', amount: SHARE_CAPITAL, sub: true },
              { label: 'Reserves & Surplus', amount: reservesAndSurplus, sub: true },
              { label: 'Long Term Loans', amount: LONG_TERM_LOANS, sub: true },
              { label: 'Current Liabilities', amount: null, sub: true },
              { label: 'Creditors', amount: creditors, sub: true },
              { label: 'GST Payable', amount: GST_PAYABLE, sub: true },
              { label: 'TOTAL LIABILITIES & EQUITY', amount: totalLiabilities, total: true },
            ];
            let rowIdx = 0;
            return (
              <>
                {rows.map((r, i) => {
                  if (r.header) return <div key={i} style={{ background: F01_HEADER_BG, color: '#fff', padding: '6px 10px', fontSize: 12, fontWeight: 600, marginTop: 8 }}>{r.label}</div>;
                  return <BsRow key={i} label={r.label} amount={r.amount} bold={r.bold} sub={r.sub} total={r.total} alt={rowIdx++ % 2 === 1} />;
                })}
              </>
            );
          })()}</BsSection>
        </div>

        {/* P&L — Right */}
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 4, overflow: 'hidden' }}>
          <BsSection title="PROFIT & LOSS STATEMENT">{(() => {
            const rows = [
              { label: 'Revenue from Operations', amount: revenueFromOps, sub: true },
              { label: 'Other Income', amount: OTHER_INCOME, sub: true },
              { label: 'TOTAL INCOME', amount: totalIncome, bold: true },
              { label: 'Cost of Materials', amount: COST_OF_MATERIALS, sub: true },
              { label: 'Employee Costs', amount: EMPLOYEE_COSTS, sub: true },
              { label: 'Depreciation', amount: depreciation, sub: true },
              { label: 'Other Expenses', amount: otherExpenses, sub: true },
              { label: 'TOTAL EXPENSES', amount: totalExpenses, bold: true },
              { label: 'PROFIT BEFORE TAX', amount: profitBeforeTax, bold: true },
              { label: 'Tax @ 25%', amount: tax, sub: true },
              { label: 'NET PROFIT', amount: netProfit, total: true },
            ];
            return (
              <>
                {rows.map((r, i) => (
                  <BsRow key={i} label={r.label} amount={r.amount} bold={r.bold} sub={r.sub} total={r.total} alt={i % 2 === 1} />
                ))}
              </>
            );
          })()}</BsSection>
        </div>
      </div>
    </SimCard>
  );
}

// FF67 / FEBAN / OB52 / AFAB / F.16 — lightweight read-only demos
function SimFF67({ state }) {
  return (
    <SimCard>
      <div style={{ fontWeight: 600, marginBottom: 8 }}>Manual Bank Statement (FF67)</div>
      <SimTable
        columns={[
          { key: 'date', label: 'Value Date' },
          { key: 'text', label: 'Text' },
          { key: 'amount', label: 'Amount', render: (r) => r.amount.toFixed(2) },
        ]}
        rows={state.bankLines}
        getKey={(r) => r.id}
      />
    </SimCard>
  );
}

// FB08 — Reverse Document
function SimFB08({ state, setState }) {
  const [docNo, setDocNo] = useState('');
  const [companyCode, setCompanyCode] = useState('IN01');
  const [fiscalYear, setFiscalYear] = useState('2024');
  const [reversalReason, setReversalReason] = useState('01');
  const [reversalDate, setReversalDate] = useState('2024-04-30');

  const reversalReasons = [
    { value: '01', text: '01 — Incorrect posting' },
    { value: '02', text: '02 — Wrong amount' },
    { value: '03', text: '03 — Wrong account' },
  ];

  const handlePost = () => {
    const normalized = String(docNo).trim().replace(/^18/, '');
    const doc = (state.journalDocs || []).find((d) => {
      const dNorm = String(d.docNo).replace(/^18/, '');
      return d.docNo === docNo || dNorm === normalized || dNorm.endsWith(normalized) || normalized.endsWith(dNorm);
    });
    if (!doc) {
      setState((prev) => ({
        ...prev,
        status: { type: 'error', message: 'Document not found' },
      }));
      return;
    }
    const revNo = '18' + String(Math.floor(10000000 + Math.random() * 90000000)).slice(0, 8);
    const mirrorItems = doc.items.map((i) => ({
      ...i,
      dc: i.dc === 'D' ? 'C' : 'D',
      amount: i.amount,
    }));
    setState((prev) => ({
      ...prev,
      journalDocs: [
        ...(prev.journalDocs || []),
        { docNo: revNo, date: doc.date, companyCode: doc.companyCode || prev.companyCode, items: mirrorItems, reversalOf: doc.docNo },
      ],
      status: { type: 'success', message: `Reversal document ${revNo} created` },
    }));
  };

  return (
    <SimCard>
      <div style={{ fontWeight: 600, marginBottom: 8, color: SAP_SIM.headerBg }}>Reverse Document (FB08)</div>
      <SimFieldRow label="Document Number" required>
        <SimInput value={docNo} onChange={(e) => setDocNo(e.target.value)} width={160} />
      </SimFieldRow>
      <SimFieldRow label="Company Code" required>
        <SimInput value={companyCode} onChange={(e) => setCompanyCode(e.target.value)} width={80} />
      </SimFieldRow>
      <SimFieldRow label="Fiscal Year" required>
        <SimInput value={fiscalYear} onChange={(e) => setFiscalYear(e.target.value)} width={80} />
      </SimFieldRow>
      <SimFieldRow label="Reversal Reason" required>
        <select
          value={reversalReason}
          onChange={(e) => setReversalReason(e.target.value)}
          style={{
            height: 22,
            border: `1px solid ${SAP_SIM.fieldBorder}`,
            borderRadius: 2,
            fontSize: 11,
            minWidth: 220,
            background: '#fff',
          }}
        >
          {reversalReasons.map((r) => (
            <option key={r.value} value={r.value}>{r.text}</option>
          ))}
        </select>
      </SimFieldRow>
      <SimFieldRow label="Reversal Date" required>
        <SimInput value={reversalDate} onChange={(e) => setReversalDate(e.target.value)} width={120} />
      </SimFieldRow>
      <div style={{ marginTop: 12 }}>
        <button
          type="button"
          onClick={handlePost}
          style={{
            padding: '4px 16px',
            background: SAP_SIM.headerBg,
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            fontSize: 11,
            cursor: 'pointer',
          }}
        >
          Post
        </button>
      </div>
    </SimCard>
  );
}

// FK03 — Vendor Master Display
function SimFK03({ state, setState }) {
  const [vendorNo, setVendorNo] = useState('');
  const [companyCode, setCompanyCode] = useState('IN01');
  const [tab, setTab] = useState('general');
  const [displayed, setDisplayed] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showCreateVendor, setShowCreateVendor] = useState(false);
  const [newName, setNewName] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newPaymentTerms, setNewPaymentTerms] = useState('NT30');
  const [newBank, setNewBank] = useState('');
  const [newAccountNo, setNewAccountNo] = useState('');
  const [newIfsc, setNewIfsc] = useState('');
  const [newGst, setNewGst] = useState('');
  const [newPan, setNewPan] = useState('');

  const vendors = state.vendorMasters || [];
  const vendor = displayed || vendors.find((v) => v.code === vendorNo || v.searchTerm.toLowerCase().includes((vendorNo || '').toLowerCase()));

  const handleDisplay = () => {
    const v = vendors.find((x) => x.code === vendorNo || x.searchTerm.toLowerCase().includes((vendorNo || '').toLowerCase()));
    setDisplayed(v || null);
  };

  const nextVendorCode = () => {
    const newCount = vendors.filter((v) => /^V100\d{3}$/.test(v.code)).length;
    return 'V' + (100005 + newCount);
  };

  const handleSaveNewVendor = () => {
    if (!newName.trim()) return;
    const code = nextVendorCode();
    const searchTerm = newName.trim().split(/\s+/)[0] || newName.trim().slice(0, 8);
    const paymentTermsLabel = { NT30: 'NT30 (Net 30 days)', NT45: 'NT45', NT60: 'NT60' }[newPaymentTerms];
    const newVendor = {
      code,
      name: newName.trim(),
      searchTerm,
      street: '',
      city: newCity.trim() || '—',
      country: 'IN — India',
      gst: newGst.trim() || '—',
      pan: newPan.trim() || '—',
      paymentTerms: paymentTermsLabel,
      paymentMethod: 'T — Bank Transfer',
      bank: newBank.trim() || '—',
      accountNo: newAccountNo.trim() || '—',
      ifsc: newIfsc.trim() || '—',
      reconAccount: '200100',
    };
    setState((prev) => ({
      ...prev,
      vendorMasters: [...(prev.vendorMasters || []), newVendor],
    }));
    setVendorNo(code);
    setDisplayed(newVendor);
    setShowCreateVendor(false);
    setShowSearch(false);
    setNewName('');
    setNewCity('');
    setNewBank('');
    setNewAccountNo('');
    setNewIfsc('');
    setNewGst('');
    setNewPan('');
  };

  return (
    <SimCard>
      <div style={{ fontWeight: 600, marginBottom: 8, color: SAP_SIM.headerBg }}>Vendor Master Display (FK03)</div>
      <SimFieldRow label="Vendor Number">
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <SimInput value={vendorNo} onChange={(e) => setVendorNo(e.target.value)} width={120} placeholder="V1001 or name" />
          <button
            type="button"
            onClick={() => setShowSearch(true)}
            style={{ padding: '2px 6px', border: '1px solid #9ca3af', borderRadius: 2, fontSize: 10, background: '#f0f2f5', cursor: 'pointer' }}
          >
            F4
          </button>
        </div>
      </SimFieldRow>
      {showSearch && (
        <div style={{ marginBottom: 12, border: '1px solid #cbd5e1', borderRadius: 4, padding: 10, background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
          <div style={{ fontWeight: 600, fontSize: 11, marginBottom: 8 }}>Vendor search</div>
          {!showCreateVendor ? (
            <>
              <button
                type="button"
                onClick={() => setShowCreateVendor(true)}
                style={{
                  marginBottom: 8,
                  padding: '4px 10px',
                  background: SAP_SIM.headerBg,
                  color: '#fff',
                  border: 'none',
                  borderRadius: 4,
                  fontSize: 11,
                  cursor: 'pointer',
                }}
              >
                Create New Vendor
              </button>
              <div style={{ maxHeight: 160, overflow: 'auto', border: '1px solid #e5e7eb', borderRadius: 4 }}>
                {vendors.map((v) => (
                  <div
                    key={v.code}
                    onClick={() => { setVendorNo(v.code); setDisplayed(v); setShowSearch(false); }}
                    style={{ padding: '6px 8px', cursor: 'pointer', fontSize: 11, borderBottom: '1px solid #f3f4f6' }}
                  >
                    {v.code} — {v.name}
                  </div>
                ))}
              </div>
              <button type="button" onClick={() => setShowSearch(false)} style={{ marginTop: 6, fontSize: 11, color: '#6b7280', background: 'none', border: 'none', cursor: 'pointer' }}>Close</button>
            </>
          ) : (
            <div style={{ padding: 8, background: '#fafafa', borderRadius: 4, border: '1px solid #e5e7eb' }}>
              <div style={{ fontWeight: 600, fontSize: 11, marginBottom: 8 }}>Create New Vendor</div>
              <SimFieldRow label="Vendor Name" required><SimInput value={newName} onChange={(e) => setNewName(e.target.value)} width={220} /></SimFieldRow>
              <SimFieldRow label="City"><SimInput value={newCity} onChange={(e) => setNewCity(e.target.value)} width={140} /></SimFieldRow>
              <SimFieldRow label="Payment Terms">
                <select value={newPaymentTerms} onChange={(e) => setNewPaymentTerms(e.target.value)} style={{ height: 22, border: `1px solid ${SAP_SIM.fieldBorder}`, borderRadius: 2, fontSize: 11, minWidth: 100, background: '#fff' }}>
                  <option value="NT30">NT30</option>
                  <option value="NT45">NT45</option>
                  <option value="NT60">NT60</option>
                </select>
              </SimFieldRow>
              <SimFieldRow label="Bank Name"><SimInput value={newBank} onChange={(e) => setNewBank(e.target.value)} width={160} /></SimFieldRow>
              <SimFieldRow label="Bank Account Number"><SimInput value={newAccountNo} onChange={(e) => setNewAccountNo(e.target.value)} width={140} /></SimFieldRow>
              <SimFieldRow label="IFSC Code"><SimInput value={newIfsc} onChange={(e) => setNewIfsc(e.target.value)} width={120} /></SimFieldRow>
              <SimFieldRow label="GST Number"><SimInput value={newGst} onChange={(e) => setNewGst(e.target.value)} width={180} /></SimFieldRow>
              <SimFieldRow label="PAN"><SimInput value={newPan} onChange={(e) => setNewPan(e.target.value)} width={120} /></SimFieldRow>
              <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
                <button type="button" onClick={handleSaveNewVendor} style={{ padding: '4px 12px', background: SAP_SIM.headerBg, color: '#fff', border: 'none', borderRadius: 4, fontSize: 11, cursor: 'pointer' }}>Save</button>
                <button type="button" onClick={() => { setShowCreateVendor(false); setNewName(''); setNewCity(''); setNewBank(''); setNewAccountNo(''); setNewIfsc(''); setNewGst(''); setNewPan(''); }} style={{ padding: '4px 12px', background: '#e5e7eb', color: '#374151', border: 'none', borderRadius: 4, fontSize: 11, cursor: 'pointer' }}>Cancel</button>
              </div>
            </div>
          )}
        </div>
      )}
      <SimFieldRow label="Company Code">
        <SimInput value={companyCode} onChange={(e) => setCompanyCode(e.target.value)} width={80} />
      </SimFieldRow>
      <div style={{ marginBottom: 12 }}>
        <button
          type="button"
          onClick={handleDisplay}
          style={{
            padding: '4px 16px',
            background: SAP_SIM.headerBg,
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            fontSize: 11,
            cursor: 'pointer',
          }}
        >
          Display
        </button>
      </div>
      {vendor && (
        <>
          <div style={{ display: 'flex', gap: 4, marginBottom: 8, borderBottom: '1px solid #e5e7eb' }}>
            {['general', 'company', 'payment'].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                style={{
                  padding: '4px 10px',
                  background: tab === t ? SAP_SIM.headerBg : '#f0f2f5',
                  color: tab === t ? '#fff' : '#374151',
                  border: 'none',
                  borderRadius: 4,
                  fontSize: 11,
                  cursor: 'pointer',
                }}
              >
                {t === 'general' && 'General Data'}
                {t === 'company' && 'Company Code Data'}
                {t === 'payment' && 'Payment Transactions'}
              </button>
            ))}
          </div>
          <div style={{ fontSize: 11, padding: 8, border: '1px solid #e5e7eb', background: '#fafafa' }}>
            {tab === 'general' && (
              <>
                <div><strong>Name:</strong> {vendor.name}</div>
                <div><strong>Address:</strong> {(vendor.street || '') + (vendor.street ? ', ' : '')}{vendor.city}, {vendor.country || 'IN — India'}</div>
                <div><strong>GST No:</strong> {vendor.gst || '—'}</div>
                <div><strong>PAN:</strong> {vendor.pan || '—'}</div>
              </>
            )}
            {tab === 'company' && (
              <>
                <div><strong>Payment terms:</strong> {vendor.paymentTerms}</div>
                <div><strong>Payment method:</strong> {vendor.paymentMethod || 'T — Bank Transfer'}</div>
                <div><strong>Recon account:</strong> {vendor.reconAccount || '200100'}</div>
              </>
            )}
            {tab === 'payment' && (
              <>
                <div><strong>Bank:</strong> {vendor.bank || '—'}</div>
                <div><strong>Account no:</strong> {vendor.accountNo || '—'}</div>
                <div><strong>IFSC:</strong> {vendor.ifsc || '—'}</div>
                <div style={{ marginTop: 6, color: '#6b7280' }}>No payment history in demo.</div>
              </>
            )}
          </div>
        </>
      )}
    </SimCard>
  );
}

// FD03 — Customer Master Display
function SimFD03({ state, setState }) {
  const [customerNo, setCustomerNo] = useState('');
  const [companyCode, setCompanyCode] = useState('IN01');
  const [tab, setTab] = useState('general');
  const [displayed, setDisplayed] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showCreateCustomer, setShowCreateCustomer] = useState(false);
  const [newName, setNewName] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newPaymentTerms, setNewPaymentTerms] = useState('NT30');
  const [newCreditLimit, setNewCreditLimit] = useState('');
  const [newGst, setNewGst] = useState('');
  const [newPan, setNewPan] = useState('');

  const customers = state.customerMasters || [];
  const customer = displayed || customers.find((c) => c.code === customerNo || c.searchTerm.toLowerCase().includes((customerNo || '').toLowerCase()));

  const handleDisplay = () => {
    const c = customers.find((x) => x.code === customerNo || x.searchTerm.toLowerCase().includes((customerNo || '').toLowerCase()));
    setDisplayed(c || null);
  };

  const nextCustomerCode = () => {
    const newCount = customers.filter((c) => /^C100\d{3}$/.test(c.code)).length;
    return 'C' + (100005 + newCount);
  };

  const handleSaveNewCustomer = () => {
    if (!newName.trim()) return;
    const code = nextCustomerCode();
    const searchTerm = newName.trim().split(/\s+/)[0] || newName.trim().slice(0, 8);
    const newCustomer = {
      code,
      name: newName.trim(),
      searchTerm,
      street: '',
      city: newCity.trim() || '—',
      country: 'IN — India',
      creditLimit: parseFloat(newCreditLimit) || 0,
      paymentTerms: newPaymentTerms,
      dunningProcedure: 'MA01',
      gst: newGst.trim() || '—',
      pan: newPan.trim() || '—',
    };
    setState((prev) => ({
      ...prev,
      customerMasters: [...(prev.customerMasters || []), newCustomer],
    }));
    setCustomerNo(code);
    setDisplayed(newCustomer);
    setShowCreateCustomer(false);
    setShowSearch(false);
    setNewName('');
    setNewCity('');
    setNewCreditLimit('');
    setNewGst('');
    setNewPan('');
  };

  return (
    <SimCard>
      <div style={{ fontWeight: 600, marginBottom: 8, color: SAP_SIM.headerBg }}>Customer Master Display (FD03)</div>
      <SimFieldRow label="Customer Number">
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <SimInput value={customerNo} onChange={(e) => setCustomerNo(e.target.value)} width={120} placeholder="C2001 or name" />
          <button
            type="button"
            onClick={() => setShowSearch(true)}
            style={{ padding: '2px 6px', border: '1px solid #9ca3af', borderRadius: 2, fontSize: 10, background: '#f0f2f5', cursor: 'pointer' }}
          >
            F4
          </button>
        </div>
      </SimFieldRow>
      {showSearch && (
        <div style={{ marginBottom: 12, border: '1px solid #cbd5e1', borderRadius: 4, padding: 10, background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
          <div style={{ fontWeight: 600, fontSize: 11, marginBottom: 8 }}>Customer search</div>
          {!showCreateCustomer ? (
            <>
              <button
                type="button"
                onClick={() => setShowCreateCustomer(true)}
                style={{
                  marginBottom: 8,
                  padding: '4px 10px',
                  background: SAP_SIM.headerBg,
                  color: '#fff',
                  border: 'none',
                  borderRadius: 4,
                  fontSize: 11,
                  cursor: 'pointer',
                }}
              >
                Create New Customer
              </button>
              <div style={{ maxHeight: 160, overflow: 'auto', border: '1px solid #e5e7eb', borderRadius: 4 }}>
                {customers.map((c) => (
                  <div
                    key={c.code}
                    onClick={() => { setCustomerNo(c.code); setDisplayed(c); setShowSearch(false); }}
                    style={{ padding: '6px 8px', cursor: 'pointer', fontSize: 11, borderBottom: '1px solid #f3f4f6' }}
                  >
                    {c.code} — {c.name}
                  </div>
                ))}
              </div>
              <button type="button" onClick={() => setShowSearch(false)} style={{ marginTop: 6, fontSize: 11, color: '#6b7280', background: 'none', border: 'none', cursor: 'pointer' }}>Close</button>
            </>
          ) : (
            <div style={{ padding: 8, background: '#fafafa', borderRadius: 4, border: '1px solid #e5e7eb' }}>
              <div style={{ fontWeight: 600, fontSize: 11, marginBottom: 8 }}>Create New Customer</div>
              <SimFieldRow label="Customer Name" required><SimInput value={newName} onChange={(e) => setNewName(e.target.value)} width={220} /></SimFieldRow>
              <SimFieldRow label="City"><SimInput value={newCity} onChange={(e) => setNewCity(e.target.value)} width={140} /></SimFieldRow>
              <SimFieldRow label="Payment Terms">
                <select value={newPaymentTerms} onChange={(e) => setNewPaymentTerms(e.target.value)} style={{ height: 22, border: `1px solid ${SAP_SIM.fieldBorder}`, borderRadius: 2, fontSize: 11, minWidth: 100, background: '#fff' }}>
                  <option value="NT30">NT30</option>
                  <option value="NT45">NT45</option>
                  <option value="NT60">NT60</option>
                </select>
              </SimFieldRow>
              <SimFieldRow label="Credit Limit"><SimInput value={newCreditLimit} onChange={(e) => setNewCreditLimit(e.target.value)} width={120} placeholder="Number" /></SimFieldRow>
              <SimFieldRow label="GST Number"><SimInput value={newGst} onChange={(e) => setNewGst(e.target.value)} width={180} /></SimFieldRow>
              <SimFieldRow label="PAN"><SimInput value={newPan} onChange={(e) => setNewPan(e.target.value)} width={120} /></SimFieldRow>
              <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
                <button type="button" onClick={handleSaveNewCustomer} style={{ padding: '4px 12px', background: SAP_SIM.headerBg, color: '#fff', border: 'none', borderRadius: 4, fontSize: 11, cursor: 'pointer' }}>Save</button>
                <button type="button" onClick={() => { setShowCreateCustomer(false); setNewName(''); setNewCity(''); setNewCreditLimit(''); setNewGst(''); setNewPan(''); }} style={{ padding: '4px 12px', background: '#e5e7eb', color: '#374151', border: 'none', borderRadius: 4, fontSize: 11, cursor: 'pointer' }}>Cancel</button>
              </div>
            </div>
          )}
        </div>
      )}
      <SimFieldRow label="Company Code">
        <SimInput value={companyCode} onChange={(e) => setCompanyCode(e.target.value)} width={80} />
      </SimFieldRow>
      <div style={{ marginBottom: 12 }}>
        <button
          type="button"
          onClick={handleDisplay}
          style={{
            padding: '4px 16px',
            background: SAP_SIM.headerBg,
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            fontSize: 11,
            cursor: 'pointer',
          }}
        >
          Display
        </button>
      </div>
      {customer && (
        <>
          <div style={{ display: 'flex', gap: 4, marginBottom: 8, borderBottom: '1px solid #e5e7eb' }}>
            {['general', 'company', 'payment'].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                style={{
                  padding: '4px 10px',
                  background: tab === t ? SAP_SIM.headerBg : '#f0f2f5',
                  color: tab === t ? '#fff' : '#374151',
                  border: 'none',
                  borderRadius: 4,
                  fontSize: 11,
                  cursor: 'pointer',
                }}
              >
                {t === 'general' && 'General Data'}
                {t === 'company' && 'Company Code Data'}
                {t === 'payment' && 'Payment Transactions'}
              </button>
            ))}
          </div>
          <div style={{ fontSize: 11, padding: 8, border: '1px solid #e5e7eb', background: '#fafafa' }}>
            {tab === 'general' && (
              <>
                <div><strong>Name:</strong> {customer.name}</div>
                <div><strong>Address:</strong> {(customer.street || '') + (customer.street ? ', ' : '')}{customer.city}, {customer.country || 'IN — India'}</div>
                {customer.gst && <div><strong>GST No:</strong> {customer.gst}</div>}
                {customer.pan && <div><strong>PAN:</strong> {customer.pan}</div>}
              </>
            )}
            {tab === 'company' && (
              <>
                <div><strong>Credit limit:</strong> ₹{Number(customer.creditLimit || 0).toLocaleString()}</div>
                <div><strong>Payment terms:</strong> {customer.paymentTerms}</div>
                <div><strong>Dunning procedure:</strong> {customer.dunningProcedure || 'MA01'}</div>
              </>
            )}
            {tab === 'payment' && (
              <div style={{ color: '#6b7280' }}>No payment transactions in demo.</div>
            )}
          </div>
        </>
      )}
    </SimCard>
  );
}

// FB70 — Post Customer Invoice
function SimFB70({ state, setState }) {
  const [customer, setCustomer] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('2024-04-30');
  const [postingDate, setPostingDate] = useState('2024-04-30');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('INR');
  const [reference, setReference] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [lines, setLines] = useState([{ gl: '410000', amount: '' }]);

  const customers = state.customerMasters || [];

  const handlePost = () => {
    const amt = parseFloat(amount);
    if (!customer || isNaN(amt) || amt <= 0) {
      setState((prev) => ({ ...prev, status: { type: 'error', message: 'Enter customer and amount' } }));
      return;
    }
    const cust = customers.find((c) => c.code === customer || c.name === customer || c.searchTerm.toLowerCase().includes(customer.toLowerCase()));
    const docNo = '2000' + String(Math.floor(1000000 + Math.random() * 9000000));
    setState((prev) => ({
      ...prev,
      customerDocs: [
        ...(prev.customerDocs || []),
        {
          docNo,
          customer: cust ? cust.name : customer,
          customerCode: cust ? cust.code : customer,
          amount: amt,
          date: postingDate,
          open: true,
          reference: reference || docNo,
        },
      ],
      status: { type: 'success', message: `Document ${docNo} posted` },
    }));
  };

  return (
    <SimCard>
      <div style={{ fontWeight: 600, marginBottom: 8, color: SAP_SIM.headerBg }}>Post Customer Invoice (FB70)</div>
      <SimFieldRow label="Customer" required>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <SimInput
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            width={200}
            placeholder="Code or name"
          />
          <button
            type="button"
            onClick={() => setShowSearch(!showSearch)}
            style={{
              padding: '2px 6px',
              border: '1px solid #9ca3af',
              borderRadius: 2,
              fontSize: 10,
              background: '#f0f2f5',
              cursor: 'pointer',
            }}
          >
            F4
          </button>
        </div>
      </SimFieldRow>
      {showSearch && (
        <div style={{ marginBottom: 8, border: '1px solid #e5e7eb', padding: 8, background: '#fff', maxHeight: 120, overflow: 'auto' }}>
          {customers.map((c) => (
            <div
              key={c.code}
              onClick={() => { setCustomer(c.code); setShowSearch(false); }}
              style={{ padding: '2px 0', cursor: 'pointer', fontSize: 11 }}
            >
              {c.code} — {c.name}
            </div>
          ))}
        </div>
      )}
      <SimFieldRow label="Invoice Date">
        <SimInput value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} width={120} />
      </SimFieldRow>
      <SimFieldRow label="Posting Date">
        <SimInput value={postingDate} onChange={(e) => setPostingDate(e.target.value)} width={120} />
      </SimFieldRow>
      <SimFieldRow label="Amount" required>
        <SimInput value={amount} onChange={(e) => setAmount(e.target.value)} width={120} />
      </SimFieldRow>
      <SimFieldRow label="Currency">
        <SimInput value={currency} onChange={(e) => setCurrency(e.target.value)} width={60} />
      </SimFieldRow>
      <SimFieldRow label="Reference">
        <SimInput value={reference} onChange={(e) => setReference(e.target.value)} width={180} />
      </SimFieldRow>
      <div style={{ marginBottom: 6, fontSize: 11, fontWeight: 600, color: SAP_SIM.label }}>G/L line items</div>
      <SimTable
        columns={[
          { key: 'gl', label: 'G/L Account' },
          { key: 'amount', label: 'Amount', render: (r) => r.amount || amount || '—' },
        ]}
        rows={lines}
        getKey={(_, i) => String(i)}
      />
      <div style={{ marginTop: 8 }}>
        <span title="Like Sales Voucher in Tally — SAP auto-hits the debtor account" style={{ fontSize: 10, color: '#6b7280', marginRight: 8, borderBottom: '1px dotted #9ca3af', cursor: 'help' }}>CA Insight</span>
        <button
          type="button"
          onClick={handlePost}
          style={{
            padding: '4px 16px',
            background: SAP_SIM.headerBg,
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            fontSize: 11,
            cursor: 'pointer',
          }}
        >
          Post
        </button>
      </div>
    </SimCard>
  );
}

// F-28 — Post Incoming Payment
function SimF28({ state, setState }) {
  const [bankAccount, setBankAccount] = useState('HDFC-IN01');
  const [customer, setCustomer] = useState('');
  const [amount, setAmount] = useState('');
  const [valueDate, setValueDate] = useState('2024-04-30');
  const [showOpenItems, setShowOpenItems] = useState(false);
  const [selectedIds, setSelectedIds] = useState(new Set());

  const customers = state.customerMasters || [];
  const openInvoices = (state.customerDocs || []).filter((d) => d.open === true);
  const forCustomer = customer
    ? openInvoices.filter((d) => (d.customerCode && d.customerCode === customer) || (d.customer && d.customer.toLowerCase().includes(customer.toLowerCase())))
    : openInvoices;

  const toggleSelect = (docNo) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(docNo)) next.delete(docNo);
      else next.add(docNo);
      return next;
    });
  };

  const handlePost = () => {
    if (selectedIds.size === 0) {
      setState((prev) => ({ ...prev, status: { type: 'error', message: 'Select at least one invoice to clear' } }));
      return;
    }
    const payDoc = '20' + String(Math.floor(10000000 + Math.random() * 90000000)).slice(0, 8);
    setState((prev) => ({
      ...prev,
      customerDocs: (prev.customerDocs || []).map((d) =>
        selectedIds.has(d.docNo) ? { ...d, open: false } : d
      ),
      status: {
        type: 'success',
        message: `Payment document ${payDoc} posted. Invoices cleared.`,
      },
    }));
    setSelectedIds(new Set());
    setShowOpenItems(false);
  };

  return (
    <SimCard>
      <div style={{ fontWeight: 600, marginBottom: 8, color: SAP_SIM.headerBg }}>Post Incoming Payment (F-28)</div>
      <SimFieldRow label="Bank Account">
        <select
          value={bankAccount}
          onChange={(e) => setBankAccount(e.target.value)}
          style={{
            height: 22,
            border: `1px solid ${SAP_SIM.fieldBorder}`,
            borderRadius: 2,
            fontSize: 11,
            minWidth: 140,
            background: '#fff',
          }}
        >
          <option value="HDFC-IN01">HDFC-IN01</option>
          <option value="ICICI-IN01">ICICI-IN01</option>
          <option value="SBI-IN01">SBI-IN01</option>
        </select>
      </SimFieldRow>
      <SimFieldRow label="Customer" required>
        <SimInput value={customer} onChange={(e) => setCustomer(e.target.value)} width={180} placeholder="Code or name" />
      </SimFieldRow>
      <SimFieldRow label="Amount" required>
        <SimInput value={amount} onChange={(e) => setAmount(e.target.value)} width={120} />
      </SimFieldRow>
      <SimFieldRow label="Value Date">
        <SimInput value={valueDate} onChange={(e) => setValueDate(e.target.value)} width={120} />
      </SimFieldRow>
      <div style={{ marginBottom: 12 }}>
        <button
          type="button"
          onClick={() => setShowOpenItems(true)}
          style={{
            padding: '4px 12px',
            background: '#f0f2f5',
            border: '1px solid #9ca3af',
            borderRadius: 4,
            fontSize: 11,
            cursor: 'pointer',
          }}
        >
          Process Open Items
        </button>
      </div>
      {showOpenItems && (
        <>
          <SimTable
            columns={[
              { key: 'select', label: '', render: (r) => (
                <input
                  type="checkbox"
                  checked={selectedIds.has(r.docNo)}
                  onChange={() => toggleSelect(r.docNo)}
                />
              )},
              { key: 'docNo', label: 'Document' },
              { key: 'customer', label: 'Customer' },
              { key: 'amount', label: 'Amount', render: (r) => r.amount.toFixed(2) },
              { key: 'date', label: 'Date' },
            ]}
            rows={forCustomer}
            getKey={(r) => r.docNo}
          />
          <div style={{ marginTop: 8 }}>
            <button
              type="button"
              onClick={handlePost}
              style={{
                padding: '4px 16px',
                background: SAP_SIM.headerBg,
                color: '#fff',
                border: 'none',
                borderRadius: 4,
                fontSize: 11,
                cursor: 'pointer',
              }}
            >
              Post
            </button>
          </div>
        </>
      )}
    </SimCard>
  );
}

// S_ALR_87012284 — Balance Sheet / P&L Report
function SimS_ALR_87012284({ state }) {
  const [companyCode, setCompanyCode] = useState('IN01');
  const [fiscalYear, setFiscalYear] = useState('2024');
  const [periodFrom, setPeriodFrom] = useState('1');
  const [periodTo, setPeriodTo] = useState('12');
  const [executed, setExecuted] = useState(false);
  const [exportMsg, setExportMsg] = useState(null);

  const revenue = (state.customerDocs || []).reduce((a, d) => a + d.amount, 0);
  const expenses = (state.journalDocs || []).flatMap((d) => d.items || []).reduce((a, i) => (i.dc === 'D' ? a + i.amount : a), 0);
  const profit = revenue - expenses;
  const prevYearRevenue = revenue * 0.92;
  const prevYearExpenses = expenses * 0.95;
  const prevYearProfit = prevYearRevenue - prevYearExpenses;

  const handleExecute = () => setExecuted(true);
  const handleExport = () => {
    setExportMsg('Export to Excel completed successfully.');
    setTimeout(() => setExportMsg(null), 3000);
  };

  return (
    <SimCard>
      <div style={{ fontWeight: 600, marginBottom: 8, color: SAP_SIM.headerBg }}>Balance Sheet / P&amp;L (S_ALR_87012284)</div>
      <SimFieldRow label="Company Code">
        <SimInput value={companyCode} onChange={(e) => setCompanyCode(e.target.value)} width={80} />
      </SimFieldRow>
      <SimFieldRow label="Fiscal Year">
        <SimInput value={fiscalYear} onChange={(e) => setFiscalYear(e.target.value)} width={80} />
      </SimFieldRow>
      <SimFieldRow label="From Period">
        <SimInput value={periodFrom} onChange={(e) => setPeriodFrom(e.target.value)} width={60} />
      </SimFieldRow>
      <SimFieldRow label="To Period">
        <SimInput value={periodTo} onChange={(e) => setPeriodTo(e.target.value)} width={60} />
      </SimFieldRow>
      <div style={{ marginBottom: 12 }}>
        <button
          type="button"
          onClick={handleExecute}
          style={{
            padding: '4px 16px',
            background: SAP_SIM.headerBg,
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            fontSize: 11,
            cursor: 'pointer',
          }}
        >
          Execute
        </button>
      </div>
      {executed && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 12 }}>
            <div>
              <div style={{ background: SAP_SIM.headerBg, color: '#fff', padding: '4px 8px', marginBottom: 4, fontSize: 11 }}>Balance Sheet</div>
              <table style={{ width: '100%', fontSize: 11, borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f0f2f5' }}>
                    <th style={{ padding: '4px 6px', textAlign: 'left' }}>Item</th>
                    <th style={{ padding: '4px 6px', textAlign: 'right' }}>Current Year</th>
                    <th style={{ padding: '4px 6px', textAlign: 'right' }}>Previous Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style={{ padding: '4px 6px' }}>Assets</td><td style={{ textAlign: 'right', padding: '4px 6px' }}>₹{(revenue + 500000).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td><td style={{ textAlign: 'right', padding: '4px 6px' }}>₹{(prevYearRevenue + 450000).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td></tr>
                  <tr><td style={{ padding: '4px 6px' }}>Liabilities</td><td style={{ textAlign: 'right', padding: '4px 6px' }}>₹{(expenses + 200000).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td><td style={{ textAlign: 'right', padding: '4px 6px' }}>₹{(prevYearExpenses + 180000).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td></tr>
                  <tr><td style={{ padding: '4px 6px' }}>Equity</td><td style={{ textAlign: 'right', padding: '4px 6px' }}>₹{(profit + 300000).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td><td style={{ textAlign: 'right', padding: '4px 6px' }}>₹{(prevYearProfit + 270000).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td></tr>
                </tbody>
              </table>
            </div>
            <div>
              <div style={{ background: SAP_SIM.headerBg, color: '#fff', padding: '4px 8px', marginBottom: 4, fontSize: 11 }}>Profit &amp; Loss</div>
              <table style={{ width: '100%', fontSize: 11, borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f0f2f5' }}>
                    <th style={{ padding: '4px 6px', textAlign: 'left' }}>Item</th>
                    <th style={{ padding: '4px 6px', textAlign: 'right' }}>Current Year</th>
                    <th style={{ padding: '4px 6px', textAlign: 'right' }}>Previous Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style={{ padding: '4px 6px' }}>Revenue</td><td style={{ textAlign: 'right', padding: '4px 6px' }}>₹{revenue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td><td style={{ textAlign: 'right', padding: '4px 6px' }}>₹{prevYearRevenue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td></tr>
                  <tr><td style={{ padding: '4px 6px' }}>Expenses</td><td style={{ textAlign: 'right', padding: '4px 6px' }}>₹{expenses.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td><td style={{ textAlign: 'right', padding: '4px 6px' }}>₹{prevYearExpenses.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td></tr>
                  <tr><td style={{ padding: '4px 6px', fontWeight: 600 }}>Net Profit</td><td style={{ textAlign: 'right', padding: '4px 6px', fontWeight: 600 }}>₹{profit.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td><td style={{ textAlign: 'right', padding: '4px 6px', fontWeight: 600 }}>₹{prevYearProfit.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ marginTop: 8 }}>
            <button
              type="button"
              onClick={handleExport}
              style={{
                padding: '4px 12px',
                background: '#f0f2f5',
                border: '1px solid #9ca3af',
                borderRadius: 4,
                fontSize: 11,
                cursor: 'pointer',
              }}
            >
              Export to Excel
            </button>
            {exportMsg && <span style={{ marginLeft: 8, fontSize: 11, color: '#059669' }}>{exportMsg}</span>}
          </div>
        </>
      )}
    </SimCard>
  );
}

function SimFEBAN({ state, setState }) {
  const items = state.febanItems || [];
  const processed = items.filter((i) => i.status === 'Processed').length;
  const exceptions = items.filter((i) => i.status === 'Exception').length;
  const unprocessed = items.filter((i) => i.status === 'Unprocessed').length;

  const handleMatch = (id) => {
    setState((prev) => ({
      ...prev,
      febanItems: (prev.febanItems || []).map((it) =>
        it.id === id && it.status === 'Unprocessed' ? { ...it, status: 'Processed', action: '' } : it
      ),
      status: { type: 'success', message: 'Item matched and processed.' },
    }));
  };

  const handleManualAssign = (id) => {
    setState((prev) => ({
      ...prev,
      febanItems: (prev.febanItems || []).map((it) =>
        it.id === id && it.status === 'Exception' ? { ...it, status: 'Processed', action: '' } : it
      ),
      status: { type: 'success', message: 'Exception manually assigned and processed.' },
    }));
  };

  return (
    <SimCard>
      <div style={{ fontWeight: 600, marginBottom: 8, color: SAP_SIM.headerBg }}>Bank Statement Processing (FEBAN)</div>
      <div style={{ fontSize: 11, marginBottom: 8, padding: '6px 8px', background: '#f0f2f5', borderRadius: 4 }}>
        <strong>Summary:</strong> {processed} matched, {exceptions} exceptions, {unprocessed} unprocessed
      </div>
      <SimTable
        columns={[
          { key: 'date', label: 'Date' },
          { key: 'amount', label: 'Amount', render: (r) => r.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 }) },
          { key: 'description', label: 'Description' },
          { key: 'status', label: 'Status' },
          {
            key: 'action',
            label: 'Action',
            render: (r) =>
              r.status === 'Unprocessed' ? (
                <button type="button" onClick={() => handleMatch(r.id)} style={{ padding: '2px 8px', fontSize: 10, background: SAP_SIM.headerBg, color: '#fff', border: 'none', borderRadius: 3, cursor: 'pointer' }}>Match</button>
              ) : r.status === 'Exception' ? (
                <button type="button" onClick={() => handleManualAssign(r.id)} style={{ padding: '2px 8px', fontSize: 10, background: '#6b7280', color: '#fff', border: 'none', borderRadius: 3, cursor: 'pointer' }}>Manual assign</button>
              ) : (
                ''
              ),
          },
        ]}
        rows={items}
        getKey={(r) => r.id}
      />
    </SimCard>
  );
}

function SimOB52({ state }) {
  return (
    <SimCard>
      <div style={{ fontWeight: 600, marginBottom: 8 }}>Posting Periods (OB52)</div>
      <div style={{ fontSize: 11 }}>Current open period: {state.periods.current} / {state.periods.year}</div>
    </SimCard>
  );
}

function SimAFAB({ state, setState }) {
  const assets = state.assets || [];
  const periodDepreciation = Math.round(assets.reduce((a, r) => a + (r.nbv || 0) * 0.1, 0));
  const postRun = () => {
    setState((prev) => ({
      ...prev,
      depreciationTotal: (prev.depreciationTotal || 0) + periodDepreciation,
      status: { type: 'success', message: `Depreciation run posted. ₹${periodDepreciation.toLocaleString('en-IN')} added to depreciation.` },
    }));
  };
  return (
    <SimCard>
      <div style={{ fontWeight: 600, marginBottom: 8 }}>Depreciation Run (AFAB)</div>
      <SimTable
        columns={[
          { key: 'id', label: 'Asset' },
          { key: 'class', label: 'Class' },
          { key: 'nbv', label: 'NBV', render: (r) => r.nbv.toFixed(2) },
        ]}
        rows={assets}
        getKey={(r) => r.id}
      />
      <div style={{ marginTop: 8, fontSize: 11 }}>Current period depreciation (10% of NBV): ₹{periodDepreciation.toLocaleString('en-IN')}</div>
      <button type="button" onClick={postRun} style={{ marginTop: 8, padding: '4px 12px', background: SAP_SIM.headerBg, color: '#fff', border: 'none', borderRadius: 4, fontSize: 11, cursor: 'pointer' }}>Post depreciation run</button>
    </SimCard>
  );
}

function SimF16({ state }) {
  return (
    <SimCard>
      <div style={{ fontWeight: 600, marginBottom: 8 }}>Carry Forward Balances (F.16)</div>
      <div style={{ fontSize: 11 }}>
        Last simulated carry forward from FY {state.periods.year} would appear here.
      </div>
    </SimCard>
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
  const [simState, setSimState] = useState(() => createInitialSimState());

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
    case 'simulator':
      return (
        <SimulatorShell
          state={simState}
          setState={setSimState}
        />
      );
    default:
      return <HomePage navigate={navigate} completedLessons={completedLessons} />;
  }
}
