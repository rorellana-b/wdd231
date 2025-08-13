const file = 'data/recipes.json';
const detailDialog = document.getElementById('open-details');

async function fetchItems() {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error("Failed to load JSON");

        const data = await response.json();
        displayFoodItems(data);

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayFoodItems(foodList) {
  const container = document.querySelector(".res-grid");
  container.innerHTML = ""; // Limpiar contenido previo

  foodList.forEach(food => {
    const card = document.createElement("section");
    card.classList.add("discover-car");

    card.innerHTML = `
      <h2>${food.foodName}</h2>
      <figure><img src="${food.imageUrl}" alt="${food.foodName} image" loading="lazy"></figure>
      <p><strong>Kind:</strong> ${food.kind}</p>
      <p><strong>Preparation:</strong> ${food.preparation}</p>
      <button class="btn">Learn More</button>
    `;
    const button = card.querySelector(".btn");
        button.addEventListener("click", () => {
            displayFoodDetails(food);
        });


    container.appendChild(card);
  });   
}

function displayFoodDetails(item) {
    detailDialog.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${item.foodName}</h2>
        <figure><img src="${item.imageUrl}" alt="${item.foodName}" style="max-width: 100%;"></figure>
        <p>${item.preparation}</p>
        <p>${item.description}</p>
    `;

    detailDialog.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
        detailDialog.close();
    });
}


fetchItems();


// document.querySelector(".res-grid").innerHTML = "";
// foodList.forEach(food => {
//     let card = document.createElement('section');
//     let name = document.createElement("h3");
//     let kind = document.createElement("p");
//     let btn = document.createElement("button");
    
//     let preparation = document.createElement("p");
//     let description = document.createElement("p");
//     let img = document.createElement("img");
//     name.textContent = food.foodName;
//     kind.innerHTML = `<span class = "Label">Kind:</span> ${food.kind}`;
//     preparation.innerHTML = `<span class = "Label">Preparation:</span> ${food.preparation}`;
//     img.setAttribute("src", food.imageUrl);
//     img.setAttribute("alt", `${food.name} image`);
//     img.setAttribute("loading", "lazy");


//     card.appendChild(name);
//     card.appendChild(kind);
//     card.appendChild(preparation);
//     card.appendChild(description);
//     card.appendChild(img);
//     btn.textContent = "Read More";
//     btn.classList.add("btn");
//     btn.addEventListener("click", () => {
//         alert(`You clicked on ${food.foodName}`);
//     });
//     card.appendChild(btn);

//     document.querySelector(".res-grid").appendChild(card);
// });
//<p>${food.description}</p>