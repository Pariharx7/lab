const numberInput = document.getElementById("numberInput");

const calculateButton = document.getElementById("calculateButton");
const  outputDiv = document.querySelector(".output-div");

calculateButton.addEventListener('click', () => {
    const selectedOpt = document.getElementById("baseBox").value;
    if(numberInput.value.trim() === ""){
        outputDiv.classList.add("displayOutput");
        outputDiv.innerHTML = `<b>Please enter a number</b>`;
    } 
    let numberInputInt = parseInt(numberInput.value);

    if(isNaN(numberInputInt)){
        outputDiv.classList.add("displayOutput");
        outputDiv.innerHTML = `<b>Please enter a number</b>`;
    } else{

    let convertedValue = baseConvertor(numberInputInt, selectedOpt);
    
    setTimeout(() => {
        outputDiv.classList.add("displayOutput")
        outputDiv.innerHTML = `The ${selectedOpt} value of ${numberInputInt} is ${convertedValue}`
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
