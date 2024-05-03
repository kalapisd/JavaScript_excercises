const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

openModalBtn.addEventListener("click", () => {
  overlay.classList.add("active");
  modal.classList.add("active");
  modal.focus();
});

closeModalBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
  modal.classList.remove("active");
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closeModalBtn.click();
  }
});
