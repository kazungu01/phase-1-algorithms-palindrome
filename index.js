function isPalindrome(word) {
  const reverseString = word.split('').reverse().join('')
 
  if (word === reverseString){
    return true
  } else {
    return false
  }

}

if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: false')
  console.log('=>', isPalindrome('boy'));

  console.log('Expecting: true')
  console.log('=>', isPalindrome('abba'));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
