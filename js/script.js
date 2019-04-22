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