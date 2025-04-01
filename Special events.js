document.addEventListener("DOMContentLoaded", () => {
    const eventCards = document.querySelectorAll(".event-item");
    
    eventCards.forEach(card => {
        card.addEventListener("click", () => {
            const eventTitle = card.querySelector("h3").innerText;
            alert(`Interested in "${eventTitle}"? Contact us for reservations!`);
        });
    });
});
