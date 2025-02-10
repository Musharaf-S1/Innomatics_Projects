function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) {
      return "Incorrect PIN";
    }
    if (amount > balance) {
      return "Insufficient Funds";
    }
    if (amount % 100 !== 0) {
      return "Enter amount in multiples of 100";
    }
    balance -= amount;
    return `Withdrawal successful. Remaining balance: ${balance}`;
  }
  
  function processTransaction() {
  
    const balance = 5000;
    const pin = 1234;
    
  
   const enteredPin = document.getElementById('pin').value;
    const amount = parseInt(document.getElementById('amount').value);
  
    if (!enteredPin || isNaN(amount) || amount <= 0) {
      document.getElementById('message').innerHTML = "Please enter valid PIN and amount.";
      return;
    }
  
    const result = atmWithdrawal(balance, amount, pin, enteredPin);
    document.getElementById('message').innerHTML = result;
  }
  