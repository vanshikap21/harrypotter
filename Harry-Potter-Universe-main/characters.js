async function fetchCharacters() {
  const res = await fetch("https://hp-api.onrender.com/api/characters");
  const chars = await res.json();
  const container = document.getElementById("charList");
  container.innerHTML = "";

  chars.slice(0, 50).forEach(c => {
    const div = document.createElement("div");
    div.className = "info-card character-card";

    div.innerHTML = `
      <div class="card-front">
        <img src="${c.image || 'https://i.ibb.co/zNXsMy9/harry-placeholder.png'}" alt="${c.name}" class="char-img" />
        <h3>${c.name}</h3>
        <p><strong>House:</strong> ${c.house || "N/A"}</p>
      </div>
      <div class="card-back">
        <h3>${c.name}</h3>
        <p><strong>Ancestry:</strong> ${c.ancestry || "Unknown"}</p>
        <p><strong>Patronus:</strong> ${c.patronus || "None"}</p>
        <p><strong>Wand:</strong> ${c.wand.wood || ""} ${c.wand.core || ""}</p>
      </div>
    `;

    container.appendChild(div);
  });
}

fetchCharacters();

