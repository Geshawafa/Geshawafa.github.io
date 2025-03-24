document.addEventListener("DOMContentLoaded", () => {
    const headerElement = document.querySelector("header");

    if (!headerElement) {
        console.error("⚠️ L'élément <header> n'existe pas dans index.html !");
        return;
    }

    fetch("./components/header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            headerElement.innerHTML = data;
            console.log("✅ Header inséré !");

            // Charger le script du thème après l'insertion du header
            const themeScript = document.createElement("script");
            themeScript.src = "./assets/js/theme.js";
            themeScript.defer = true;
            document.body.appendChild(themeScript);
            console.log("🎨 Script de thème chargé !");

            // Initialisation du menu hamburger
            initHamburgerMenu();
        })
        .catch(error => console.error("🚨 Erreur lors du chargement du header :", error));

    function initHamburgerMenu() {
        const hamburger = document.getElementById("hamburger");
        const navbar = document.querySelector(".navbar");

        if (!hamburger || !navbar) {
            console.error("⚠️ Élément hamburger ou navbar introuvable après l'insertion du header.");
            return;
        }

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navbar.classList.toggle("active");
            navbar.classList.toggle("hidden");
        });
    }
});
