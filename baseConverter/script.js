const numberInput = document.getElementById("numberInput");

const calculateButton = document.getElementById("calculateButton");
const  outputDiv = document.querySelector(".output-div");

calculateButton.addEventListener('click', () => {
    const selectedOpt = document.getElementById("baseBox").value;

    if(!(numberInput.value.trim())){
        outputDiv.classList.add("displayOutput");
        outputDiv.innerHTML = `<b>Input is empty</b>`;
    } 

    let numberInputVal = parseInt(numberInput.value);
    console.log("Before fn ", numberInputVal);

    if(validateHexInputs(numberInput)){
        console.log("I got execures");
        numberInputVal = numberInput.value;
        console.log("Inside the fn ",numberInputVal);
    }


    if(isNaN(numberInputVal)){
        outputDiv.classList.add("displayOutput");
        outputDiv.innerHTML = `<b>Please enter a number</b>`;
    } else{

    let convertedValue = baseConvertor(numberInputVal, selectedOpt);
    
    setTimeout(() => {
        outputDiv.classList.add("displayOutput")
        outputDiv.innerHTML = `The ${selectedOpt} value of ${numberInputVal} is ${convertedValue}`
    }, 1500)
    
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
       return output = input.toString(16).toUpperCase();
    }
    if(option === "decimal") {
       return output = parseInt(input, 2);
    }
}

function validateHexInputs(input) {
    const hexRegex = /^[0-9A-Fa-f]+$/;

    if(!hexRegex.test(input)) {
        return "Invalid hexadecimal"
    }

    return true;
}
