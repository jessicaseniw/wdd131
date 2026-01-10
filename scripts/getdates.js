// Get the current year
const yearSpan = document.querySelector("#year");
yearSpan.textContent = new Date().getFullYear();

// Get the last modified date
const lastModifiedSpan = document.querySelector("#lastModified");
lastModifiedSpan.textContent = document.lastModified;
