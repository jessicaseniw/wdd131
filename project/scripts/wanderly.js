// =====================================================
// Wanderly - Main JavaScript File
// =====================================================

const ITEMS_LIMIT = 10;

/* ---------------- TRANSLATIONS ---------------- */
const translations = {
    en: {
        searchTitle: 'Find Your Next Trip',
        destinations: 'Available Destinations',
        accommodations: 'Accommodations',
        myTrips: 'My Trips',
        addTrip: 'Add to Trip',
        perNight: 'per night',
        noTrips: 'No trips planned yet.',
        showMore: 'Show more',
        showLess: 'Show less',
        national: 'National',
        international: 'International',
        nationalAcc: 'National Accommodations',
        internationalAcc: 'International Accommodations'
    },
    pt: {
        searchTitle: 'Encontre sua próxima viagem',
        destinations: 'Destinos Disponíveis',
        accommodations: 'Acomodações',
        myTrips: 'Minhas Viagens',
        addTrip: 'Adicionar à viagem',
        perNight: 'por noite',
        noTrips: 'Nenhuma viagem planejada.',
        showMore: 'Mostrar mais',
        showLess: 'Mostrar menos',
        national: 'Nacionais',
        international: 'Internacionais',
        nationalAcc: 'Acomodações Nacionais',
        internationalAcc: 'Acomodações Internacionais'
    }
};

let currentLanguage = localStorage.getItem('language') || 'en';

/* ---------------- CURRENCY ---------------- */
const currencyRates = {
    USD: { symbol: '$', rate: 1 },
    BRL: { symbol: 'R$', rate: 5 },
    EUR: { symbol: '€', rate: 0.9 }
};

let currentCurrency = localStorage.getItem('currency') || 'USD';

function formatPrice(price) {
    const { symbol, rate } = currencyRates[currentCurrency];
    return `${symbol}${(price * rate).toFixed(0)}`;
}

/* ---------------- DATA ---------------- */
const destinations = {
    national: [
        { name: 'Rio de Janeiro / RJ', image: 'images/rio-de-janeiro.avif' },
        { name: 'São Paulo / SP', image: 'images/sao-paulo.avif' },
        { name: 'Salvador / BA', image: 'images/salvador.avif' },
        { name: 'Florianópolis / SC', image: 'images/florianopolis.avif' },
        { name: 'Gramado / RS', image: 'images/gramado.avif' },
        { name: 'Foz do Iguaçu / PR', image: 'images/foz-do-iguacu.avif' },
        { name: 'Natal / RN', image: 'images/natal.avif' },
        { name: 'Recife / PE', image: 'images/recife.avif' },
        { name: 'Fortaleza / CE', image: 'images/fortaleza.avif' },
        { name: 'Maceió / AL', image: 'images/maceio.avif' },
        { name: 'Arraial do Cabo / RJ', image: 'images/arraial-do-cabo.avif' },
        { name: 'Búzios / RJ', image: 'images/buzios.avif' },
        { name: 'Porto Seguro / BA', image: 'images/porto-seguro.avif' },
        { name: 'Jericoacoara / CE', image: 'images/jericoacoara.avif' },
        { name: 'Lençóis Maranhenses / MA', image: 'images/lencois-maranhenseis.avif' },
        { name: 'Bonito / MS', image: 'images/bonito.avif' },
        { name: 'Campos do Jordão / SP', image: 'images/campos-do-jordao.avif' },
        { name: 'Ilhabela / SP', image: 'images/ilhabela.avif' },
        { name: 'Ubatuba / SP', image: 'images/ubatuba.avif' },
        { name: 'Vitória / ES', image: 'images/vitoria.avif' }
    ],
    international: [
        { name: 'Paris, France', image: 'images/paris.avif' },
        { name: 'London, England', image: 'images/london.avif' },
        { name: 'Rome, Italy', image: 'images/rome.avif' },
        { name: 'Barcelona, Spain', image: 'images/barcelona.avif' },
        { name: 'Lisbon, Portugal', image: 'images/lisbon.avif' },
        { name: 'New York, USA', image: 'images/new-york.avif' },
        { name: 'Los Angeles, USA', image: 'images/los-angeles.avif' },
        { name: 'Miami, USA', image: 'images/miami.avif' },
        { name: 'Tokyo, Japan', image: 'images/tokyo.avif' },
        { name: 'Kyoto, Japan', image: 'images/kyoto.avif' },
        { name: 'Bangkok, Thailand', image: 'images/bangkok.avif' },
        { name: 'Sydney, Australia', image: 'images/sydney.avif' },
        { name: 'Melbourne, Australia', image: 'images/melbourne.avif' },
        { name: 'Toronto, Canada', image: 'images/toronto.avif' },
        { name: 'Vancouver, Canada', image: 'images/vancouver.avif' },
        { name: 'Buenos Aires, Argentina', image: 'images/buenos-aires.avif' },
        { name: 'Santiago, Chile', image: 'images/santiago.avif' },
        { name: 'Cancún, Mexico', image: 'images/cancun.avif' },
        { name: 'Dubai, UAE', image: 'images/dubai.avif' },
        { name: 'Cape Town, South Africa', image: 'images/cape-town.avif' }
    ]
};

