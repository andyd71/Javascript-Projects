function Car_Function() {//creating a function.
    var Car_Output;
    var Cars = document.getElementById("Car").value;
    var Car_String = " are a great make of car!";
    //above creating 3 variables.
    switch(Cars) {//creating a switch method.
        case "Ford":
            Car_Output = "Ford" + Car_String;
            break;
        case "Ferrari":
            Car_Output = "Ferrari" + Car_String;
            break;
        case "BMW":
            Car_Output = "BMW" + Car_String;
            break;
        case "Mercedes":
            Car_Output = "Mercedes" + Car_String;
            break;
        case "Audi":
            Car_Output = "Audi" + Car_String;
            break;
        case "Lexus":
            Car_Output = "Lexus" + Car_String;
            break;
        default:
            Car_Output = "Please enter a car make exactly as written on the above list. "

    }
    document.getElementById("car").innerHTML = Car_Output; //displaying the outcome.

}

function Hello_World_Function() {//creating a function.
    var A = document.getElementsByClassName("Click");//creating a variable with the "document.getElementsByClassName" method.
    A[1].innerHTML = "The text has changed";//displaying the outcome and targeting one of sentences by using an array method.
}

var c = document.getElementById("myCanvas1");
var ctx = c.getContext("2d");

//Create gradient.
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "blue");

//Fill with gradient.
ctx.fillStyle = grd;
ctx.fillRect(20, 20, 300, 160);

//creating stylised words within a canvas.
var a = document.getElementById("myCanvas");
var b = a.getContext("2d");
b.font = "40px Arial";
b.strokeText("Hello World!" ,10, 50);