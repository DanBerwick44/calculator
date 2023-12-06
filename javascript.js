var memory = []

function add(){
    memory.push(currentInput)
    memory.push("plus")
    currentInput = ""
    console.log("memory holds " + memory)
}
function subtract(){
    memory.push(currentInput)
    memory.push("minus")
    currentInput = ""
    console.log("memory holds " + memory)
}
function multiply(){
    memory.push(currentInput)
    memory.push("times")
    currentInput = ""
    console.log("memory holds " + memory)
}
function divide(){
    memory.push(currentInput)
    memory.push("divided by")
    currentInput = ""
    console.log("memory holds " + memory)
}

function linkConfirm(){
    console.log("Button works!")
}
var currentInput = ""

function clickHandler(buttonPrompt){
    console.log("push detected as " + String(buttonPrompt))
    if (buttonPrompt == "add"){
        add()
    }
    else if (buttonPrompt == "subtract"){
        subtract()
    }
    else if (buttonPrompt == "multiply"){
        multiply()
    }
    else if (buttonPrompt == "divide"){
        divide()
    }
    else if (buttonPrompt == "equals"){
        return
    }
    else{
        currentInput = currentInput + String(buttonPrompt)
        console.log("currentInput holds " + currentInput)
            // Assmebles numbers as strings
    }
}