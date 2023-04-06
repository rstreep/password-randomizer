// Assignment code here
var generateBtn = document.querySelector("#generate");
var passwordLength = ' '
var includeUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var includeLowercase = 'abcdefghijklmnopqrstuvwxyz'
var includeNumbers = '0123456789'
var includeSymbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
var chars = ' '

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

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
    window.alert("this is not a number");
    console.log("It is not an integer");
  }

  if (passwordLength >= 8) {
    console.log("true");
  } else {
    window.alert("Value too low");
    console.log("try again");
  }

  if (passwordLength <= 128) {
    console.log("true");
  } else {
    window.alert("Value too large");
    console.log("try again");
  }
  var lowercaseVal = confirm('do you want lowercase?');
var uppercaseVal = confirm('do you want uppercase?');
var numbersVal = confirm('do you want numbers?');
var symbolsVal = confirm('do you want symbols?');

if (lowercaseVal == true) {
  chars += includeLowercase;
}
console.log(chars);
if (uppercaseVal == true) {
  chars += includeUppercase;
}
console.log(chars);
if (numbersVal == true) {
  chars += includeNumbers;
}
console.log(chars);
if (symbolsVal == true) {
  chars += includeSymbols;
}
console.log(chars);
if (chars == "") {
  window.alert('please enter at least one criteria');
  // return "";
}
// add a for loop, take all of the vars we collected in chars to new password var, apply math.floor and math.random

  // return "Generated password placeholder."
}

// var lowercaseVal = confirm('do you want lowercase?');
// var uppercaseVal = confirm('do you want uppercase?');
// var numbersVal = confirm('do you want numbers?');
// var symbolsVal = confirm('do you want symbols?');

// if (lowercaseVal == true) {
//   chars += includeLowercase;
// }
// console.log(chars);
// if (uppercaseVal == true) {
//   chars += includeUppercase;
// }
// console.log(chars);
// if (numbersVal == true) {
//   chars += includeNumbers;
// }
// console.log(chars);
// if (symbolsVal == true) {
//   chars += includeSymbols;
// }
// console.log(chars);
// if (chars == "") {
//   window.alert('please enter at least one criteria');
  // return "";
// }
// function includeUppercase() {
//   console.log(includeUppercase);
//   if (includeUppercase == true) {
//     console.log(Uppercase);
//   } else {
//     console.log(False);
//   }
// }

// Get references to the #generate element


// Write password to the #password input


// Add event listener to generate button

