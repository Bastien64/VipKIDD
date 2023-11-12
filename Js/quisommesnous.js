document.addEventListener("DOMContentLoaded", function() {
    const textdiv3 = document.querySelector(".textdiv1");
    
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            textdiv3.classList.add("show");
            observer.disconnect(); // Arrête l'observation une fois l'animation déclenchée.
        }
    });

    observer.observe(textdiv3);
});

