function addition_Function() { //the following line creates the function.
    var addition = 15 + 18; // creating the variable and declaring values.
    document.getElementById("Math").innerHTML = "15 + 18 = " + addition;
}// identifying the function via its id and displaying it(addition).

function my_Function() {//the following line creates the function.
    var subtraction = 30 - 12;// creating the variable and declaring values.
    document.getElementById("Sum").innerHTML = "30 - 12 = " + subtraction;
}// identifying the function via its id and displaying it(subtraction).

function multiply() {//the following line creates the function.
    var Multiply = 5 * 6;// creating the variable and declaring values.
    document.getElementById("Sum1").innerHTML = "5 x 6 = " + Multiply;
}// identifying the function via its id and displaying it(multiplication).

function divide() {//the following line creates the function.
    var Divide = 30 / 5;// creating the variable and declaring values.
    document.getElementById("Sum2").innerHTML = "30 / 5 = " + Divide;
}// identifying the function via its id and displaying it(division).
 
function math_1() {//the following line creates the function.
    var math_2 = (7 +54) * 7 / 2 - 13;// creating the variable and declaring values.
    document.getElementById("Maths").innerHTML = "7 plus 54, multiplied by 7, divided in half and then subtracted by 13 equals " +  math_2;
}// identifying the function via its id and displaying it(multiple sums).

function remainder() {//the following line creates the function.
    var Remainder= 55 % 3;// creating the variable and declaring values.
    document.getElementById("Remain").innerHTML = "When you divide 55 by 3 you have a remainder of: " + Remainder;
}// identifying the function via its id and displaying it(finding the remainder).

function negation () {//the following line creates the function.
    var x = 10;// creating the variable and declaring values.
    document.getElementById("Opposite").innerHTML = -x;
}// identifying the function via its id and displaying it(negation operator= opposite number).


var x = 15;// creating the variable and declaring the value.
x++;//incrementing the value of x (adding 1).
document.write(x);//writing the value of x in the html document.

var y = 20;// creating the variable and declaring the value.
y--;//decrementing the value of y (subtracting 1).
document.write(y);//writing the value of y in the html document.

window.alert(Math.random());//creating a random number in an alert box.
window.alert(Math.random() * 50);//creating a random number in an alert box between 0 and 50.

window.alert(Math.round(4.4));

