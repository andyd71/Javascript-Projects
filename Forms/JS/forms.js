function validateForm() {
    var fname = document.forms["regForm"]["fname"].value;
    var lname = document.forms["regForm"]["lname"].value;
    var mail = document.forms["regForm"]["email"].value;
    var ring = document.forms["regForm"]["phone"].value;
    var bday = document.forms["regForm"]["birthday"].value;
    var uname = document.forms["regForm"]["username"].value;
    var pass = document.forms["regForm"]["password"].value;

    if (fname == "") {
        alert("First name must be filled out");
        return false;
    }
    if (lname == "") {
        alert("Last name must be filled out");
        return false;
    }
    if (mail == "") {
        alert("Email must be filled out");
        return false;
    }
    if (ring == "") {
        alert("Phone number must be filled out");
        return false;
    }
    if (bday == "") {
        alert("Birthday must be filled out");
        return false;
    }
    if (uname == "") {
        alert("Username must be filled out");
        return false;
    }
    if (pass == "") {
        alert("Password must be filled out");
        return false;
    }
}