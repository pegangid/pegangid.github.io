const navbarEl = document.getElementById("navbar-container");

window.addEventListener("scroll", function() {
    navbarEl.classList.add("scroll", window.scrollY > 0);
});