/**
 * Password must be 8 characters or more and must contain 2 of the following:
 * English uppercase characters (A - Z)
 * English lowercase characters (a - z)
 * Digits (0 - 9)
 * Non-alphabetic characters (for example !, $, #, %)
 *
 * @param  {String} password  The password to verify
 *
 * @return {Boolean}          True if the password matches the requirements
 */
function validatePassword(password) {
  var passingValidations = 0;

  passingValidations = /(?=.*[a-z]).{8,}/
    .test(password) ? ++passingValidations : passingValidations;
  passingValidations = /(?=.*[A-Z]).{8,}/
    .test(password) ? ++passingValidations : passingValidations;
  passingValidations = /(?=.*[0-9]).{8,}/
    .test(password) ? ++passingValidations : passingValidations;
  passingValidations = /(?=.*[@#\$%\^&\*\(\)_\+!\-£]).{8,}/
    .test(password) ? ++passingValidations : passingValidations;

  return passingValidations >= 2;
}

// too short
console.log('1: ', validatePassword('123abc'));
// lowercases and numbers
console.log('2: ', validatePassword('123abcdefg'));
// loweecases and symbols
console.log('3: ', validatePassword('!adsasdsadabcdefg'));
// symbols and numbers
console.log('4: ', validatePassword('!12121121212'));
// symbols and uppercases
console.log('5: ', validatePassword('AASASAAASAS@@@'));
// lowercases and uppercases
console.log('5: ', validatePassword('AASASAAASASasasdasd'));

module.exports = validatePassword;
