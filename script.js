document.getElementById("reservationForm").addEventListener("submit", function(e) {
    const formMessage = document.getElementById("formMessage");

    // Vérification simple
    const email = document.querySelector("input[name='email']").value;
    if (!email.includes("@")) {
        e.preventDefault();
        formMessage.style.color = "red";
        formMessage.textContent = "Veuillez entrer un email valide.";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Envoi en cours...";
});