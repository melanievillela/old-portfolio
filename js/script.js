//Resize Font Awesome icons depending on screensize
window.addEventListener("resize", resizeScreen);

//Add "X" to modal on smaller screensize
window.addEventListener("resize", closeModal);

//Resize Screen
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


//Change letter colors & fonts in name
const letters = document.querySelectorAll("h1");

changeColors = () => {
    const random = Math.floor((Math.random() * letters.length));
    if (random % 2 == 0) {
        letters[random].classList.toggle("purple");
    } else {letters[random].classList.toggle("green")}
}

window.setInterval(changeColors, 300);


resizeScreen();
closeModal();