document.addEventListener("DOMContentLoaded", () => {
  const numberBank = [];
  const numberInput = document.querySelector("input[name='number']");
  const addButton = document.querySelector("button");
  const sortOneButton = document.getElementById("sortOne");
  const sortAllButton = document.getElementById("sortAll");
  const numberBankOutput = document.querySelector("#numberBank output");
  const oddsOutput = document.querySelector("#odds output");
  const evensOutput = document.querySelector("#evens output");

  addButton.addEventListener("click", addToNumberBank);
  sortOneButton.addEventListener("click", sortOne);
  sortAllButton.addEventListener("click", sortAll);

  function addToNumberBank(event) {
    event.preventDefault();
    const enteredNumber = parseInt(numberInput.value);
    if (!isNaN(enteredNumber)) {
      numberBank.push(enteredNumber);
      numberInput.value = "";
      updateNumberBankDisplay();
    } else {
      alert("Please enter a valid number!");
    }
  }

  function updateNumberBankDisplay() {
    numberBankOutput.textContent = numberBank.join(", ");
  }

  function sortOne() {
    const lastNumber = numberBank.pop();
    if (lastNumber !== undefined) {
      const isOdd = lastNumber % 2 !== 0;
      if (isOdd) {
        oddsOutput.textContent += `${lastNumber}, `;
      } else {
        evensOutput.textContent += `${lastNumber}, `;
      }
      updateNumberBankDisplay();
    }
  }

  function sortAll() {
    numberBank.forEach((number) => {
      const isOdd = number % 2 !== 0;
      if (isOdd) {
        oddsOutput.textContent += `${number}, `;
      } else {
        evensOutput.textContent += `${number}, `;
      }
    });
    numberBank.length = 0;
    updateNumberBankDisplay();
  }
});