const accommodations = [
    { id: 1, name: 'Beach Resort', city: 'Rio de Janeiro', price: 120, image: 'images/hotel-rio.avif' },
    { id: 2, name: 'City Hotel', city: 'São Paulo', price: 90, image: 'images/hotel-sp.avif' },
    { id: 3, name: 'Mountain Lodge', city: 'Gramado', price: 150, image: 'images/hotel-gramado.avif' },
    { id: 4, name: 'Ocean View Hotel', city: 'Florianópolis', price: 110, image: 'images/hotel-floripa.avif' },
    { id: 5, name: 'Historic Inn', city: 'Salvador', price: 95, image: 'images/hotel-salvador.avif' },
    { id: 6, name: 'Downtown Apartment', city: 'New York, USA', price: 180, image: 'images/hotel-ny.avif' },
    { id: 7, name: 'Boutique Hotel', city: 'Paris, France', price: 200, image: 'images/hotel-paris.avif' },
    { id: 8, name: 'City Center Hostel', city: 'Barcelona, Spain', price: 80, image: 'images/hotel-barcelona.avif' },
    { id: 9, name: 'Luxury Resort', city: 'Cancún, Mexico', price: 220, image: 'images/hotel-cancun.avif' },
    { id: 10, name: 'Urban Stay', city: 'Tokyo, Japan', price: 170, image: 'images/hotel-tokyo.avif' }
];

/* ---------------- DOM ELEMENTS ---------------- */
const destinationsSection = document.querySelector('#destinations');
const listingsSection = document.querySelector('#listings');

/* ---------------- HELPERS ---------------- */
function renderShowMoreGrid(list, renderCard) {
    let showAll = false;

    const grid = document.createElement('div');
    grid.classList.add('grid');

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('show-more-container');

    const button = document.createElement('button');
    button.classList.add('show-more-btn');

    function update() {
        grid.innerHTML = '';
        const items = showAll ? list : list.slice(0, ITEMS_LIMIT);
        items.forEach(item => grid.appendChild(renderCard(item)));
        button.textContent = showAll ? translations[currentLanguage].showLess : translations[currentLanguage].showMore;
    }

    button.addEventListener('click', () => {
        showAll = !showAll;
        update();
    });

    update();

    return { grid, button, buttonContainer };
}

/* ---------------- RENDER DESTINATIONS ---------------- */
function renderDestinations() {
    destinationsSection.innerHTML = `<h2>${translations[currentLanguage].destinations}</h2>`;

    ['national', 'international'].forEach(type => {
        const title = document.createElement('h3');
        title.textContent = translations[currentLanguage][type];
        destinationsSection.appendChild(title);

        const { grid, button, buttonContainer } = renderShowMoreGrid(
            destinations[type],
            dest => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `<img src="${dest.image}" alt="${dest.name}"><p>${dest.name}</p>`;
                return card;
            }
        );

        destinationsSection.appendChild(grid);

        if (destinations[type].length > ITEMS_LIMIT) {
            buttonContainer.appendChild(button);
            destinationsSection.appendChild(buttonContainer);
        }
    });
}

/* ---------------- RENDER ACCOMMODATIONS ---------------- */
function renderListings() {
    listingsSection.innerHTML = `<h2>${translations[currentLanguage].accommodations}</h2>`;

    const groups = [
        { title: translations[currentLanguage].nationalAcc, data: accommodations.filter(a => !a.city.includes(',')) },
        { title: translations[currentLanguage].internationalAcc, data: accommodations.filter(a => a.city.includes(',')) }
    ];

    groups.forEach(group => {
        const h3 = document.createElement('h3');
        h3.textContent = group.title;
        listingsSection.appendChild(h3);

        const { grid, button, buttonContainer } = renderShowMoreGrid(
            group.data,
            item => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.city}</p>
          <p>${formatPrice(item.price)} ${translations[currentLanguage].perNight}</p>
          <button>${translations[currentLanguage].addTrip}</button>
        `;
                return card;
            }
        );

        listingsSection.appendChild(grid);

        if (group.data.length > ITEMS_LIMIT) {
            buttonContainer.appendChild(button);
            listingsSection.appendChild(buttonContainer);
        }
    });
}

/* ---------------- LANGUAGE SWITCH ---------------- */
const languageToggle = document.querySelector('#languageToggle');
const currentFlag = document.querySelector('#currentFlag');
const currentLang = document.querySelector('#currentLang');

const flags = {
    en: { text: 'EN', image: 'images/flag-uk.svg' },
    pt: { text: 'PT', image: 'images/flag-br.svg' }
};

// Inicializa UI
currentFlag.src = flags[currentLanguage].image;
currentLang.textContent = flags[currentLanguage].text;

// Abrir / fechar dropdown
languageToggle.addEventListener('click', () => {
    languageToggle.classList.toggle('open');
});

// Seleção de idioma
document.querySelectorAll('.language-dropdown li').forEach(item => {
    item.addEventListener('click', () => {
        const selectedLang = item.dataset.lang;
        currentLanguage = selectedLang;
        localStorage.setItem('language', currentLanguage);

        currentFlag.src = flags[selectedLang].image;
        currentLang.textContent = flags[selectedLang].text;

        languageToggle.classList.remove('open');

        renderDestinations();
        renderListings();
    });
});

// Fechar dropdown ao clicar fora
document.addEventListener('click', e => {
    if (!languageToggle.contains(e.target)) {
        languageToggle.classList.remove('open');
    }
});

// Fallback para bandeira
currentFlag.onerror = () => {
    currentFlag.src = 'images/flag-default.png';
};

/* ---------------- INIT ---------------- */
renderDestinations();
renderListings();
