//Dog Years

// Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”

var Realage = 9;
var Dogage= Realage * 7;

console.log("Sparky is " + Realage + " human years, which is " + Dogage + " in dog years.");

// Slice of Pie part 1

// How many slices of pizza did people eat

var perPizza = 8;
var partyPeople = 15;
var totPizza = 8;
var Total =(perPizza * totPizza)/ partyPeople

console.log("Each person ate " + Math.round(Total) + " slices of pizza at the party.")

//Bad Sparky!!!

//How many slices of pizza did Sparky eat

var leftOver = partyPeople * Math.round(Total);
var sparky = perPizza * totPizza
var Tasty = sparky - leftOver

console.log("Sparky got " + Tasty + " slices of pizza.")

// Average shopping bill

// Grocery Spending with an array

var budget = [125.32 + 89.75 + 113.14 + 74.82 + 105.79];
var fiveWeekstot = budget;
var fiveWeeksAVG = budget/5;


console.log("You have spent a total of $" + fiveWeekstot + " on groceries over 5 weeks. That's an average of $" + fiveWeeksAVG + " per week.")


//Discount

var ogPrice = 39.95;
var disc1 = 15;
var disc2 = .15;
var thing = "Toaster";
var tax1 = 6;
var tax2 = .06;

var C = ogPrice - (ogPrice * disc2);
var D = C + (C * tax2);

console.log("Your " + thing + " was originally $" + ogPrice + ", but after a " + disc1+ "% discount, it's now $" + C + " without tax and $" + D + " with tax. ")
