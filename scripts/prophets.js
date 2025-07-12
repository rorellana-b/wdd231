const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        //console.table(data);
        displayProphets(data.prophets);
    } catch (error) {
        console.error("Error fetching prophet data:", error);
    }
}
getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        // Create a section and add the class "card"
        const card = document.createElement("section");
        card.classList.add("card");

        const h2 = document.createElement("h2");
        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        h2.classList.add("card-title");
        card.appendChild(h2);

        const birthDate = document.createElement("p");
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthDate.classList.add("birth-date");
        card.appendChild(birthDate);

        const birthPlace = document.createElement("p");
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
        birthPlace.classList.add("bith-place");
        card.appendChild(birthPlace);
        cards.appendChild(card);

        const image = document.createElement("img");
        image.setAttribute("src", prophet.imageurl);
        image.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        image.setAttribute("width", "340");
        image.setAttribute("height", "340");
        image.setAttribute("loading", "lazy");
        card.appendChild(image);





    });
}