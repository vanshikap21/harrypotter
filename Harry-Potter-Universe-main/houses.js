const HOUSES = [
  {
    name: "Gryffindor",
    founder: "Godric Gryffindor",
    traits: ["courage", "bravery", "nerve", "chivalry"]
  },
  {
    name: "Slytherin",
    founder: "Salazar Slytherin",
    traits: ["ambition", "cunning", "resourcefulness", "leadership"]
  },
  {
    name: "Hufflepuff",
    founder: "Helga Hufflepuff",
    traits: ["hard work", "patience", "loyalty", "fair play"]
  },
  {
    name: "Ravenclaw",
    founder: "Rowena Ravenclaw",
    traits: ["intelligence", "creativity", "learning", "wisdom"]
  }
];

// Houses
async function fetchHouses() {
  const houseList = document.getElementById("houseList");
  houseList.innerHTML = "";

  HOUSES.forEach(house => {
  const houseName = house.name.toLowerCase();
  const div = document.createElement("div");
  div.className = "info-card house-card";

  let bgColor = "";
  switch (houseName) {
    case "gryffindor":
      bgColor = "rgba(179, 0, 0, 0.5)";
      break;
    case "slytherin":
      bgColor = "rgba(0, 122, 51, 0.5)"; 
      break;
    case "ravenclaw":
      bgColor = "rgba(41, 74, 158, 0.5)"; 
      break;
    case "hufflepuff":
      bgColor = "rgba(212, 175, 55, 0.5)"; 
      break;
    default:
      bgColor = "rgba(68, 68, 68, 0.5)";
  }

  div.style.background = bgColor;
  div.style.backdropFilter = "blur(10px)";
  div.style.webkitBackdropFilter = "blur(10px)";
  div.style.border = "1px solid rgba(255, 255, 255, 0.2)";

  div.innerHTML = `
    <img class="house-img" src="images/${houseName}.png" alt="${house.name}">
    <h3>${house.name}</h3>
    <p><strong>Founder:</strong> ${house.founder}</p>
    <p><strong>Traits:</strong> ${house.traits.join(", ")}</p>
  `;

  houseList.appendChild(div);
});

}
fetchHouses();