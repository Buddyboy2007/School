/*
Verb - a word used to describe an action, state, or occurrence, and forming the main part of the predicate of a sentence, such as hear, become, happen.
Noun - a word (other than a pronoun) used to identify any of a class of people, places, or things ( common noun ), or to name a particular one of these ( proper noun ).
Adjective - a word or phrase naming an attribute, added to or grammatically related to a noun to modify or describe it.
Adverb - a word or phrase that modifies or qualifies an adjective, verb, or other adverb or a word group, expressing a relation of place, time, circumstance, manner, cause, degree, etc. (e.g., gently, quite, then, there ).
Exclamation - a sudden cry or remark, especially expressing surprise, anger, or pain.
*/ 
let getA = function(message){
    return prompt("Enter a " + message);
}


let noun1=getA ("Noun");
let verb1=getA ("Verb");
let adjective1=getA("Adjective");
let adverb1=getA("Adverb");
let exclamation1=getA("Exclamation");
let noun2=getA("Noun 2");

let story= noun1 + " was flying on the nimbus on his way to school when he got a call from Piccolo. Piccolo was saying that "+ noun2 +" had gone rogue and started to " 
+ verb1 + " all the Z Fighters. Only Tien was left standing as he fought against him. As " + noun1 +" joined in the battle to fight the "+ adverb1 +" "+ adjective1 
+ " menace. Piccolo flew in and started to fight the beast along with them. " 
+ noun1 + " and Piccolo win overpowering " +
noun2 + ". " + exclamation1 +" they shouted. After the brawl, " + noun2 + " calmed down and they all went out for pizza."

alert(story);

/*
Gohan was flying on the nimbus on his way to school when he got 
a call from Piccolo. 
Piccolo was saying that Majin Buu had gone rogue and started 
to annihilate all the Z Fighters. Only Tien was left standing 
as he fought against him. As Gohan joined in the battle to 
fight the pink menace, Piccolo flew in and started to fight 
the beast along with them. Gohan and Piccolo win overpowering
Majin Buu. After the brawl, Majin Buu calmed down and they all
went out for pizza.
*/




