const primarHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
    primaryNav.hasAttribute("data-visible") ? navToggle.setAttribute("aria-expanded",false ) : navToggle.setAttribute("aria-expanded", false);
    primaryNav.toggleAttribute("data-visible");
    primarHeader.toggleAttribute("data-overlay");
});

const slider = new A11YSlider(document.querySelector(".slider"), {
    adaptiveHeight: false,
    dots: true,
    arrows: false,
    responsive: {
        480: {
            dots: false, //dots enabled 1280px and up
        },
    },
});
