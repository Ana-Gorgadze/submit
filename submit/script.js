const rating_cards = document.querySelectorAll(".ratings span");
const submit_btn = document.querySelector(".submit_btn");
const rate_point = document.getElementById("rate");
const rating_section = document.querySelector(".rating_section"); // Fixed typo
const thank_section = document.querySelector(".thank_section");

let rate = null;

rating_cards.forEach((rating_card) => {
    rating_card.addEventListener("click", (e) => {
        const active = document.querySelector(".checked");
        if (active) {
            active.classList.remove("checked");
        }
        const card = e.target;
        card.classList.add("checked");
        rate = card.textContent; // Use textContent instead of innerText
    });
});

submit_btn.addEventListener("click", () => {
    if (rate) {
        rate_point.textContent = rate; // Use textContent instead of innerText
        if (rating_section && thank_section) { // Check if elements exist
            rating_section.classList.add("hidden");
            thank_section.classList.remove("hidden");
        }
    }
});
