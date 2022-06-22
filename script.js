// index to count if it's player 1 turn or not
let i = 0;
let cases = document.querySelectorAll(".case");

function turn() {
  //new index, new turn
  i++;
  // verification if index is impair (X start) or not
  if (i % 2 !== 0) {
    return "X";
  } else {
    return "O";
  }
}
