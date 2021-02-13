document.write(typeof "Andy",'<p>')

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function my_Function1() {
    document.getElementById("Test1").innerHTML = isNaN('Hello there');

}

function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN('555');

}

function number_1() {
    document.getElementById(Num1).innerHTML =1.7976931348623157E309;
}

function number_2() {
    document.getElementById(Num2).innerHTML =-1.7976931348623157E309;
}

document.write(6 > 3, '<p>');

document.write(6 < 3, '<p>' );

console.log(6+5);

document.write(6 + "5", '<p>' );

console.log(6 < 5);

document.write(10 == 10, '<p>' );

document.write(3 == 10, '<p>')

A = 65
B = 65
document.write(A === B, '<p>');

A = "55"
B = 65
document.write(A === B, '<p>');

A = "65"
B = 65
document.write(A === B, '<p>');

A = "55"
B = "65"
document.write(A === B, '<p>');

document.write(7 > 4 && 6 > 5, '<p>')

document.write(3 > 4 && 6 > 5, '<p>')

document.write(3 > 4 || 6 > 5, '<p>')

document.write(3 > 4 || 2 > 5, '<p>')

function not() {
    document.getElementById("Not").innerHTML = !(5 > 12);
}

function not_1() {
    document.getElementById("Not1").innerHTML = !(5 > 4);
}