function My_First_Function() { //creating a function.
    var car = "The car is red";//creating a variable.
    var result = car.fontcolor("red")//creating a second variable.
    document.getElementById("Red_Car").innerHTML = result;//used to display the result.
}

function myFunction() { //creating a function.
    var sentence = "This course is ";//creating a variable.
    sentence += "comprehensive, enjoyable and addictive.";//using the variable to concatenate the strings.
    document.getElementById("Concatenate").innerHTML = sentence;//used to display the result.

}

function sum(a, b) {
    return a + b;
  }
  document.getElementById("demo").innerHTML = sum(6, 5);
