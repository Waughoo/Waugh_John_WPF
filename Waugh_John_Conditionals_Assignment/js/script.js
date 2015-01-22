// Conditions Assignment

// code to figure out how much discount to give to employees and valued customers
var Emp1 = .20;
var Emp2 = 20;
var Cus = .15;
var Cus2 = 15;
var Ans = "Yes";
var Cho = prompt("Employee?");

if (Cho==Ans){
	var Pay = prompt("How much are you spending?");
	var Disc0 = Pay * Emp1;
	var Disc1 = Pay - Disc0;
	console.log("With your emoployee discount of " + Emp2 + "%, you only pay $" + Disc1 + " for your items.")
	alert("With your emoployee discount of " + Emp2 + "%, you only pay $" + Disc1 + " for your items.")
}else if (Cho=="No"){
	var Du = prompt("Customer?");
	var Pay = prompt("How much are you spending?");
	var Disc3 = Pay * Cus;
	var Disc2 = Pay - Disc3;
	console.log("With your customer discount of " + Cus2 + "%, you only pay $" + Disc2 + " for your items.")
	alert("With your customer discount of " + Cus2 + "%, you only pay $" + Disc2 + " for your items.")
}

