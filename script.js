var words = [];
var word = "hello";
var revword = "";

for (var i = 0; i < word.length; i++) {
  words.push(word[i]);
}

for (var i = 0; i < word.length; i++) {
  revword += words.pop();
}

if (revword === word) {
  console.log(word + " is a palindrome");
} else {
  console.log(word + " is not a palindrome");
}
