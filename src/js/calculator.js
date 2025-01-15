let resultDisplayed = false; 


    if (resultDisplayed) return; 

    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1); 
}


function clearDisplay() {
    let display = document.getElementById("display");
    display.value = ""; 
    resultDisplayed = false; 
}


function calculateResult() {
    let display = document.getElementById("display");
    try {
        
        let result = display.value.replace('×', '*').replace('÷', '/');
        display.value = eval(result); 
        resultDisplayed = true; 
    } catch (error) {
        display.value = "Error"; 
        resultDisplayed = true; 
    }
}


document.addEventListener('keydown', function (event) {
    const key = event.key;

    
    if (/[0-9]/.test(key)) {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '.' || key === 'Enter') {
        appendToDisplay(key === 'Enter' ? '=' : key);
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
