const content = $(".content");

//Header navbar functionality
const nav = $(".nav");
nav.click(function() {
    switch($(this).html()) {
        case "MV":
            content.not("#main").addClass("remove");
            $("#main").removeClass("remove");
            break;
        case "About":  
            content.not("#about").addClass("remove");
            $("#about").removeClass("remove");
            break;
        case "Skills":  
            content.not("#skills").addClass("remove");
            $("#skills").removeClass("remove");
            break;
        case "Projects": 
            content.not("#projects").addClass("remove");
            $("#projects").removeClass("remove");
            break;
        case "Contact":    
            content.not("#contact").addClass("remove");
            $("#contact").removeClass("remove");
            break;
    }
});

//Show and close modal
let projects = $(".project");

projects.each(function() {
    $(this).on("click", function() {
        if($(window).width() <= 500) {
            $(this).children(".modal").height("100vh");
            $(this).children(".modal").css("position", "fixed");
        }
        $(this).children(".modal").removeClass("hide");
        $(this).children(".modal").children(".close").removeClass("hide");
        $(this).children(".modal").children(".close").on("click", function() {
            $(this).parent().addClass("remove");
        })
    });
});

//Images
const mobileImages = [
    "img/dumpy-house-buyers-s.png",
    "img/fitness-classes-s.png",
    "img/houston-art-crawl-s.png",
    "img/houston-eats-s.png",
    "img/NASA-bday-s.png",
    "img/little-tikka-s.png",
    "img/invitations-s.png",
    "img/medel-s.png"
];

const desktopImages = [
    "img/dumpy-house-buyers.png",
    "img/fitness-classes.png",
    "img/houston-art-crawl.png",
    "img/houston-eats.png",
    "img/NASA-bday.png",
    "img/little-tikka.png",
    "img/invitations.png",
    "img/medel.png"
];

const imageDIV = $("img");

if (window.screen.width < 500) {
    imageDIV.each(function(index, element) {
        $(element).attr("src", mobileImages[index])
    }); 
}   else {
    imageDIV.each(function(index, element) {
        $(element).attr("src", desktopImages[index])
    }); 
}