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


  //COOKIES
  // Vérifie si le cookie d'acceptation existe
  function checkCookie() {
    var accepted = getCookie("cookiesAccepted");
    if (accepted) {
      // Si le cookie existe, masquer la boîte de dialogue
      document.querySelector('.container').style.display = 'none';
    }
  }

  // Fonction pour récupérer un cookie par son nom
  function getCookie(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  // Fonction pour définir un cookie avec une durée d'expiration
  function setCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }
  // Vérifier si le cookie d'acceptation existe lors du chargement de la page
  window.onload = checkCookie;
  // Sélectionnez le bouton "close"
  var closeButton = document.querySelector('.close');

  // Ajoutez un gestionnaire d'événements pour le clic sur le bouton "close"
  closeButton.addEventListener('click', function() {
    // Sélectionnez le conteneur parent
    var container = document.querySelector('.container');
    // Masquez le conteneur parent
    container.style.display = 'none';
  });

  // Sélectionnez le bouton "accept"
  var acceptButton = document.querySelector('.accept');

  // Ajoutez un gestionnaire d'événements pour le clic sur le bouton "accept"
  acceptButton.addEventListener('click', function() {
    // Définir le cookie d'acceptation pour une durée de 30 jours
    setCookie("cookiesAccepted", "true", 30);
    // Masquer la boîte de dialogue
    document.querySelector('.container').style.display = 'none';
  });


