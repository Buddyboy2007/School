let sayHello = function() {
    console.log("Hello there!");
}

let customGreeting = function(greeting, name){
    console.log(greeting + " " + name);
}

/*
customGreeting("Welcome", "Asia");
customGreeting("Hello", "Brianna");


customGreeting("Dylan", "Hi");
customGreeting("Howdy", "Ken, John");
*/
let calculatePercentage = function(percent, amount){
    percent = percent / 100;
   return percent * amount;
   console.log(percent * amount);
}

console.log(calculatePercentage(15, 60) - 5);
customGreeting("Hey", "all, Scott here")