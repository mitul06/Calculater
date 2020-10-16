console.log("Project 7");

let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for (const items of buttons) {
    items.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('button is ', buttonText);

        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }else if (buttonText == 'C') {
            screenValue = '';
            screen.value = screenValue;
        } else if(buttonText == '=') {
            screen.value = eval(screenValue);
        }else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}