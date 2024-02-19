document.addEventListener("DOMContentLoaded", function() {
    const textdiv3 = document.querySelector(".textdiv3");
    
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            textdiv3.classList.add("show");
            observer.disconnect(); // Arrête l'observation une fois l'animation déclenchée.
        }
    });

    observer.observe(textdiv3);
});


$(document).ready(function() {
    // Fonction pour vérifier si l'élément est visible dans la fenêtre
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Fonction pour gérer le défilement
    function handleScroll() {
      var logo = $(".logovipkiddiv2");
      if (isElementInViewport(logo[0])) {
        logo.addClass("show-logo");
      }
    }

    // Attacher la fonction handleScroll à l'événement de défilement
    $(window).on("scroll", handleScroll);

    // Appeler handleScroll au chargement initial de la page
    handleScroll();
  });

  $(document).ready(function() {
    // Fonction pour vérifier si l'élément est visible dans la fenêtre
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Fonction pour gérer le défilement
    function handleScroll() {
      var images = $(".imagebandeau");
      images.each(function(index, element) {
        if (isElementInViewport(element)) {
          $(element).addClass("show-image");
        }
      });
    }

    // Attacher la fonction handleScroll à l'événement de défilement
    $(window).on("scroll", handleScroll);

    // Appeler handleScroll au chargement initial de la page
    handleScroll();
  });