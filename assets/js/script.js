// Assignment code here
// Declaring and defining arrays for uppercase, lowercases, numbers, and special characters

var uppercaseArray = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharactersArray = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', "?", "@", "[", ']', '^', '_', "`", '{', '|', '}', '~' ];

// console.log(finalArray);

var createFinalArray = function (){

    var doesUserWantUppercase = confirm("Do you want the password to contain Uppercase characters?"); //This will return true or false
    console.log(doesUserWantUppercase);
    var doesUserWantLowercase = confirm("Do you want the password to contain Lowercase characters?"); // This will return true or false
    console.log(doesUserWantLowercase);
    var doesUserWantNumbers = confirm("Do you want the password to contain Numeric characters?"); // This will return true or false
    console.log(doesUserWantNumbers);
    var doesUserWantSpecialCharacters = confirm("Do you want the password to contain special characters?"); // This will return true or false
    console.log(doesUserWantSpecialCharacters);

    var finalArray =[];

    if (doesUserWantUppercase){
        finalArray = finalArray.concat(uppercaseArray);
    }
    if (doesUserWantLowercase){
        finalArray = finalArray.concat(lowercaseArray);
    }
    if (doesUserWantNumbers) {
        finalArray = finalArray.concat(numbersArray);
    }
    if (doesUserWantSpecialCharacters){
         finalArray = finalArray.concat(specialCharactersArray);
        }

    return finalArray;
}

// declared a function that performs an action
// prompting user for input & storing that input as a variable
var howLongIsThePassword = function(){
    var passwordLength = parseInt(prompt("How long do you want the password to be? (choose a number between 8 and 124)"));
    return passwordLength;
}

// Generate password function
function generatePassword(){
    var passwordLength = howLongIsThePassword();
    // console.log(passwordLength);
    var finalArray;
    if (!passwordLength || passwordLength < 8 || passwordLength > 124){
        alert("That was not a valid number. Please try again!");
        generatePassword();
    } else {
      finalArray = createFinalArray();
    //   console.log(finalArray);
    }

    var result = [];
    for (i = 0; i<passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * finalArray.length);
        var randomCharacter = finalArray[randomIndex];

        result.push(randomCharacter);
    }
    
    console.log(result);

    return result.join("");
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);