document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });

    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Deja de observar una vez que se hace visible
          }
        });
      },
      {
        root: null, // Observa en relación con el viewport
        rootMargin: "0px",
        threshold: 0.2, // Se activará cuando el 20% del elemento sea visible
      }
    );
  
    sections.forEach((section) => observer.observe(section));
  });