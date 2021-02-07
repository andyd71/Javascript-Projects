function my_Dictionary() {//this creates a function.
    var Foods = { //this creates the variable and below are the items within the dictionary of the variable.

        Biscuit:"Hobnob",
        Cake:"Vanilla Slice",
        Meat:"Chicken",
        Vegetable:"Mushroom",
        Potatoes:"Roast"
    };
    delete Foods.Biscuit;//this deletes an item from the dictionary.
    document.getElementById("Dictionary").innerHTML = Foods.Biscuit;
    //the above line of code, highlights the code within the variable dictionary that I want to be displayed.
}
 