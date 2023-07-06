const section = document.querySelectorAll("div[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;

    section.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;

        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".education-sidebar-body .education-list .education-item a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
            document.querySelector(".education-sidebar-body .education-list .education-item a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    });
}

console.log(document.querySelector(".education-sidebar-body .education-list .education-item a"))



const menuToggleButtonEl = document.getElementById("menu-toggle");
const educationSidebarEl = document.getElementById("education-sidebar");

menuToggleButtonEl.addEventListener("click", () => {
    educationSidebarEl.classList.toggle("show");

    const section = document.querySelectorAll("div[id]");

    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {
        let scrollY = window.pageYOffset;

        section.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;

            sectionId = current.getAttribute("id");

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(".education-sidebar-body .education-list .education-item a[href*=" + sectionId + "]").classList.add("active-link");
            } else {
                document.querySelector(".education-sidebar-body .education-list .education-item a[href*=" + sectionId + "]").classList.remove("active-link");
            }
        });
    }
});