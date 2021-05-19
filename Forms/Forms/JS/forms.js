var currentTab = 0; //current tab is set to be first tab.
showTab(currentTab);//display the current tab.

function showTab(n) {
    //this function will display the specified tab of the form
    var x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    //hide the current tab
    x[currentTab].style.display = "none";
    //increase or decrease current tab by 1
    currentTab = currentTab + n;
    //if you have reached the end of the form.....
    if (currentTab >= x.length) {
        //...the form gets submitted.
        document.getElementById("regForm").submit();
        return false;
    }
    //otherwise display the correct tab.
    showTab(currentTab);
}

function validateForm() {
    //this function deals with the validation of the form fields.
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    //a loop that checks every input field in the current tab.
    for (i = 0; i < y.length; i++) {
        //if a field is empty....
        if (y[i].value == "") {
            //add an invalid class to the field.
            y[i].className += " invalid";
            //and set the current valid status to false.
            valid = false;
        }
    }
    //if the valid status is true, mark the step as finished and valid.
    if (valid) {
    [currentTab].className += " finish"; 
    }
    return valid;//return the valid status.
}

