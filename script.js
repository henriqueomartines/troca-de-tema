const body = document.body;
const toggleButton = document.getElementById("theme-toggle");

function updateButtonLabel() {
  const isDark = body.classList.contains("theme-dark");
  toggleButton.textContent = isDark
    ? "Alternar para tema claro"
    : "Alternar para tema escuro";
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("theme-dark");
  body.classList.toggle("theme-light");
  updateButtonLabel();
});

updateButtonLabel();
