const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("change");
  document.querySelector(".navbar").classList.toggle("change");
});

document.querySelectorAll(".card-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("change");
  });
});
