// ============================================
// FOOTER DATE INFORMATION
// Displays the current year and last modified date
// ============================================
const yearSpan = document.querySelector("#year");
const lastModifiedSpan = document.querySelector("#lastModified");

// Set current year
yearSpan.textContent = new Date().getFullYear();

// Set last modified date
lastModifiedSpan.textContent = document.lastModified;


// ============================================
// HAMBURGER MENU FUNCTIONALITY
// Toggles navigation visibility on small screens
// ============================================
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    // Toggle navigation menu visibility
    navigation.classList.toggle("open");

    // Toggle hamburger and close (X) icon
    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});
