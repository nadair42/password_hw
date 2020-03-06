function password () {
    var passLength = prompt("How long would you like your password to be?")

    if (passLength < 8) {
        alert("Password must have at least 8 characters! Try again.");
        password();  
    }
    else if (passLength > 128) {
        alert ("Password cannot exceed 128 characters! Try again.");
        password();
    }
    else if (isNaN(passLength) === true) {
        alert("Password length must be entered as a number. Try again.")
        password();
    }
    else {
        // criteria()
    

        // function criteria () {
            var lowerReq = confirm("Will you require lower case letters in your password?");

            var upperReq = confirm("Will you require upper case letters in your password?");

            var numReq = confirm("Will you require numbers in your password?")

            var specReq = confirm("Will you require special characters in your password?")

            if(
                lowerReq === false &&
                upperReq === false &&
                numReq === false &&
                specReq ===false
            ){
                alert("You must choose at least one character type to include in password. Try again")
                // criteria()
                password();
            }

            var passwordSpecs = {
                passLength : passLength,
                upperReq : upperReq,
                lowerReq : lowerReq,
                numReq : numReq,
                specReq : specReq 
            }
        
            console.log (passwordSpecs)
        // }
    }
}


password();






// function criteria() {
//     var lower = prompt("Will you require lower case letters?")

//     if (lower == "yes") {
//         alert("Lower case letters will be included.")
//         upperReq();
//     }
//     else if (lower == "no") {
//         alert("Lower case letters will not be included.")
//         upperReq();
//     }
//     else {
//         alert("Please answer either yes or no.");
//         criteria();
//     }
// }

// function upperReq() {
//     var upper = prompt("Will you require upper case letters?")

//     if (upper == "yes") {
//         alert("Upper case letters will be included.")
//         numberReq()
//     }
//     else if (upper == "no") {
//         alert("Upper case letters will not be included.")
//         numberReq()
//     }
//     else {
//         alert("Please answer either yes or no.");
//         upperReq();
//     }
// }

// function numberReq() {
//     var number = prompt("Will you require numbers?")

//     if (number == "yes") {
//         alert("Numbers will be included.")
//         specReq()
//     }
//     else if (number == "no") {
//         alert("Numbers will not be included.")
//         specReq()
//     }
//     else {
//         alert("Please answer either yes or no.");
//         numberReq();
//     }
// }

// function specReq() {
//     var speChar = prompt("Will you require special characters?")

//     if (speChar == "yes") {
//         alert("Special characters will be included.")

//     }
//     else if (speChar == "no") {
//         alert("Special characters will not be included.")
//         if (
//             lower === "no" &&
//             upper === "no" &&
//             number === "no" &&
//             specChar === "no"
//         ){
//             alert("Must choose at least one character type to require. Try again.");
//             criteria();
//         }
        
//     }
//     else {
//         alert("Please answer either yes or no.");
//         numberReq();
//     }
// }
