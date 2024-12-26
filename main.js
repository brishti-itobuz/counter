let counter = 0;

const counterValue = document.getElementById("counterDigit");
const incrementBtn = document.getElementById("increase-btn");
const decrementBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");

function increase() {
  counter++;
  counterValue.innerHTML = counter;
  color();
}

function decrease() {
  counter--;
  counterValue.innerHTML = counter;
  color();
}

function reset() {
  counter = 0;
  counterValue.innerHTML = counter;
  color();
}

function color() {
  if (counter === 0) {
    counterValue.style.color = "black";
  } else if (counter < 0) {
    counterValue.style.color = "red";
  } else {
    counterValue.style.color = "green";
  }
}
