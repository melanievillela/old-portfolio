//Resize Font Awesome icons depending on screensize
window.addEventListener("resize", resizeScreen);

function resizeScreen() {
    const icons = document.querySelectorAll("i");

    if (window.screen.width < 730) {
        icons.forEach(icon => {
            icon.classList.remove("fa-3x");
            icon.classList.add("fa-2x");
        });
    } else {
        icons.forEach(icon => {
            icon.classList.remove("fa-2x");
            icon.classList.add("fa-3x");
        });
    }
};

resizeScreen();

//Show modal
let modal = document.querySelector(".modal");
let projects = document.querySelectorAll(".project");

projects.forEach((project) => {
    project.addEventListener("mouseenter", function() {
        this.children[1].classList.remove("hide");
    });
    project.children[1].children[0].addEventListener("click", function() {
        this.parentElement.classList.add("hide");
    });
});
