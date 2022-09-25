
let lake = new Scene({
    //ng.setStyles("darkred", "Helvetica");
    text: "Your wet from the water that is surrounding, as you and krillin plummet into the body of water.",
    characterDelay : 25,
    image:"Images/lake.png",
    options: [
        new GameOption("Ki Blast", () => ng.setScene(lake3)),
        new GameOption("Swim around", () => ng.setScene(lake2)),
    ]
});

let lake2 = new Scene({
    //ng.setStyles("darkred", "Helvetica");
    text: "Hey Goku look! The 3-Star Ball!",
    characterDelay : 25,
    image:"Images/lake.png",
    options: [new GameOption("Fly to Mountain", () => ng.setScene(mountain))]
});
let lake3 = new Scene({
    //ng.setStyles("darkred", "Helvetica");
    text: "YIKES GOKU! Jeez! You almost killed me QmQ....",
    characterDelay: 25,
    image:"Images/lake.png",
    options: [new GameOption("START", () => ng.setScene(choices))]
});