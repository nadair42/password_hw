var lowerChar = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

var upperChar = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
];

var specChar = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    "."
];

var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];



function passwordRequirements () {
    var passLength = prompt("How long would you like your password to be?")

    if (passLength < 8) {
        alert("Password must have at least 8 characters! Try again.");
        passwordRequirements();  
    }
    else if (passLength > 128) {
        alert ("Password cannot exceed 128 characters! Try again.");
        passwordRequirements();
    }
    else if (isNaN(passLength) === true) {
        alert("Password length must be entered as a number. Try again.")
        passwordRequirements();
    }
    else {

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
            passwordRequirements();
        }

        var passwordSpecs = {
            passLength : passLength,
            upperReq : upperReq,
            lowerReq : lowerReq,
            numReq : numReq,
            specReq : specReq 
        }        
    }
    return passwordSpecs
}

function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
}

function joinArr () {
    var specs = passwordRequirements();

    var optionsArr = [];

    if (
        specs.upperReq === true &&
        specs.lowerReq === false &&
        specs.numReq === false &&
        specs.specReq === false
    ){
        optionsArr = upperChar
    }

    else if (
        specs.upperReq === false &&
        specs.lowerReq === true &&
        specs.numReq === false &&
        specs.specReq === false
    ){
        optionsArr = lowerChar
    }

    else if (
        specs.upperReq === false &&
        specs.lowerReq === false &&
        specs.numReq === true &&
        specs.specReq === false
    ){
        optionsArr = numChar
    }

    else if (
        specs.upperReq === false &&
        specs.lowerReq === false &&
        specs.numReq === false &&
        specs.specReq === true
    ){
        optionsArr = specChar
    }

    else if (
        specs.upperReq === true &&
        specs.lowerReq === true &&
        specs.numReq === false &&
        specs.specReq === false
    ){
        optionsArr = optionsArr.concat(upperChar, lowerChar)
    }

    else if (
        specs.upperReq === true &&
        specs.lowerReq === false &&
        specs.numReq === true &&
        specs.specReq === false
    ){
        optionsArr = optionsArr.concat(upperChar, numChar)
    }

    else if (
        specs.upperReq === true &&
        specs.lowerReq === false &&
        specs.numReq === false &&
        specs.specReq === true
    ){
        optionsArr = optionsArr.concat(upperChar, specChar)
    }

    else if (
        specs.upperReq === false &&
        specs.lowerReq === true &&
        specs.numReq === true &&
        specs.specReq === false
    ){
        optionsArr = optionsArr.concat(lowerChar, numChar)
    }

    else if (
        specs.upperReq === false &&
        specs.lowerReq === true &&
        specs.numReq === false &&
        specs.specReq === true
    ){
        optionsArr = optionsArr.concat(lowerChar, specChar)
    }

    else if (
        specs.upperReq === false &&
        specs.lowerReq === false &&
        specs.numReq === true &&
        specs.specReq === true
    ){
        optionsArr = optionsArr.concat(numChar, specChar)
    }

    else if (
        specs.upperReq === true &&
        specs.lowerReq === true &&
        specs.numReq === true &&
        specs.specReq === false
    ){
        optionsArr = optionsArr.concat(upperChar, lowerChar, numChar)
    }

    else if (
        specs.upperReq === true &&
        specs.lowerReq === true &&
        specs.numReq === false &&
        specs.specReq === true
    ){
        optionsArr = optionsArr.concat(upperChar, lowerChar, specChar)
    }

    else if (
        specs.upperReq === true &&
        specs.lowerReq === false &&
        specs.numReq === true &&
        specs.specReq === true
    ){
        optionsArr = optionsArr.concat(upperChar, numChar, specChar)
    }

    else if (
        specs.upperReq === false &&
        specs.lowerReq === true &&
        specs.numReq === true &&
        specs.specReq === true
    ){
        optionsArr = optionsArr.concat(lowerChar, numChar, specChar)
    }

    else if (
        specs.upperReq === true &&
        specs.lowerReq === true &&
        specs.numReq === true &&
        specs.specReq === true
    ){
        optionsArr = optionsArr.concat(upperChar, lowerChar, numChar, specChar)
    }

    else {
        document.write("What the actual Fuck??")
    }

    console.log (optionsArr)
}


// function generatePassword () {
//     if (
//         upperReq === true &&
//         lowerReq === true &&
//         numReq === false &&
//         specReq === false
//     ) {
//         var length = passLength,
//         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
//         retVal = "";
//         for (var i = 0, n = charset.length; i < length; ++i) {
//             retVal += charset.charAt(Math.floor(Math.random() * n));
//         }
//         document.write(retVal)
//     }
// }


joinArr()

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
