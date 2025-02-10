const electricityForm = document.getElementById('electricity-form');
const electricityBillPara = document.getElementById('electricity-bill');

electricityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const unitsConsumed = parseFloat(document.getElementById('units-consumed').value);
    const tariff = document.getElementById('tariff').value;

    const electricityBill = calculateElectricityBill(unitsConsumed, tariff);
    electricityBillPara.textContent = `Electricity Bill: $${electricityBill}`;
});

function calculateElectricityBill(unitsConsumed, tariff) {
    let rate = 0;
    if (tariff === "Residential") {
        rate = 0.12;
    } else if (tariff === "Commercial") {
        rate = 0.15;
    } else {
        rate = 0.20;
    }
    return unitsConsumed * rate;
}
