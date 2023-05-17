/*
Enter the name of your game into the string assigned to the gameName variable. 
Enter your name and the name of any collaborators into the string assigned to the creator variable. 
*/
let gameName = "Dragon Ball Talerated";
let creator = "Lance Richmond";
//player inventory
let ball1 = false;
let ball2 = false;
let ball3 = false;

let gameNameContainer = document.getElementById("gameNameContainer")
gameNameContainer.textContent += gameName;

let NameContainer = document.getElementById("NameContainer")
NameContainer.textContent += creator;

/*----------
Create a new variable that will contain a new instance of the Text Game Engine. 
*/


/* ----------
Create a function named Start that will run when the player starts the game.
*/
let ng = new TextGameEngine();

/* ----------
Add to the game by creating new Scenes. 
*/

let getChoices = function(){ 
    if(ball1 && ball2 && ball3){
        return ending;
    }
    else{
        var scene = new Scene({
            //ng.setStyles("darkred", "Helvetica");
            text: "Heya there Goku! I've been trying to find the Dragon balls first before Emperor Pilaf does. Where do you want to go?",
            //ng.characterDelay = 25;
            image:"Images/dbz mpa.png"});
            if(!ball1) scene.options.push(new GameOption("Cave", () => ng.setScene(cave)));
            if(!ball2) scene.options.push(new GameOption("Lake", () => ng.setScene(lake)));
            if(!ball3) scene.options.push(new GameOption("Mountain", () => ng.setScene(mountain)));
            return scene;
    }    
}

let ending = new Scene({
    text: "You found the dragon balls! Great Job!",
    image: "Images/DBS.png",
})


let Start = function() {
  
    ng.setText ("Goku is a good child. Emperor Pilaf is very influential over the world. And he wants to get the dragon balls to summon Shenron, who is an extremely powerful dragon who can grant a single yet powerful wish.  To keep them from Emperor Pilaf from wishing upon his evil desires, Goku sets off to find the dragon balls first."),
//    ng.setText("Heya there Goku! I've been trying to find the Dragon balls first before Emperor Pilaf does. Where do you want to go?");
    ng.characterDelay = 25;
    ng.setImage("Images/start.png");
    ng.setOptions([
        new GameOption("Lets Go!!!", () => ng.setScene(getChoices()))
]);
}


/* ----------
DO NOT REMOVE OR EDIT ANY CODE BELOW THIS COMMENT! The game is ran by calling the Start function. 
*/
Start();