const sections = ['spells', 'characters', 'houses'];
const modal = document.getElementById("modal");
const modalName = document.getElementById("modalName");
const modalType = document.getElementById("modalType");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");

function showSection(id) {
  sections.forEach(sec => document.getElementById(sec).classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

closeModal.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
