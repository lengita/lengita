let lastScroll = 0;
const nav = document.querySelector("nav");
const toggleBtn = document.getElementById("navbarToggle");
const menu = document.getElementById("navbarMenu");
const hero = document.getElementById("hero");

//carousel
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



window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // On descend → cacher la nav
    nav.style.top = "-100px"; // hauteur de la nav
  } else {
    // On monte ou on arrête → montrer la nav
    nav.style.top = "0";
  }

  lastScroll = currentScroll;
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

// Toggle du menu
toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    toggleBtn.textContent = "x"; // croix quand ouvert
    toggleBtn.style.color = "rgb(255, 166, 0)"; // orange
     hero.classList.add("hidden"); // cacher le hero
  } else {
    toggleBtn.textContent = "☰"; // hamburger quand fermé
    toggleBtn.style.color = "rgb(255, 166, 0)"; // orange (toujours orange)
    hero.classList.remove("hidden"); // réafficher le hero
  }
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll("#navbarMenu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    toggleBtn.textContent = "☰"; // retour au hamburger
    toggleBtn.style.color = "rgb(255, 166, 0)"; // orangehero.classList.remove("hidden"); // réafficher le hero
    hero.classList.remove("hidden"); // réafficher le hero
  });
});
