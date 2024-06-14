document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const hiddenText = button.previousElementSibling;
        if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
            hiddenText.style.display = 'inline';
            button.textContent = 'Ver Menos';
        } else {
            hiddenText.style.display = 'none';
            button.textContent = 'Ver Mais';
        }
    });
});

function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}