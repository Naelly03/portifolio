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

    // Seleciona elementos do DOM
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const modal = document.getElementById("contact-modal");

// Abre o modal
openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Fecha o modal ao clicar no botão de fechar
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fecha o modal ao clicar fora da área do modal
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
});

