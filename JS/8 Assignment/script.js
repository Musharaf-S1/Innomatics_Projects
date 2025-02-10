let accountNumber, balance;

const accountForm = document.getElementById('account-form');
const transactionForm = document.getElementById('transaction-form');
const accountStatusPara = document.getElementById('account-status');

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    accountNumber = parseInt(document.getElementById('account-number').value);
    balance = parseFloat(document.getElementById('initial-balance').value);

    accountForm.style.display = 'none';
    transactionForm.style.display = 'block';
    accountStatusPara.textContent = `Account Number: ${accountNumber}, Balance: $${balance}`;
});

transactionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const transactionType = document.getElementById('transaction-type').value;
    const transactionAmount = parseFloat(document.getElementById('transaction-amount').value);

    if (transactionType === "Deposit") {
        balance += transactionAmount;
    } else {
        if (balance >= transactionAmount) {
            balance -= transactionAmount;
        } else {
            alert("Insufficient balance");
        }
    }

    accountStatusPara.textContent = `Account Number: ${accountNumber}, Balance: $${balance}`;
});
