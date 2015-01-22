// Conditions Assignment

// code to figure out how much discount to give to employees and valued customers
var Emp = 20;
var Cus = 15;
var Ans = "Yes";
var Cho = prompt("Employee?");

if (Cho==Ans){
	var Pay = prompt("How much are you spending?")
	var Disc1 = Pay - (Pay * Emp);
	console.log("With your emoployee discount of " + Emp + "%, you only pay " + Disc1 + " for your items.")
	alert("With your emoployee discount of " + Emp + "%, you only pay " + Disc1 + " for your items.")
}else if (Cho=="No"){
	var Du = prompt("Customer?");
	var Disc2 = Pay - (Pay * Cus);
	console.log("With your emoployee discount of " + Cus + "%, you only pay " + Disc2 + " for your items.")
	alert("With your emoployee discount of " + Cus + "%, you only pay " + Disc2 + " for your items.")
}

