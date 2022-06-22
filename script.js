// index to count if it's player 1 turn or not
let i = 0;
const cases = document.querySelectorAll(".case");
const resultText = document.getElementById("result");

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
  // console.log(i);
  if (!this.innerHTML) {
    this.innerHTML = turn();
    win();
  }
}

//change the content cases on click
cases.forEach((c) => {
  c.addEventListener("click", play);
});

//8 victory conditions
function win() {
  //1st win condition
  if (
    cases[0].innerHTML !== "" &&
    cases[0].innerHTML === cases[1].innerHTML &&
    cases[0].innerHTML === cases[2].innerHTML
  ) {
    resultText.innerHTML = "You kicked his ass !";
  }
  //2nd win cond
  if (
    cases[3].innerHTML !== "" &&
    cases[3].innerHTML === cases[4].innerHTML &&
    cases[3].innerHTML === cases[5].innerHTML
  ) {
    resultText.innerHTML = "You kicked his ass !";
  }
  //3rd win cond
  if (
    cases[6].innerHTML !== "" &&
    cases[6].innerHTML === cases[7].innerHTML &&
    cases[6].innerHTML === cases[8].innerHTML
  ) {
    resultText.innerHTML = "You kicked his ass !";
  }
  //4th win cond
  if (
    cases[0].innerHTML !== "" &&
    cases[0].innerHTML === cases[3].innerHTML &&
    cases[0].innerHTML === cases[5].innerHTML
  ) {
    resultText.innerHTML = "You kicked his ass !";
  }
  //5th win cond
  if (
    cases[1].innerHTML !== "" &&
    cases[1].innerHTML === cases[4].innerHTML &&
    cases[1].innerHTML === cases[7].innerHTML
  ) {
    resultText.innerHTML = "You kicked his ass !";
  }
  //6th win cond
  if (
    cases[2].innerHTML !== "" &&
    cases[2].innerHTML === cases[5].innerHTML &&
    cases[2].innerHTML === cases[8].innerHTML
  ) {
    resultText.innerHTML = "You kicked his ass !";
  }
  //7th win cond
  if (
    cases[2].innerHTML !== "" &&
    cases[2].innerHTML === cases[4].innerHTML &&
    cases[2].innerHTML === cases[6].innerHTML
  ) {
    resultText.innerHTML = "You kicked his ass !";
  }
  //8th win cond
  if (
    cases[0].innerHTML !== "" &&
    cases[0].innerHTML === cases[4].innerHTML &&
    cases[0].innerHTML === cases[8].innerHTML
  ) {
    resultText.innerHTML = "You kicked his ass !";
  }
}
