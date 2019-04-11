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

//Image carousel
$(".main-carousel").flickity({
    // options
    cellAlign: "left",
    contain: true
});