var calc = document.body.querySelector(".calculator");

var numberOne = prompt("What is the first number?");
var numberTwo = prompt("What is the second number?");

var y = +numberOne+ + numberTwo;
calc.innerHTML=y;