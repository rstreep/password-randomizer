// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Criteria Variables
var passwordLength = ""
var includeUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var includeLowercase = 'abcdefghijklmnopqrstuvwxyz'
var includeNumbers = '0123456789'
var includeSymbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
var chars = ""
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Generate Password function based on user criteria
function generatePassword() {
  var passwordLength = 0;
  while(true) {
    passwordLength = prompt("Password Length ( between 8 and 128 )");
    console.log(passwordLength);
    if (passwordLength >= 8 && passwordLength <= 128 && Number.isInteger(Number(passwordLength)) == true) {
      break;
    } else {
      window.alert("Incorrect value");
    }
  }

  chars = "";
  // variables for user criteria confirmation
  var lowercaseVal = confirm('Do you want lowercase?');
  var uppercaseVal = confirm('Do you want uppercase?');
  var numbersVal = confirm('Do you want numbers?');
  var symbolsVal = confirm('Do you want symbols?');
// validates lowercase criteria
  if (lowercaseVal == true) {
    chars += includeLowercase;
}
// validates upppercase criteria
    if (uppercaseVal == true) {
   chars += includeUppercase;
}
// validates numbers criteria
    if (numbersVal == true) {
  chars += includeNumbers;
}
// validates symbols criteria
    if (symbolsVal == true) {
    chars += includeSymbols;
}
// alerts user to select at least one criteria for password if they haven't selected any
    if (chars == "") {
    window.alert("please enter at least one criteria");
}
// Set Password variable
var password = "";
// for loop to randomize criteria selected
for (var i = 0; i < passwordLength; i++) {
  var passwordVal = Math.floor(Math.random() * chars.length);
  password += chars[passwordVal];
}
// Prints randomly generated password to page
return password;

}








