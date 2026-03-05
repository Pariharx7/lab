const numberInput = document.getElementById("numberInput");
const calculateButton = document.getElementById("calculateButton");
const outputDiv = document.querySelector(".output-div");

calculateButton.addEventListener('click', () => {
    const selectedOpt = document.getElementById("baseBox").value;
    const rawValue = numberInput.value.trim();

   
    if (!rawValue) {
        outputDiv.classList.add("displayOutput");
        outputDiv.innerHTML = `<b>Input is empty</b>`;
        return;
    }

    let numberInputVal;

    if (selectedOpt === "decimal") {
        numberInputVal = rawValue;
    } else {
        numberInputVal = parseInt(rawValue, 10);
    }

    if (selectedOpt !== "decimal" && isNaN(numberInputVal)) {
        outputDiv.classList.add("displayOutput");
        outputDiv.innerHTML = `<b>Please enter a valid number</b>`;
        return;
    }
    let convertedValue = baseConvertor(numberInputVal, selectedOpt);
    
    setTimeout(() => {
        outputDiv.classList.add("displayOutput");
        outputDiv.innerHTML = `The ${selectedOpt} value of ${rawValue} is <b>${convertedValue}</b>`;
    }, 500); 
});

function baseConvertor(input, option) {
    if (option === "binary") {
        return Number(input).toString(2);
    } 
    if (option === "octal") {
        return Number(input).toString(8);
    }
    if (option === "hexadecimal") {
        return Number(input).toString(16).toUpperCase();
    }
    if (option === "decimal") {
        return parseInt(input);
    }
}

function validateHexInputs(inputElement) {
    const hexRegex = /^[0-9A-Fa-f]+$/;
    return hexRegex.test(inputElement.value);
}
