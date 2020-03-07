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
    var passLength = parseInt(prompt("How long would you like your password to be?"))

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

var arr = joinArr();



function joinArr () {
    var specs = passwordRequirements();
    var optionsArr = [];

    var reqArr = [];

    if (
        specs.upperReq === true &&
        specs.lowerReq === false &&
        specs.numReq === false &&
        specs.specReq === false
    ){
        optionsArr = upperChar
        reqArr = upperChar
        createPass()
    }

    else if (
        specs.upperReq === false &&
        specs.lowerReq === true &&
        specs.numReq === false &&
        specs.specReq === false
    ){
        optionsArr = lowerChar
        reqArr = lowerChar
        createPass()
    }

    else if (
        specs.upperReq === false &&
        specs.lowerReq === false &&
        specs.numReq === true &&
        specs.specReq === false
    ){
        optionsArr = numChar
        reqArr = numChar
        createPass()
    }

    else if (
        specs.upperReq === false &&
        specs.lowerReq === false &&
        specs.numReq === false &&
        specs.specReq === true
    ){
        optionsArr = specChar
        reqArr = specChar
        createPass()
    }

    else if (
        specs.upperReq === true &&
        specs.lowerReq === true &&
        specs.numReq === false &&
        specs.specReq === false
    ){
        optionsArr = optionsArr.concat(upperChar, lowerChar)
        reqArr = [upperChar, lowerChar]
        createPass()
    }

    else if (
        specs.upperReq === true &&
        specs.lowerReq === false &&
        specs.numReq === true &&
        specs.specReq === false
    ){
        optionsArr = optionsArr.concat(upperChar, numChar)
        reqArr = [upperChar, numChar]
        createPass()
    }

    else if (
        specs.upperReq === true &&
        specs.lowerReq === false &&
        specs.numReq === false &&
        specs.specReq === true
    ){
        optionsArr = optionsArr.concat(upperChar, specChar)
        reqArr = [upperChar, specChar]
        createPass()
    }

    else if (
        specs.upperReq === false &&
        specs.lowerReq === true &&
        specs.numReq === true &&
        specs.specReq === false
    ){
        optionsArr = optionsArr.concat(lowerChar, numChar)
        reqArr = [lowerChar, numChar]
        createPass()
    }

    else if (
        specs.upperReq === false &&
        specs.lowerReq === true &&
        specs.numReq === false &&
        specs.specReq === true
    ){
        optionsArr = optionsArr.concat(lowerChar, specChar)
        reqArr = [lowerChar, specChar]
        createPass()
    }

    else if (
        specs.upperReq === false &&
        specs.lowerReq === false &&
        specs.numReq === true &&
        specs.specReq === true
    ){
        optionsArr = optionsArr.concat(numChar, specChar)
        reqArr = [numChar, specChar]
        createPass()
    }

    else if (
        specs.upperReq === true &&
        specs.lowerReq === true &&
        specs.numReq === true &&
        specs.specReq === false
    ){
        optionsArr = optionsArr.concat(upperChar, lowerChar, numChar)
        reqArr = [upperChar, lowerChar, numChar]
        createPass()
    }

    else if (
        specs.upperReq === true &&
        specs.lowerReq === true &&
        specs.numReq === false &&
        specs.specReq === true
    ){
        optionsArr = optionsArr.concat(upperChar, lowerChar, specChar)
        reqArr = [upperChar, lowerChar, specChar]
        createPass()
    }

    else if (
        specs.upperReq === true &&
        specs.lowerReq === false &&
        specs.numReq === true &&
        specs.specReq === true
    ){
        optionsArr = optionsArr.concat(upperChar, numChar, specChar)
        reqArr = [upperChar, numChar, specChar]
        createPass()
    }

    else if (
        specs.upperReq === false &&
        specs.lowerReq === true &&
        specs.numReq === true &&
        specs.specReq === true
    ){
        optionsArr = optionsArr.concat(lowerChar, numChar, specChar)
        reqArr = [lowerChar, numChar, specChar]
        createPass()
    }

    else if (
        specs.upperReq === true &&
        specs.lowerReq === true &&
        specs.numReq === true &&
        specs.specReq === true
    ){
        optionsArr = optionsArr.concat(upperChar, lowerChar, numChar, specChar)
        reqArr = [upperChar, lowerChar, numChar, specChar]
        createPass()
    }

    else {
        document.write("What the actual Fuck??")
    }

    console.log (optionsArr)
        // possibleCharacters
    console.log (reqArr)
        // guaranteedCharacters
    
    return optionsArr


    function createPass() {

        var result = [];
    
        function getRandom(optionsArr) {
            var randIndex = Math.floor(Math.random() * optionsArr.length);
            var randElement = optionsArr[randIndex];
        
            return randElement;
        }
        
        for (var i=0; i<specs.passLength; i++) {
        
            // var result = optionsArr[Math.floor(Math.random() * optionsArr.length)]

            var finalPass = getRandom(optionsArr)
            
            result.push(finalPass)
        }

        return result.join('')

    }
}




