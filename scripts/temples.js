// ------------------------------
// FOOTER DATES
// ------------------------------
const yearSpan = document.querySelector("#year");
const lastModifiedSpan = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;

// ------------------------------
// HAMBURGER MENU
// ------------------------------
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    // Toggle icon
    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});
