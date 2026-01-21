document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(button => {
  button.addEventListener('click', function() {
    const target = document.querySelector(this.getAttribute('data-bs-target'));

    // Quand l'animation est terminée
    target.addEventListener('shown.bs.collapse', () => {
      this.textContent = "Voir moins";
    });

    target.addEventListener('hidden.bs.collapse', () => {
      this.textContent = "Voir plus";
    });
  });
});

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