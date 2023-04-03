// Assignment code here

function generatePassword() {
  var passwordLength = prompt("Password Length"); 
  console.log(passwordLength);
  if(Number.isInteger(Number(passwordLength)) == true) {
    console.log("It is an integer");
  } else {
    console.log("It is not an integer");
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
