const ticketForm = document.getElementById('ticket-form');
const ticketPricePara = document.getElementById('ticket-price');

ticketForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const age = parseInt(document.getElementById('age').value);
    const showTime = document.getElementById('show-time').value;

    const ticketPrice = calculateTicketPrice(age, showTime);
    ticketPricePara.textContent = `Ticket Price: $${ticketPrice}`;
});

function calculateTicketPrice(age, showTime) {
    let basePrice = 12;
    let discount = 0;
    if (showTime === "Morning") {
        discount = 0.2;
    }
    if (age > 60) {
        discount = Math.max(discount, 0.3);
    }
    if (age < 12) {
        discount = Math.max(discount, 0.4);
    }
    return basePrice * (1 - discount);
}
