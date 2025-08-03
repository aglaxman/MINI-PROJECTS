let Value = 0
let inputValue = 0
let display = document.querySelector('.para')
function increment(){
    Value = Value+inputValue
    display.innerText = Value
}
function decrement(){
    Value = Value-inputValue
    display.innerText = Value
}
function reset(){
    Value =0
    display.innerText = Value
}


function showValue(){
    const inputV = document.querySelector('#number').value
    const incre = document.querySelector('.increment')
    const decre = document.querySelector('.decrement')
    if(parseInt(inputV)>0){
    decre.innerText = '-'+inputV
    incre.innerText = '+'+inputV
    }
    else{
        decre.innerText = '+'+inputV
        incre.innerText = '-'+inputV
    }
    inputValue = parseInt(inputV)
}

