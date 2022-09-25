
let cave = new Scene({
    //ng.setStyles("darkred", "Helvetica");
    text: "You have arrived at a cave",
    characterDelay: 25,
    image:"Images/cave.png",
    options: [
        new GameOption("Ki blast", () => ng.setScene(cave_explosion)),
    ]
});

let cave_explosion = new Scene({
    //ng.setStyles("darkred", "Helvetica");
    text: "You exploded the room... ...=_-? Why did you do that... Well either way you found the 4-Star Ball",
    characterDelay: 25,
    image:"Images/cave-invert.png",
    options: [new GameOption("Pick up 4-Star Ball", () => ng.setScene(cave2))]
});
