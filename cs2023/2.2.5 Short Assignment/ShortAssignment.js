/*
INTRO
Underneath this comment create an alert method to define the start of the story.
The story should begin by defining how our player ended up stuck in the castle.
Limit this intro to 1 or 2 sentences.
*/ 
alert("You were traveling through the forests when you had spotted an interesting chest, you opened it but you blacked out. You now find yourself stuck in a castle.")
/*PLAYER CLASS
Define a variable to represent the player's fighting class. 
For example, they could be a warrior, sorcerer, healer, etc.
Then create a conditional statement that tests for a minimum of 2 different classes. (Minimum 1 else if statement)
Based on the character's class use alert methods to define unique weapons for the player. 
Finally, create an else statement to define a default weapon for the player. 
*/
let playerclass = prompt("What class do you want to pick. Warrior, Mage, Thief.") 
let playerweapon = "Eye Poke";
if (playerclass == "Warrior") {playerweapon = "Sword";  } 
else if (playerclass == "Mage") {playerweapon = "Wand";}
else if (playerclass == "Thief") {playerweapon = "Knife";}

if (playerweapon == "Sword") {
    alert("You have a sword");
}
else if (playerweapon == "Wand") {
    alert("You have a Wand");
}
else if (playerweapon == "Knife") {
    alert("You have a Knife");
}
else if (playerweapon == "Eye Poke") {
    alert("You have 2 legendary fingers");
} 

/*PLAYER ABILITY
Define a variable to represent a unique player ability. 
For example, they could have a fireball, a healing spell, wind blast, etc.
Then create a conditional statement with a minimum of 3 conditions that test for the player's
class and their ability. (Minimum 2 else if statement)
Based on the character's class and ability use alert methods to define how they'll defeat their enemy. 
Finally, create an else statement to define a default method for the player to defeat the enemy. 
*/
let playerability = "Eye Poke";
if (playerclass == "Warrior") {playerability = "Slash";  } 
else if (playerclass == "Mage") {playerability = "Fireball";}
else if (playerclass == "Thief") {playerability = "Stab";}
else {} 
/*THE BOSS FIGHT
Define a variable to represent the boss enemy. 
For example, they could be fighting a fire breathing dragon, a water monster, a living tree, etc.
Then create a conditional statement with a minimum of 3 conditions that test for the player's
class, their ability, and the boss. (Minimum 2 else if statement)
Based on the character's class, ability, and the monster use alert methods to 
define how the fight will go and if the player wins or loses. 
Finally, create an else statement to define a default monster for the player to face.
*/
let boss = ("Giant")
alert("you encounter a giant, he's weilding a fashioned titanium sword about half his size.")
//prompt("What do you do?")

if (playerweapon == "Sword") {
    alert("He falls down on one knee and dies as you slash him");
}
else if (playerweapon == "Wand") {
    alert("He isn't affected by the flames at all as you unleash a fireball at him, and he kills you with a single slash");
}
else if (playerweapon == "Knife") {
    alert("He isn't affected by the stab and the blade only dents itself, as he kills you with a swift slash");
}
else if (playerweapon == "Eye Poke") {
    alert("He begs for mercy as hes knocked down to the ground, wimpering at your extremely dangerous technique, as he runs away and lets you out.");
} 