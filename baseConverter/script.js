const numberInput = document.getElementById("numberInput");
const selectedOpt = document.getElementById("baseBox").value;
const calculateButton = document.getElementById("calculateButton");
console.log(numberInput.value);


calculateButton.addEventListener('click', () => {
    if(numberInput === ""){
        alert("Input should not be empty!")
    } else{
    let numberInputInt = parseInt(numberInput.value);

    
    let x = baseConvertor(numberInputInt, selectedOpt);
    console.log(x);
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

console.log(baseConvertor(10, "binary"));