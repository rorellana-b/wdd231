const file = 'data/members.json';

const businessContainer = document.querySelector('.business-container');

async function fetchBusinessData() {
    try {
        const response = await fetch(file);
        const data = await response.json();
        //console.table(data);
        displayBusinesses(data);
    } catch (error) {
        console.error('Error fetching business data:', error);
    }
}
fetchBusinessData();

const displayBusinesses = (businesses) => {
    businesses.forEach(business => {
        // Create a section and add the class "card"
        const card = document.createElement('section');
        card.classList.add('card');

        const h2 = document.createElement('h2');
        h2.textContent = business.name;
        h2.classList.add('card-title');
        card.appendChild(h2);

        const address = document.createElement('p');
        address.textContent = `Address: ${business.address}`;
        address.classList.add('address');
        card.appendChild(address);

        const phone = document.createElement('p');
        phone.textContent = `Phone: ${business.phone}`;
        phone.classList.add('phone');
        card.appendChild(phone);

        const image = document.createElement('img');
        image.setAttribute('src', business.iconFile);
        image.setAttribute('alt', `Image of ${business.name}`);
        image.setAttribute('width', '340');
        image.setAttribute('height', '340');
        image.setAttribute('loading', 'lazy');
        card.appendChild(image);

        const score = document.createElement('p');
        score.textContent = `Membership: ${business.membershipLevel}`;
        score.classList.add('rating');
        card.appendChild(score);

        businessContainer.appendChild(card);
    });
}

const gridbutton = document.querySelector("#cardViewBtn");
const listbutton = document.querySelector("#listViewBtn");
const container = document.querySelector(".business-container");

gridbutton.addEventListener("click", () => {
    container.classList.add("grid-view");
    container.classList.remove("business-container");
});

listbutton.addEventListener("click", () => {
    container.classList.add("business-container");
    container.classList.remove("grid-view");
});
