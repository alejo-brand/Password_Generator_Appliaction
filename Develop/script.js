// Assignment Code
var generateBtn = document.querySelector("#generate");
//Here we define a general object that stores the arrwys containing the characters that will make te password.
var PasswordCharacter = {
  Numbers: ["0","1","2","3","4","5","6","7","8","9"],
  LowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  UpperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  SpecialCharacter: ["~","!","@","#","$","%","^","&","*","(",")","_","-","+","{","}","?","<",">","/"],
  CharacterBase: [],
}
// Prompt the user for pass length and store it in a variable
// confirm the use of numbers
// confirm the use of lower case
// confirm the use of upper case
// confirm the use of special characters

function generatePassword() {
  var NumberCharChoice = prompt ("How long do you want the password to be? (must be between 8-128 characters)");
  var IsNumbers = confirm ("Do you want to use numbers?");
  var IsLower = confirm ("Do you want to use lower case?");
  var IsUpper = confirm ("Do you want to use Uper Case?");
  var IsSpecial = confirm ("Do you want to use Special Character?");

    if (NumberCharChoice < 8 || NumberCharChoice > 128) {
      alert ("Password Must be between 8 and 128 characters");
      return;
    } 
    if (IsNumbers === true) {
      PasswordCharacter.CharacterBase = PasswordCharacter.Numbers.concat(PasswordCharacter.CharacterBase);
      console.log(PasswordCharacter.CharacterBase)
    }

    if (IsLower === true) {
      PasswordCharacter.CharacterBase = PasswordCharacter.LowerCase.concat(PasswordCharacter.CharacterBase);
      console.log(PasswordCharacter.CharacterBase)
    }

    if (IsUpper === true) {
      PasswordCharacter.CharacterBase = PasswordCharacter.UpperCase.concat(PasswordCharacter.CharacterBase);
      console.log(PasswordCharacter.CharacterBase)
    }

    if (IsSpecial === true) {
      PasswordCharacter.CharacterBase = PasswordCharacter.SpecialCharacter.concat(PasswordCharacter.CharacterBase);
      console.log(PasswordCharacter.CharacterBase)
    }
    
   for (var i = 0; i<NumberCharChoice; i++){
     var RandomPassword = PasswordCharacter.CharacterBase [Math.floor(Math.random()*CharacterBase)];
   }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
