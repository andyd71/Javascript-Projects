function full_Sentence() {//creating a function.
    //below are 3 variables called part_1, part_2, and part_3.
    var part_1 = "You must remember this, ";
    var part_2 = "a kiss is just a kiss, ";
    var part_3 = "a smile is just a smile.";
    var whole_sentence = part_1.concat(part_2, part_3);//creating another variable to concatenate the previous 3 variables together using the "concat" method. 
    document.getElementById("Concatenate").innerHTML = whole_sentence;//displaying the result.
}

function slice_Method() {//creating a function.
    var Sentence = "Liverpool are the greatest team in the world!";//creating a variable with the value of a string.
    var Section = Sentence.slice(15,25)//creating another variable that uses the slice method.
    document.getElementById("Slice").innerHTML = Section;//displaying the result.
}

function capitals() {//creating a function.
    var str = "Another day, another dollar";//creating a variable with a string.
    var res = str.toUpperCase();//creating another variable with the toUpperCase method.
    document.getElementById("Capitals").innerHTML = res;//displaying the result.
}

function lookUp() {//creating a function.
    var str1 = "Who let the dogs out";//creating a variable with a string.
    var look = str1.search("dogs");//creating another variable with the search method.
    document.getElementById("Look").innerHTML = look;//displaying the result.

}

function str_Method() {//creating a function.
    var X = 56;//creating a variable with a number.
    document.getElementById("Numbers_to_str").innerHTML = X.toString();//displaying the number as a string.
}

function precision_Method() {//creating a function.
    var Y = 14532.56748;//creating a variable with a number.
    document.getElementById("Precision").innerHTML = Y.toPrecision(5);//displaying the number using the toPrecision() method at a specific length.

}

function fix_Method() {//creating a function.
    var num = 7.57623;//creating a variable with a number.
    var fix = num.toFixed(3);//creating another variable using the toFixed() method to set the number to a certain number of decimal places.
    document.getElementById("Fix").innerHTML = fix;//displaying the result.
}

function value_Method() {//creating a function.
    var str = "Who's a lucky boy then?";//creating a variable with a string.
    var res = str.valueOf();//creating another variable with the valueOf() method to revert the string back to its primitive form.
    document.getElementById("Value").innerHTML = res;//displaying the result.
}