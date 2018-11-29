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

