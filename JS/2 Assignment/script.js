const orderForm = document.getElementById('order-form');
const finalAmountPara = document.getElementById('final-amount');

orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const orderAmount = parseFloat(document.getElementById('order-amount').value);

    const finalAmount = calculateFinalAmount(orderAmount);
    finalAmountPara.textContent = `Final Amount: $${finalAmount}`;
});

function calculateFinalAmount(orderAmount) {
    let discount = 0;
    if (orderAmount >= 1000) {
        discount = 0.2;
    } else if (orderAmount >= 500) {
        discount = 0.1;
    }
    let shippingCharge = orderAmount >= 50 ? 0 : 10;
    return orderAmount * (1 - discount) + shippingCharge;
}
