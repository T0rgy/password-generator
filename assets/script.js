// Assignment code here
var character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "?", "/", ";", "<", ">"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alpha = ["a", "b", "c", "d", "e", 'f', 'g', 'h', 'i', 'j', "k", 'l', 'm', "n", "o", "p", "q", "r", "s", "t", 'u', "v", "w", "x", "y", "z"];
var alpha2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmLength = "";
var confirmCharacter;
var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var selectionConfirm = [];
var randomPassword = "";

function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  while (confirmLength < 8 || confirmLength > 128) {
    alert ("Password length must be between 8-128 characters, try again");
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
  }

  confirmCharacter = confirm("Click OK to confirm if you would like to include special characters");
  confirmNumber = confirm("Click OK to confirm if you would like to include numeric characters");    
  confirmLowercase = confirm("Click OK to confirm if you would like to include lowercase characters");
  confirmUppercase = confirm("Click OK to confirm if you would like to include uppercase characters");

  while (!confirmCharacter && !confirmNumber && !confirmLowercase && !confirmUppercase) {
    alert ("You must choose OK or Cancel for no.")
    confirmCharacter = confirm("Click OK to confirm if you would like to include special characters");
    confirmNumber = confirm("Click OK to confirm if you would like to include numeric characters");    
    confirmLowercase = confirm("Click OK to confirm if you would like to include lowercase characters");
    confirmUppercase = confirm("Click OK to confirm if you would like to include uppercase characters");
  }

  if (confirmCharacter) {
    selectionConfirm = selectionConfirm.concat(character);
  }
  if (confirmLowercase) {
    selectionConfirm = selectionConfirm.concat(alpha);
  }
  if (confirmUppercase) {
    selectionConfirm = selectionConfirm.concat(alpha2);
  }
  if (confirmNumber) {
    selectionConfirm = selectionConfirm.concat(number);
  }

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + selectionConfirm[Math.floor(Math.random() * selectionConfirm.length)];
    console.log(randomPassword)
  }

  return randomPassword;

};
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