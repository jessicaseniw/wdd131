/* ============ FORM PAGE ============ */

/* Product list */
const products = [
    { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
    { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
];

/* Populate product dropdown */
const select = document.querySelector("#product");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});

/* Accessibility: Audio instructions */
const audioButton = document.querySelector("#audioHelp");

if (audioButton && "speechSynthesis" in window) {
    audioButton.addEventListener("click", () => {
        const message = new SpeechSynthesisUtterance(
            "This form allows you to submit a product review. " +
            "All fields are required except the written review. " +
            "Select a product, choose a star rating, select useful features, " +
            "enter your name, and submit the form."
        );
        message.lang = "en-US";
        window.speechSynthesis.speak(message);

        audioButton.setAttribute("aria-pressed", "true");
        setTimeout(() => audioButton.setAttribute("aria-pressed", "false"), 5000);
    });
}
