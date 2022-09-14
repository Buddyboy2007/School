let myObject = {
    name: "Lance",
    age: 14,
    favoriteColor: "Green",
    introduction: function(){
        console.log("Hey there, my name is" + " " + this.name);
    }  
};

//console.log(myObject.favoriteColor);
myObject.introduction();






let myDog = {
    breed: 'Corgi',
    name: 'Leviathan',
    weight: 13,
    height: 25,
    bark: 'Yip',
    speak: function() {
        console.log(this.bark + ', ' + this.bark + '!');
    }
};

myDog.speak();
console.table(myDog);
