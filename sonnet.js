
// Take the contents of the sonnet div and place it in a variable
var sonnetContent = document.getElementById("sonnet").innerHTML;
console.log(sonnetContent);

// Find and output the starting position of the word "orphans"
console.log(sonnetContent.indexOf("orphans"));

// Output the number of characters in the sonnet
var numOfCharacters = sonnetContent.length;
console.log(numOfCharacters);

// Replace the first occurance of the string "winter" with "yuletide"
var newSonnet = sonnetContent.replace("winter", "yuletide");
console.log(newSonnet);

// Replace all occurances of the string "the" with "a large"
var newSonnet2 = newSonnet.split("the ").join("a large ").split("The ").join("A large ");
console.log(newSonnet2);

// Set the content of the sonnet div with the new string
document.getElementById("sonnet").innerHTML = newSonnet2;
