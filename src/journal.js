export default function Journal(title, body) {
  this.title = title;
  this.body = body;
}
Journal.prototype.wordCounter = function () {
  if(this.body.trim().length === 0) {
    return 0;
  }
  let totalWords = 0;
  let wordArray = this.body.split(" ");
  totalWords = wordArray.length;
  return totalWords;
};

Journal.prototype.charCounter = function () {
  let vowelArr = ["a", "i", "o", "e", "u"];
  let totalVowels = 0;
  let totalConsonants = 0;

  for (let i = 0; i < this.body.length; i++) {
    if (vowelArr.includes(this.body[i])) {
      totalVowels++;
    }
    else if (this.body[i] != " ") {
      totalConsonants++;
    }
  }
  return [totalVowels, totalConsonants];
};