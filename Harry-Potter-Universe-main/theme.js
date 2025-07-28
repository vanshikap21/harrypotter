
function toggleTheme() {
  const body = document.body;
  const overlay = document.getElementById("transition-overlay");

  const isDark = body.classList.contains("dark");
  const nextTheme = isDark ? "light" : "dark";

  // Set overlay dissolve color (white for light, black for dark)
  overlay.style.backgroundColor = isDark ? "white" : "black";
  overlay.style.opacity = "1";

  // Delay theme switch slightly to let dissolve show
  setTimeout(() => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
    overlay.style.opacity = "0";
  }, 400);
}
