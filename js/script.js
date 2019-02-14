//Resize Font Awesome icons depending on screensize
window.addEventListener("resize", resizeScreen);

//Add "X" to modal on smaller screensize
window.addEventListener("resize", closeModal);

//Resize Screen
function resizeScreen() {
    const icons = document.querySelectorAll("i");
    const outer = document.querySelector("#outer");
    const headerHeight = document.querySelector("header").clientHeight;
    outer.style.top = `${headerHeight}px`;

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

//Show modal
let projects = document.querySelectorAll(".project");

projects.forEach((project) => {
    project.addEventListener("mouseenter", function() {
        this.children[1].classList.remove("hide");
        this.addEventListener("mouseleave", function() {
            this.children[1].classList.add("hide");
        })
    });
});

//Manually close modal
function closeModal() {
    const closeIcon = document.querySelectorAll(".close");

    if (window.screen.width < 900) {
        closeIcon.forEach(icon => {
            icon.classList.remove("hide");
            icon.addEventListener("click", function() {
                this.parentNode.classList.add("hide");
            })
        })
    }    
};

resizeScreen();
closeModal();