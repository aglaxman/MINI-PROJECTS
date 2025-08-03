

let display = document.querySelector('.display')
let container = document.querySelector('.container')


function isValidColor(color){
    let temp = document.createElement('div')
    temp.style.color = color
    return temp.style.color !== ''
}
function showColor(){

    let inputColor = document.querySelector('#inputColor').value.trim() 
    if(!isValidColor(inputColor)){
        display.innerText = 'Enter a Valid Color'
        container.style.backgroundColor=''
        return
    }
    display.innerText = inputColor
    container.style.backgroundColor = inputColor;
}

function showColorCode(){
    
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    if (color.length < 7) {
      color = color.padEnd(7, '0'); 
    }
    currentColor = color
    display.innerText = color
    container.style.backgroundColor = color;   

}