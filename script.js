// =========================
// PROBASKET JUNIOR
// SCRIPT.JS
// =========================


// =========================
// MENIU MOBIL
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

}


// Închide meniul după ce apăsăm pe un link

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

    });

});


// =========================
// HEADER LA SCROLL
// =========================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// =========================
// ANIMAȚII LA SCROLL
// =========================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});


// =========================
// ANUL DIN FOOTER
// =========================

const currentYear = new Date().getFullYear();

const footerYear = document.querySelector(".footer-copy");

if (footerYear) {

    footerYear.innerHTML =
        `© ${currentYear} ProBasket Junior Bacău. Toate drepturile rezervate.`;

}
