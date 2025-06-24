function generateRand(from, to) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

let rand;
let count = 0;

const guessValue = document.querySelector("#guess");
const generateButton = document.querySelector("#generate");
const submitButton = document.querySelector("#guessb");
const text = document.querySelector("#text");
const fromNum = document.querySelector("#from");
const toNum = document.querySelector("#to");
text.style.textTransform = "uppercase";

generateButton.addEventListener("click", function () {
  count = 0;
  submitButton.disabled = false;
  text.innerText = "YOUR GUESS";
  rand = generateRand(Number(fromNum.value), Number(toNum.value));
});

submitButton.addEventListener("click", function () {
  count++;
  if (guessValue.value == Number(rand)) {
    text.innerText = "You got it Right!!";
    guessValue.value = "";
    fromNum.value = "";
    toNum.value = "";
  } else if (guessValue.value > Number(rand)) {
    text.innerText = "Lesser!!";
  } else {
    text.innerText = "Larger!!";
  }
  if (count === 5) {
    setTimeout(function () {
      text.innerText = "MAX ATTEMPTS DONE";
    }, 1000);
    submitButton.disabled = true;
    return;
  }
  setTimeout(function () {
    text.innerText = "";
  }, 1500);
});
