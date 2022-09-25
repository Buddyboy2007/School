
let cave = new Scene({
    //ng.setStyles("darkred", "Helvetica");
    text: "You have arrived at a cave, Its quite dark",
    characterDelay: 25,
    image:"Images/ec.png",
    options: [
        new GameOption("Ki blast", () => ng.setScene(cave_explosion)),
        new GameOption("Torch", () => ng.setScene(cave_lit)),
    ]
});

let cave_explosion = new Scene({
    //ng.setStyles("darkred", "Helvetica");
    text: "You exploded the room... ...=_-? Why did you do that... Well either way you found the 4-Star Ball",
    characterDelay: 25,
    image:"Images/cave-invert.png",
    options: [new GameOption("Pick up 4-Star Ball", () =>{
        ball1 = true;
        ng.setScene(getChoices());
    }) ]
});

let cave_lit = new Scene({
    //ng.setStyles("darkred", "Helvetica");
    text: "You see the 4-Star Dragon ball!",
    characterDelay: 25,
    image:"Images/cave.png",
    options: [new GameOption("Pick up 4-Star Ball and Red Mushroom",() =>{
        ball1 = true;
        ng.setScene(getChoices());
    })]
});