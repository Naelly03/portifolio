document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    menuBtn.addEventListener('click', function() {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
        }
    });

const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const modal = document.getElementById("contact-modal");

openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
});

const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
const icon = toggleButton.querySelector(".icon");

function toggleTheme() {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    icon.textContent = "☀️"; 
    localStorage.setItem("theme", "dark");
  } else {
    icon.textContent = "🌙"; 
    localStorage.setItem("theme", "light");
  }
}

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  icon.textContent = "☀️";
}

toggleButton.addEventListener("click", toggleTheme);
