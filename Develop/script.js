// Assignment code here

var passwordLength = ' '
var includeUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var includeLowercase = 'abcdefghijklmnopqrstuvwxyz'
var includeNumbers = '0123456789'
var includeSymbols = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
var chars = ' '

function generatePassword() {
  // Prompt user for criteria
      // 1. Password Length (between 8 and 128 chars) - done
      // 2. Include Lowercase?
      // 3. Include Uppercase?
      // 4. Include Numbers?
      // 5. Include Symbols?
  // Validate input
  // Generate password based on criteria
  // Display password on page.



  var passwordLength = prompt("Password Length ( between 8 and 128 )"); 
  console.log(passwordLength);
  if (Number.isInteger(Number(passwordLength)) == true) {
    console.log("It is an integer");
  } else {
    console.log("It is not an integer");
  }

  if (passwordLength >= 8) {
    console.log("true");
  } else {
    console.log("try again");
  }

  if (passwordLength <= 128) {
    console.log("true");
  } else {
    console.log("try again");
  }

  return "Generated password placeholder."
}

function includeUppercase() {
  console.log(includeUppercase);
  if (includeUppercase == true) {
    console.log(Uppercase);
  } else {
    console.log(False);
  }
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
