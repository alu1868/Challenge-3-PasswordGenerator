// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Character pool

const lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbers = ['1','2','3','4','5','6','7','8','9','0'];
const special = ['!','@','#','$','%','^','&','*','(',')','_','-',',','=','+','`','~','<','>','.','/','?',';',':'];

// Function to Generate password
 passwordParameters = function() {

  // Do you want lower case letters?
  
  // Do you want upper case letters?

  // Do you want numbers?

  // Do you want special characters?

  // How long do you want your password to be?

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
