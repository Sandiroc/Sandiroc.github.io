document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const aboutSection = document.getElementById("about");

    window.addEventListener("scroll", () => {
        const aboutTop = aboutSection.getBoundingClientRect().top;

        if (aboutTop <= 0) {
            navbar.classList.remove("transparent");
            navbar.classList.add("translucent");
        } else {
            navbar.classList.remove("translucent");
            navbar.classList.add("transparent");
        }
    });
});