function add(input, result){
    let result = input + result
    console.log("add()")
    return result
}
function subtract(input, result){
    let result = input - result
    console.log("subtract()")
    return result
}
function multiply(input,result){
    let result = input * result
    console.log("multiplyt()")
    return result
}
function divide(input, result){
    let result = input / result
    console.log("divide")
    return result
}

linkConfirm()(
    console.log("Button works!")
)


function clickHandler(buttonPrompt){
    var input = ""
    if (typeof buttonPrompt == "number"){
    input = String(input) + String(buttonPrompt)
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
