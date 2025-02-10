const trafficForm = document.getElementById('traffic-form');
const greenLightTimePara = document.getElementById('green-light-time');

trafficForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const density = document.getElementById('density').value;

    const greenLightTime = trafficLightControl(density);
    greenLightTimePara.textContent = `Green Light Time: ${greenLightTime} seconds`;
});

function trafficLightControl(density) {
    if (density === "Heavy Traffic") {
        return 60;
    } else if (density === "Moderate Traffic") {
        return 40;
    } else {
        return 20;
    }
}
