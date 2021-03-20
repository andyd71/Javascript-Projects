function Call_Loop() {
    var Digit = "";
    var X = 50;
    while (X > 0) {
        Digit += "<br>" + X;
        X--;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function Str_length() {
    var str = "Boys will be boys";
    var n = str.length;
    document.getElementById("str_length").innerHTML = n;
}