fetch("/components/header.html")
    .then(response => response.text())
    .then(data => {
        const headerElement = document.querySelector("header");
        if (!headerElement) {
            console.error("⚠️ L'élément <header> est introuvable !");
            return;
        }

        headerElement.innerHTML = data;
        console.log("✅ Header chargé !");

        // Attendre un petit instant que le DOM soit mis à jour
        setTimeout(() => {
            const themeBtn = document.getElementById("theme-btn");
            const themeMenu = document.getElementById("theme-menu");

            if (!themeBtn || !themeMenu) {
                console.error("⚠️ Bouton de thème ou menu de thème non trouvés !");
                return;
            }

            console.log("✅ Bouton et menu trouvés après chargement !");

            // Charger le thème depuis localStorage au démarrage
            const savedTheme = localStorage.getItem("theme");
            if (savedTheme) {
                document.documentElement.setAttribute("data-theme", savedTheme);
            }

            // Ajout des événements
            themeBtn.addEventListener("click", (event) => {
                event.stopPropagation();
                themeMenu.classList.toggle("hidden");
                console.log("🔄 Menu de thème togglé !");
            });

            // Appliquer le thème sélectionné
            themeMenu.addEventListener("click", (event) => {
                if (event.target.tagName === "LI" && event.target.getAttribute("data-theme")) {
                    const selectedTheme = event.target.getAttribute("data-theme");

                    // Appliquer le thème sur <html> pour affecter toute la page
                    document.documentElement.setAttribute("data-theme", selectedTheme);

                    // Sauvegarder dans localStorage
                    localStorage.setItem("theme", selectedTheme);

                    // Cacher le menu
                    themeMenu.classList.add("hidden");

                    console.log(`🔧 Nouveau thème appliqué : ${selectedTheme}`);
                }
            });

            // Fermer le menu si l'utilisateur clique ailleurs
            document.addEventListener("click", (event) => {
                if (!themeBtn.contains(event.target) && !themeMenu.contains(event.target)) {
                    themeMenu.classList.add("hidden");
                    console.log("❌ Menu caché !");
                }
            });

        }, 100); // Petit délai pour s'assurer du chargement
    })
    .catch(error => console.error("❌ Erreur lors du chargement du header :", error));
