// Expressions Assignment

// code to figure out how much net pay you have
// net pay = gross pay - deductions


var rate = prompt("Please enter the amount of hourly rate");// how much per hour do you make?
var hours = prompt("Please enter the amount of hours worked");// how many hours did you work?
var Deduct = prompt("Please enter the percentage amount of total deductions in whole numbers");//What is you r deductions?

var pay = rate * hours;// what is your Gross pay?
var dedPerc = pay * Deduct;//What is the amount of deductions from pay?
var net = pay - dedPerc;//what is the final net pay?
console.log("Your hourly rate is $" + rate + " and you worked " + hours + " hours in the past 2 weeks. With your deduction of " + Deduct + " your Net Pay is $" + net + "." )//Pint to console
prompt("Your net pay is $" + net + ".")//final prompt with answer