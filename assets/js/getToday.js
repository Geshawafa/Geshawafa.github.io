// Fonction pour obtenir la date du jour au format JJ/MM/AAAA
function getCurrentDate() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1; // Les mois commencent à 0
    let year = today.getFullYear();

    // Ajouter un zéro devant si nécessaire
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;

    return `${day}/${month}/${year}`;
}

// Attendre que la page soit chargée avant d'insérer la date
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("date").textContent = getCurrentDate();
});

