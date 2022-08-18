// Assignment Code
var generatePassword = document.querySelector("#generatePassword");
var password = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var passwordlength= parseInt(prompt("how long do you want your password to be?"))
    console.log(passwordlength)
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(chars.length)
  if (passwordlength>72 || passwordlength<8 ) {
    alert('Your password can only be between 8 to 72 characters')
    return;
  }

  var password = "";
    for (var i=0; i<passwordlength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length + 1);
        // console.log(randomNumber);
      password += chars.substring(randomNumber, randomNumber+1);
        // console.log(password);
      // return password;
 // passwordText.getRandomValue = password;
}
// return password;
document.getElementById("password").value = password
}


// Add event listener to generate button
// password.addEventListener('click', () => {
//   generatePassword.value = writePassword(10);
//   });
  // console.log('password');
  // return password;
