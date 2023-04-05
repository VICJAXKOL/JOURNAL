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