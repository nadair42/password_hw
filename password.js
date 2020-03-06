function password () {
    var pass = prompt("What is your password??")

    if (pass.length < 8) {
        alert("Password must have at least 8 characters! Try again.");
        password();  
    }
    else if (pass.length > 128) {
        alert ("Password cannot exceed 128 characters! Try again.");
        password();
    }
    else {
        document.write("Your password is: " + pass);
    }
}

password()