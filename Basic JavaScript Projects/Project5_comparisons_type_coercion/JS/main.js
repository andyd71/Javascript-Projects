document.write(typeof "Andy",'<p>')// This is using the "typeof" keyword to declare a string.

function my_Function() {// Declaring a function.
    document.getElementById("Test").innerHTML = 0/0; // Setting the parameters for the function.
}

function my_Function1() {//Declaring a function.
    document.getElementById("Test1").innerHTML = isNaN('Hello there');//Using the "isNaN" keyword to decipher if this statement is true or false.

}

function my_Function2() {//Declaring a function.
    document.getElementById("Test2").innerHTML = isNaN('555');//Using the "isNaN" keyword to decipher if this statement is true or false.

}

function number_1() {//Declaring a function.
    document.getElementById("Num1").innerHTML =1.7976931348623157E309;//Using a number beyond the programs capacity to return a answer of "Infinity."
}

function number_2() {//Declaring a function.
    document.getElementById("Num2").innerHTML =-1.7976931348623157E309;//Using a number beyond the programs capacity to return a answer of "-Infinity."
}

document.write(6 > 3, '<p>');//Using the "document.write" function to display if the statement is true or false.

document.write(6 < 3, '<p>' );//Using the "document.write" function to display if the statement is true or false.

console.log(6+5);//Using the "console.log" to debug the code.

document.write(6 + "5", '<p>' );//Showing what happens if you try to add a number to a string.

console.log(6 < 5);//Using the "console.log" to debug the code.

document.write(10 == 10, '<p>' );//Using the "==" operator to check if the numbers are the same and displaying true or false.

document.write(3 == 10, '<p>');//Using the "==" operator to check if the numbers are the same and displaying true or false.

A = 65
B = 65
document.write(A === B, '<p>');//Using the "===" operator to determine whether all aspects of the values are the same and displaying true or false.

A = "55"
B = 65
document.write(A === B, '<p>');//Using the "===" operator to determine whether all aspects of the values are the same and displaying true or false.

A = "65"
B = 65
document.write(A === B, '<p>');//Using the "===" operator to determine whether all aspects of the values are the same and displaying true or false.

A = "55"
B = "65"
document.write(A === B, '<p>');//Using the "===" operator to determine whether all aspects of the values are the same and displaying true or false.

document.write(7 > 4 && 6 > 5, '<p>')//Using the "&&" operator to determine if both sums are correct and displaying a true of false answer.

document.write(3 > 4 && 6 > 5, '<p>')//Using the "&&" operator to determine if both sums are correct and displaying a true of false answer.

document.write(3 > 4 || 6 > 5, '<p>')//Using the "||" operator to determine if either of the sums are correct and displaying a true of false answer.

document.write(3 > 4 || 2 > 5, '<p>')//Using the "||" operator to determine if either of the sums are correct and displaying a true of false answer.

function not() {
    document.getElementById("Not").innerHTML = !(5 > 12);//Using the "!" operator to determine if either of the sums are correct and displaying a true of false answer.
}

function not_1() {
    document.getElementById("Not1").innerHTML = !(5 > 4);//Using the "!" operator to determine if either of the sums are correct and displaying a true of false answer.
}
