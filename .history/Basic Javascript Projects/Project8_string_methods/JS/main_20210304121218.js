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

function str_Method() {
    var X = 56;
    document.getElementById("Numbers_to_str").innerHTML = X.toString();
}

function precision_Method() {
    var Y = 14532.56748;
    document.getElementById("Precision").innerHTML = Y.toPrecision(5);
}