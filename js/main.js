var numbersSequence = document.querySelector(".numbers")

var numbersWrapper = document.querySelector(".numbers-wrapper");

var numbers = [
  "One",
  "   Ten",
  "   Twenty",
  "   Thirty",
  "   Forty",
  "   Fifty",
  "   Sixty",
  "   Seventy",
  "   Eighty",
  "   Ninety",
  "   Hundred",
  "   Thousand",
  "   Two Thousand",
  "   Three Thousand",
];

function longestNumber(arr) {
  var result = "";
  for (var i = 0; i < arr.length; i++) {
    var currentNumber = arr[i];

    if (currentNumber.length > result.length) {
      result = arr[i];
    }
  }
  return result;
}

numbers.className = "numbers";
numbersSequence.textContent = numbers;
numbersWrapper.textContent = longestNumber(numbers) + " is the longest number.";

console.log(numbers);
console.log(longestNumber(numbers) + " is the longest number.");
