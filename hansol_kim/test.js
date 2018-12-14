var captain = "Jack";

var phrase = "oh " + captain + ", my " + captain + "!";
console.log(phrase);

//
var souls = 3;
var lifeRafts = 2;

if(souls > lifeRafts) {
    console.log("SOS");
}

//
// reate an array named weekend with just 'Saturday' in it 
// Add 'Sunday' to the end of the weekend array 
// Add 'Friday' to the front to the front of the weekend array 
// Access 'Saturday' in the array and assign to a variable named day 
// Remove 'Friday' from the array 

var weekend = ["Saturday"];
weekend.push("Sunday");
weekend.unshift("Friday");

var day = weekend[1];
weekend.shift();

//Write an object literal named brain 
// having a property of energyLevel with a value of 10 as a number 
// Assign the property of energyLevel to a variable named energy 
// Add a dream property to the brain object that holds the string 'electric sheep' 
// Add a dayDream property to the brain object that holds the object { lunch: ['burger', 'beer'] } 
// Add another element pudding to the lunch array inside the brain object 

var brain = {
    energyLevel: 10,
}
var energy = brain.energyLevel;
brain.dream = "electric sheep";
brain.dayDream = {lunch: ['burger', 'beer']};

brain.dayDream.lunch.push("pudding");

//Write a function to return the area of a rectangle (the product of its length and its width) 
// Invoke the function with 3 and 4 as arguments and save it to a variable named result 

var result = function (length, width) {
    return length * width;
}

console.log(result(3, 4));