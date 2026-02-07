// ========== USER REVIEW COUNT (localStorage) ==========
let userReviewCount = Number(localStorage.getItem("userReviewCount")) || 0;
userReviewCount++;
localStorage.setItem("userReviewCount", userReviewCount);

const counter = document.querySelector("#reviewCount");
if (counter) {
    counter.textContent = userReviewCount;
}

// ========== GET USER NAME FROM URL ==========
const params = new URLSearchParams(window.location.search);
const userName = params.get("username");

// ========== CONFIRMATION MESSAGE ==========
const message = document.querySelector("#confirmationMessage");

if (message) {
    message.textContent = userName
        ? `${userName}, your product review has been successfully submitted.`
        : "Your product review has been successfully submitted.";
}

/* Footer dates */
function updateFooterDates() {
    const yearEl = document.getElementById("year");
    const lastModEl = document.getElementById("lastModified");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    if (lastModEl) lastModEl.textContent = document.lastModified;
}
document.addEventListener("DOMContentLoaded", updateFooterDates);
