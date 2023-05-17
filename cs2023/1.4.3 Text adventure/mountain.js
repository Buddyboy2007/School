
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
    options: [
        new GameOption("Look at the Stone", () => ng.setScene(mountain_stone)),
        new GameOption("Examine Egg", () => ng.setScene(mountainEgg)),
    ]
        
});
let mountain_stone = new Scene({
    //ng.setStyles("darkred", "Helvetica");
    text: "Its the 6-Star Ball! Though a bird is flying at you and looks angry...",
    image:"Images/mountain.png",
    options: [new GameOption("Fly off", () => 
    {
        ball3 = true;
        ng.setScene(getChoices());
    })]
});
let mountainEgg = new Scene({
    //ng.setStyles("darkred", "Helvetica");
    text: "I-I Think the Mama Bird is pretty mad at y-you Goku!",
    image:"Images/mountain.png",
    options: [new GameOption("Fly away in fear", () => 
    {
        ball3 = false;
        ng.setScene(getChoices());
    })]
});