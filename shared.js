const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButton = document.querySelectorAll(".plan button");
const negativeButton = document.querySelector(".modal__action--negative");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

for (var i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", function() {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}

if (negativeButton) {
  negativeButton.addEventListener("click", closeModal);
}

backdrop.addEventListener("click", function() {
  mobileNav.style.display = "none";
  closeModal();
});

function closeModal() {
  if (modal) {
    modal.style.display = "none";
  }
  backdrop.style.display = "none";
}

toggleButton.addEventListener("click", function() {
  mobileNav.style.display = "block";
  backdrop.style.display = "block";
});
