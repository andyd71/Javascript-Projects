function countdown() { //creating a function.
    var seconds = document.getElementById("seconds").value;//creating a variable and displaying the result.
    function tick() {//creating another function.
        seconds = seconds - 1;//assigning a value to the variable "seconds."
        timer.innerHTML = seconds;//making the id "timer" equal to the variable"seconds".
        setTimeout(tick, 1000);
        if(seconds == -1) {
            //above, setting the condition,
            alert("Times up!");//alerting the user that their time is up.
        }
    }
    tick();//declaring the function.
}

var slideIndex = 1;//creating a variable.
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot"); 
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}