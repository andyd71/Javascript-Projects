function Call_Loop() {
    var Digit = "";
    var X = 50;
    while (X > 0) {
        Digit += "<br>" + X;
        X--;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function str_length() {
    var str = "Boys will be boys";
    var n = str.length;
    document.getElementById("Str_length").innerHTML = n;
}

var instruments = ["Piano", "Piccolo", "Trumpet", "Saxophone", "Flute"];
var content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < instruments.length; Y++) {
        content += instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

function array_Function() {
    var Car = [];
    Car[0] = "Renault Megane";
    Car[1] = "Ford Escort";
    Car[2] = "Vauxhall Astra";
    Car[3] = "BMW 3 series";
    document.getElementById("Array").innerHTML = "At the moment, the car I am driving is a " + Car[2] + ".";
}

function constant_function() {
    const Television = {type:"42 inch", make:"Samsung", color:"silver"};
    Television.make = "Panansonic";
    Television.price = "£500";
    document.getElementById("Constant").innerHTML = "I have bought a " + Television.type + " " + Television.make + " TV and it cost me " + Television.price + ".";
}

var X = 46;
document.write(X);
{
    let X = 21;
    document.write("<br>" + X);
}
document.write("<br>" + X);

function myFunction(name) {
    return "Hello " + name;   
}
document.getElementById("back").innerHTML = myFunction("Andy");

let phone = {
    make: "Samsung ",
    model: "Galaxy S7 ",
    year: " 2018 ",
    color: "Silver ",
    description: function() {
        return "My phone ia a " + this.make + this.model + "in " + this.color + "from" + this.year;  
    }
     
};
document.getElementById("Phone_Object").innerHTML = phone.description()

function stop() {
    var text = "";
    var i;
    for (i = 0; i < 5; i++) {
        if (i === 3) {
            break;
        }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("break_function").innerHTML = text;
}

function cont() {
    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
        if (i === 3) {
            continue;
        }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("continue_function").innerHTML = text;
}