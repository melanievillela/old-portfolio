//Remove display none to divs
const content = $(".content");
content.removeClass("hide-init");

//List of projects to display
const projectList = [
    {
        name: "Lotus Fitness",
        largeImage: "fitness-classes.png",
        smallImage: "fitness-classes-s.png"
    },
    {
        name: "Houston Eats Mexican",
        largeImage: "houston-eats.png",
        smallImage: "houston-eats-s.png"
    },
    {
        name: "Houston Art Crawl",
        largeImage: "houston-art-crawl.png",
        smallImage: "houston-art-crawl-s.png"
    },
    {
        name: "Dumpy House Buyers",
        largeImage: "dumpy-house-buyers.png",
        smallImage: "dumpy-house-buyers-s.png"
    },
    {
        name: "The Adventures of Little Tikka",
        largeImage: "little-tikka.png",
        smallImage: "little-tikka-s.png"
    },
    {
        name: "Holiday Potluck",
        largeImage: "pot-luck.png",
        smallImage: "pot-luck-s.png"
    },
    {
        name: "Where To Eat",
        largeImage: "restaurant-picker.png",
        smallImage: "restaurant-picker-s.png"
    },
];

//Header navbar functionality
const nav = $(".nav");
nav.click(function() {
    switch($(this).html()) {
        case "MV":       
            content.removeClass("show");        
            content.addClass("hide");
            $("#main").removeClass("hide");
            $("#main").addClass("show");
            break;
        case "About":   
            content.removeClass("show");    
            content.addClass("hide");
            $("#about").removeClass("hide");
            $("#about").addClass("show");
            break;
        case "Skills":  
            content.removeClass("show");        
            content.addClass("hide");
            $("#skills").removeClass("hide");
            $("#skills").addClass("show");
            break;
        case "Projects": 
            content.removeClass("show");            
            content.addClass("hide");
            $("#projects").removeClass("hide");
            $("#projects").addClass("show");
            break;
        case "Contact":    
            content.removeClass("show");        
            content.addClass("hide");
            $("#contact").removeClass("hide");
            $("#contact").addClass("show");
            break;
    }
});

function imageCarousel() {
    const projectImage = $("img");
    const projectDescription = $("#project-descriptions");

    for(let i=0; i<projectList.length; i++) {
        console.log(i)
        projectImage.attr("src", `./img/${projectList[i].smallImage}`)
        //let image = $(`<img src="${pojectImages[i].smallImage}" alt="${pojectImages[i].name}">`);
    }
}

imageCarousel();