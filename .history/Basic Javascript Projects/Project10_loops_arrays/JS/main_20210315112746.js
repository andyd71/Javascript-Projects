function Call_Loop() {
    var Digit = "";
    var X = 50;
    while (X > 0) {
        Digit += "<br>" + X;
        X--;
    }
    document.getElementById("Loop").innerHTML = Digit;
}