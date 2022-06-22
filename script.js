// index to count if it's player 1 turn or not
let i = 0;
const cases = document.querySelectorAll(".case");

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

// add crosses and cirle in the cases
function play() {
  this.innerHTML = turn();
}

//change the content cases on click
cases.forEach((c) => {
  c.addEventListener("click", play);
});
