let display = document.getElementById('result');
const resetButton=document.getElementById('reset');
const deleteButton=document.getElementById('del');
const equalButton = document.getElementById('=');

function addToDisplay(event){
    display.textContent += event.target.textContent;
}

let buttons = document.getElementsByClassName("button");
for (let button of buttons) {
    button.addEventListener('click', addToDisplay);
}

function resetDisplay() {
    display.textContent = '';
}
function del(){
    display.textContent=display.textContent.slice(0,-1);
}

function calculate(){
    try {
        let expression = display.textContent.replace('x', '*');
        let result = eval(expression);
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}
resetButton.addEventListener('click',resetDisplay);
deleteButton.addEventListener('click',del);
equalButton.addEventListener('click',calculate);


