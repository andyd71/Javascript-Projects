function Ride_Function() {//creating a function.
    var Height, Can_Ride;//creating two variables.
    Height = document.getElementById("Height").value;//utilising the first variable with a value.
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";//utilising the second variable and setting the condition.
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride";//displaying the result of the condition.
}

function Vote_Function() {//creating a function.
    var Age, Can_Vote;//creating two variables.
    Age = document.getElementById("Age").value;//utilising the first variable with a value.
    Can_Vote = (Age < 18) ? "You are too young":"You are able";//utilising the second variable and setting the condition.
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote";//displaying the result of the condition.

}
//creating a Constructor Function for Vehicle objects.
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
//creating new Vehicle objects.
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019,"White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971,"Mustard");
//displaying the information for one of the variables.
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model
    + " manufactured in " + Erik.Vehicle_Year;
}
//creating a Constructor Function for Team objects.
function Team(Name, Position, Points) {
    this.Team_Name = Name;
    this.Team_Position = Position;
    this.Team_Points = Points;
}
//creating new Team objects.
var leeds = new Team("Leeds", 12, 24);
var liverpool = new Team("Liverpool", 1, 45);
var arsenal = new Team("Arsenal", 3, 35);
//displaying the information for one of the variables.
function myFunction1() {
document.getElementById("New_and_This").innerHTML = "Liverpool are " + liverpool.Team_Position 
+ "st in the English Premier League with " + liverpool.Team_Points + "pts";
}
//creating a Constructor Function for Pet objects.
function Pet(Type, Color, Name, Age) {
    this.Pet_Type = Type;
    this.Pet_Color = Color;
    this.Pet_Name = Name;
    this.Pet_Age = Age;
}
//creating a new Pet object.
var Ben = new Pet("Dog", "Black", "Rex", 5);
//displaying the information for the variable.
function myFunction2() {
document.getElementById("pet").innerHTML = "Ben has a " + Ben.Pet_Color + " " + Ben.Pet_Type 
+ " which is called " + Ben.Pet_Name + " and is " + Ben.Pet_Age + " years old.";
}

function count_Function() {//create a function
    document.getElementById("Nested_Function").innerHTML = Count();//display the outcome of the function.

    function Count() {//create another function.
        var Starting_point = 10;
        function Minus_two() {Starting_point -= 2;}
        Minus_two();//create a nested function.
        return Starting_point;

    }
}


