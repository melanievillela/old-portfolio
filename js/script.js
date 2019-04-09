import projects from './projects.js';
console.log(projects)
//Header navbar functionality
const nav = $(".nav");
nav.click(function() {
    switch($(this).html()) {
        case "MV":       
            $(".content").removeClass("show");        
            $(".content").addClass("hide");
            $("#main").removeClass("hide");
            $("#main").addClass("show");
            break;
        case "About":   
            $(".content").removeClass("show");    
            $(".content").addClass("hide");
            $("#about").removeClass("hide");
            $("#about").addClass("show");
            break;
        case "Skills":  
            $(".content").removeClass("show");        
            $(".content").addClass("hide");
            $("#skills").removeClass("hide");
            $("#skills").addClass("show");
            break;
        case "Projects": 
            $(".content").removeClass("show");            
            $(".content").addClass("hide");
            $("#projects").removeClass("hide");
            $("#projects").addClass("show");
            break;
        case "Contact":    
            $(".content").removeClass("show");        
            $(".content").addClass("hide");
            $("#contact").removeClass("hide");
            $("#contact").addClass("show");
            break;
    }
});

/*
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

//Change style sheet
const magic = document.getElementById("stylize");

magic.addEventListener("click", function() {
    const styleSheet = document.head.children[4];
    
    if (styleSheet.getAttribute("href") === "css/style-classy.css") {
        styleSheet.setAttribute("href", "css/style-funky.css")
    } 
    else {console.log("Funky")      
        styleSheet.setAttribute("href", "css/style-classy.css")
    }
})

window.setInterval(changeColors, 300);

resizeScreen();
closeModal();
*/