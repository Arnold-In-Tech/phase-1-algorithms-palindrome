function isPalindrome(word) {
  // Write your algorithm here
  let inpWord = word.toString().toLowerCase();
  let inpWordReverse = inpWord.split("").reverse().join("");
  if (inpWord.match(/[a-zA-Z]/g) && (inpWord === inpWordReverse)){
    return true;
  }else{
    return false;
  }
}

/* 
  Add your pseudocode here
  input: "madam"
  output: true

  input: "robot"
  output: false

  assign word to a variable
  convert to string
  convert to lowercase
  reverse string: split string into array, reverse array, then join back into string
  check if they are letters
  check if word is equal to word in reverse 

  if (word is letters && word is equal to word in reverse)
      print true
  else
      print false
*/

/*
  Add written explanation of your solution here
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
