const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  if (!input.value || isNaN(input.value)) {
    output.textContent = "Please enter a valid number";
  };
  if (input.value <= -1) {
    output.textContent = "Please enter a number greater than or equal to 1"
  };
  if (input.value > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999"
  };
  else {

  }

});

const convertToRoman = (input.value) => {
    const chart = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
}