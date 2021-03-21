function Call_Loop() {//creating a function.
    var Digit = "";//creating a variable.
    var X = 50;//creating another variable.
    while (X > 0) {//using the "while" loop to set the condition.
        Digit += "<br>" + X;
        X--;
    }
    document.getElementById("Loop").innerHTML = Digit;//displaying the result.
}

function str_length() {//creating a function.
    var str = "Boys will be boys";//creating a variable.
    var n = str.length;//creating another variable with the "string.length" function.
    document.getElementById("Str_length").innerHTML = n;//displaying the result.
}

var instruments = ["Piano", "Piccolo", "Trumpet", "Saxophone", "Flute"];
var content = "";
var Y;
//creating 3 variables.
function for_Loop() {//creating a function.
    for (Y = 0; Y < instruments.length; Y++) {//using a "for" loop to set the condition.
        content += instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;//displaying the result.
}

function array_Function() {//creating a function.
    var Car = [];//creating a variable to utilise an array.
    Car[0] = "Renault Megane";
    Car[1] = "Ford Escort";
    Car[2] = "Vauxhall Astra";
    Car[3] = "BMW 3 series";
    //above, setting the values of the array.
    document.getElementById("Array").innerHTML = "At the moment, the car I am driving is a " + Car[2] + ".";//displaying the result.
}

function constant_function() {//creating a function
    const Television = {type:"42 inch", make:"Samsung", color:"silver"};//using the "constant" key word and setting values to the variable.
    Television.make = "Panansonic";
    Television.price = "£500";
    //above, changing the values of the variable.
    document.getElementById("Constant").innerHTML = "I have bought a " + Television.type + " " + Television.make + " TV and it cost me " + Television.price + ".";//displaying the result.
}

var X = 46;//creating a variable.
document.write(X);//displaying the result.
{
    let X = 21;//assigning a value to a "let" statement.
    document.write("<br>" + X);
}
document.write("<br>" + X);//using the first variable as the "let" keyword can not be used on another statement.

function myFunction(name) {//creating a function.
    return "Hello " + name;   
}
document.getElementById("back").innerHTML = myFunction("Andy");//displaying the result.

let phone = {// using the "let" keyword with a variable and assigning values.
    make: "Samsung ",
    model: "Galaxy S7 ",
    year: " 2018 ",
    color: "Silver ",
    description: function() {//creating a function.
        return "My phone ia a " + this.make + this.model + "in " + this.color + "from" + this.year;//using the "return" key word to declare the function.
    }
     
};
document.getElementById("Phone_Object").innerHTML = phone.description()//displaying the result.

function stop() {//creating a function
    var text = "";//creating a variable
    var i;//creating another variable.
    for (i = 0; i < 5; i++) {//using a "for" loop to set the condition.
        if (i === 3) {
            break;//using the "break" keyword to end the loop when the "if" statement = true.
        }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("break_function").innerHTML = text;//displaying the result.
}

function cont() {//creating a function
    var text = "";//creating a variable
    var i;//creating another variable.
    for (i = 0; i < 10; i++) {//using a "for" loop to set the condition.
        if (i === 3) {//using the "continue" keyword to miss out the relevant number when the "if" statement = true.
            continue;
        }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("continue_function").innerHTML = text;//displaying the result.
}