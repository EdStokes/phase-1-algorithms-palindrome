
function reverseString(word) {
  // create an array from the input string
  const wordArray = word.split("");
  // reverse the array
  const reverseWordArray = wordArray.reverse();
  // create string from the reversed array
  const reversedWord = reverseWordArray.join("");
  return reversedWord;
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }

}

/* 
  Add your pseudocode here
  reverse the input string

  if the revesred string is the same as the input
    return true
  else
    return false
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
