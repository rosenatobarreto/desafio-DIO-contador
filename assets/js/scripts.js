var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    disabledButton();
    
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    disabledButton();
    
}

function disabledButton(){
    if (currentNumber >= 10 || currentNumber <= 0) {
        document.getElementById('btmaior').disabled = true;
    }
    if (currentNumber < 0){
        document.getElementById('btmenor').disabled = true;
    }
}
