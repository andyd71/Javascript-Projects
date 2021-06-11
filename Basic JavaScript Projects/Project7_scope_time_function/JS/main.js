var X = 5;//creating a global variable.
function Add_numbers_1() {//creating a function.
    document.write(5 + X + "<br>");//creating a sum incorporating the global variable and displaying the answer.
}
function Add_numbers_2() {//creating another function.
    document.write(X + 50 + "<br>");//creating a sum incorporating the same global variable and displaying the answer.
}//below, both functions are declared.
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {//creating a function.
    var Y = 5;//creating a local variable.
    document.write(10 + Y + "<br>");//creating a sum incorporating the global variable and displaying the answer.
}
Add_numbers_3();//the function is declared.

function Add_numbers_4() {//creating a function.
    var Z = 10;//creating a local variable.
    console.log(20 + Z);//using the console.log function to debug the code.
}
function Add_numbers_5() {//creating another function.
    console.log(Z + 20 + "<br>");//using the console.log function to debug the code.
}//below, both functions are declared.
Add_numbers_4();
Add_numbers_5();

function get_Date() {//creating a function.
    if (new Date().getHours() < 18) {//using an if conditional statement and the Date.getHours method.
        document.getElementById("Greeting").innerHTML = "Good morning!";//displaying the greeting.


    }
}

function get_Date1() {//creating a function.
    if (new Date().getMonth() < 3) {//using an if conditional statement and the Date.getMonth method.
        document.getElementById("month").innerHTML = "Another year has just begun!";//displaying the sentence.
}

}

function Age_Function() {//creating a function.
    Age = document.getElementById("Age").value;//creating an input id and assigning a value.
    //below is an else statement.
    if (Age>= 17) {
        Drive = "You are old enough to drive";

    }
    else {
        Drive = "You are too young to drive";
    }
    document.getElementById("How old are you?").innerHTML = Drive;//displaying the outcome.

}

function Time_function() {//creating a function.
    var Time = new Date().getHours();//creating a variable with a Date.getHours method.
    var Reply;//creating another variable.
    //below is an else if statement.
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;//displaying the outcome.
}