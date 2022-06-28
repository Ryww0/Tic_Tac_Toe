// index to count if it's player 1 turn or not
let i = 0;
const cases = document.querySelectorAll(".case");
const resultText = document.getElementById("result");
const btnReset = document.getElementById("reset");

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

//function that setup our win conditions
function win(a, b, c) {
  if (
    cases[a].innerHTML !== "" &&
    cases[a].innerHTML === cases[b].innerHTML &&
    cases[a].innerHTML === cases[c].innerHTML
  ) {
    resultText.innerHTML = "You kicked his ass !";
    cases[a].style.background = "#1aa84262";
    cases[b].style.background = "#1aa84262";
    cases[c].style.background = "#1aa84262";
  }
}

//cases are now empty & index set to 0
function reset() {
  cases.forEach((cases) => {
    //reset cases values
    cases.innerHTML = "";
    //reset cases bg style after a win
    cases.style.background = "#6b2e2e";
    //reset result text
    resultText.innerHTML = "";
  });
  i = 0;
}

// add crosses and cirle in the cases
function play() {
  // console.log(i);
  if (!this.innerHTML) {
    this.innerHTML = turn();
  }
  //8 victory conditions
  win(0, 1, 2);
  win(3, 4, 5);
  win(6, 7, 8);
  win(0, 3, 6);
  win(1, 4, 7);
  win(2, 5, 8);
  win(2, 4, 6);
  win(0, 4, 8);
}

//change the content cases on click
cases.forEach((c) => {
  c.addEventListener("click", play);
});

//Listen to the function reset on btnReset click
btnReset.addEventListener("click", reset);
