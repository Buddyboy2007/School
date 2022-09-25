
let mountain = new Scene({
    //ng.setStyles("darkred", "Helvetica");
    text: "It's a bit cold",
    characterDelay : 25,
    image:"Images/mountain.png",
    options: [new GameOption("Fly to nest", () => ng.setScene(mountain2))]
});

let mountain2 = new Scene({
    //ng.setStyles("darkred", "Helvetica");
    text: "You find several eggs and a stone...? Goku Is this even i-",
    characterDelay : 25,
    image:"Images/mountain.png",
    options: [new GameOption("Look at the Stone", () => ng.setScene(mountain3))]
});
let mountain3 = new Scene({
    //ng.setStyles("darkred", "Helvetica");
    text: "Its the 6-Star Ball! Though a bird is flying at you and looks angry...",
    image:"Images/mountain.png",
    options: [new GameOption("Fly off to Bulmas house and relax", () => ng.setScene(mountain4))]
});
let mountain4 = new Scene({
    text: "You found the dragon balls! Great Job!",
    image: "Images/DBS.png",
})