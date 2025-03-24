document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');

    // Vérifie si les éléments hamburger et navbar existent
    if (!hamburger) {
        console.error('⚠️ Problème avec l\'élément hamburger : Non trouvé');
        return;
    }
    if (!navbar) {
        console.error('⚠️ Problème avec l\'élément navbar : Non trouvé');
        return;
    }

    console.log("Script chargé !");

    // Lorsque l'on clique sur le hamburger, on change sa couleur
    hamburger.addEventListener('click', () => {

        // Vérifie si la couleur actuelle est déjà rouge, sinon la change
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
            navbar.classList.add('active');
        }
    });
});
