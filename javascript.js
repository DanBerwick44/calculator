function add(input, result){
    let result = input + result
    return result
}
function subtract(input, result){
    let result = input - result
    return result
}
function multiply(input,result){
    let result = input * result
    return result
}
function divide(input, result){
    let result = input / result
    return result
}

var result = 0


function recieveInput(buttonPrompt){
    var input = ""
    if (typeof buttonPrompt == "number"){
    input = string(input) + string(buttonPrompt)
        // Assmebles numbers as strings
    }

    if (buttonPrompt == "add"){
        add(input, result)
    }
    if (buttonPrompt == "subtract"){
        subtract(input, result)
    }
    if (buttonPrompt == "multiply"){
        multiply(input, result)
    }
    if (buttonPrompt == "divide"){
        divide(input, result)
    }
    if (buttonPrompt == "equals")
        return result
}
