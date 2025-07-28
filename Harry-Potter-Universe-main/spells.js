let allSpells = [];

async function fetchSpells() {
  const res = await fetch("https://hp-api.onrender.com/api/spells");
  const spells = await res.json();
  allSpells = spells;
  populateTypeDropdown(spells);
  displaySpells(spells);

  document.getElementById("searchInput").addEventListener("input", filterSpells);
  document.getElementById("typeFilter").addEventListener("change", filterSpells);
}

function populateTypeDropdown(spells) {
  const types = new Set();
  spells.forEach(s => s.type && types.add(s.type));
  types.forEach(type => {
    const opt = document.createElement("option");
    opt.value = type;
    opt.textContent = type;
    document.getElementById("typeFilter").appendChild(opt);
  });
}

function filterSpells() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const selected = document.getElementById("typeFilter").value;
  const filtered = allSpells.filter(spell =>
    spell.name.toLowerCase().includes(keyword) &&
    (selected === "All" || spell.type === selected)
  );
  displaySpells(filtered);
}

function displaySpells(spells) {
  const container = document.getElementById("spellList");
  container.innerHTML = "";
  spells.forEach(spell => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front"><h3>${spell.name}</h3><p>${spell.type || "Unknown"}</p></div>
        <div class="card-back"><p>${spell.description || "No description."}</p><small>Click for more</small></div>
      </div>
    `;
    card.addEventListener("click", () => {
      modalName.textContent = spell.name;
      modalType.textContent = spell.type || "Unknown";
      modalDesc.textContent = spell.description || "No description.";
      modal.style.display = "flex";
    });
    container.appendChild(card);
  });
}

fetchSpells();
