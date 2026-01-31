// ---------- FOOTER ----------
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// ---------- MENU ----------
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.textContent = isOpen ? "✖" : "☰";
    menuButton.setAttribute("aria-expanded", isOpen);
});

// ---------- TEMPLE DATA ----------
const temples = [
    {
        templeName: "Pittsburgh Pennsylvania",
        location: "Cranberry Township, United States",
        dedicated: "2024-09-15",
        area: 32240,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/pittsburgh-pennsylvania-temple/pittsburgh-pennsylvania-temple-60448-main.jpg"
    },
    {
        templeName: "Saratoga Springs Utah",
        location: "Saratoga Springs, United States",
        dedicated: "2023-08-13",
        area: 97836,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/saratoga-springs-utah-temple/saratoga-springs-utah-temple-32872-main.jpg"
    },
    {
        templeName: "Porto Alegre Brazil",
        location: "Porto Alegre, Brazil",
        dedicated: "2000-12-17",
        area: 13325,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/porto-alegre-brazil-temple/porto-alegre-brazil-temple-60459-main.jpg"
    },
    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "2004-02-22",
        area: 59246,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888-05-21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020-05-02",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    }
];

// ---------- DISPLAY ----------
const container = document.querySelector("#temples");

function displayTemples(list) {
    container.innerHTML = "";

    list.forEach((t, index) => {
        const card = document.createElement("figure");
        card.classList.add("temple-card");

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img 
                        src="${t.imageUrl}"
                        alt="${t.templeName}"
                        ${index === 0 ? "" : 'loading="lazy"'}
                        width="400"
                        height="250">
                </div>
            </div>
            <figcaption>${t.templeName}</figcaption>
        `;

        container.appendChild(card);
    });
}

// ---------- FILTERS ----------
document.querySelector("#home").addEventListener("click", e => {
    e.preventDefault();
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", e => {
    e.preventDefault();
    displayTemples(
        temples.filter(t => new Date(t.dedicated).getFullYear() < 1900)
    );
});

document.querySelector("#new").addEventListener("click", e => {
    e.preventDefault();
    displayTemples(
        temples.filter(t => new Date(t.dedicated).getFullYear() > 2000)
    );
});

document.querySelector("#large").addEventListener("click", e => {
    e.preventDefault();
    displayTemples(
        temples.filter(t => t.area > 90000)
    );
});

document.querySelector("#small").addEventListener("click", e => {
    e.preventDefault();
    displayTemples(
        temples.filter(t => t.area < 10000)
    );
});

// ---------- INITIAL ----------
displayTemples(temples);
