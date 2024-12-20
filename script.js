const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  if (!input.value || isNaN(input.value)) {
    output.textContent = "Please enter a valid number";
  } else if (input.value <= 0) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (input.value > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    convertToRoman(input.value);
  }
});

const convertToRoman = (num) => {
  let result = "";

  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
  ];

  romanNumerals.forEach(({ value, numeral }) => {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  });

  console.log(result);
  output.textContent = result;
};
