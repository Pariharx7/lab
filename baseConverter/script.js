const numberInput = document.getElementById("numberInput");
const selectedOpt = document.getElementById("baseBox").value;
const calculateButton = document.getElementById("calculateButton");
const  outputDiv = document.querySelector(".output-div");

calculateButton.addEventListener('click', () => {
    if(numberInput.value.trim() === ""){
        alert("Input should not be empty!")
    } else{
    let numberInputInt = parseInt(numberInput.value);

    if(isNaN(numberInputInt)){
        alert("Input should not be empty!")
    }

    let convertedValue = baseConvertor(numberInputInt, selectedOpt);
    outputDiv.classList.add("displayOutput")
    outputDiv.innerHTML = `<b>The ${selectedOpt} value of ${numberInputInt} is ${convertedValue}</b>`
    }
})

function baseConvertor(input, option){
    let output = 0;
    if(option === "binary"){
       return output = input.toString(2);
    } 
    if(option === "octal"){
       return output = input.toString(8);
    }
    if(option === "hexadecimal") {
       return output = input.toString(16);
    }
}
