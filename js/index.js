const display = document.querySelector('.calc .display');

document.querySelectorAll('.calc .buttons .number')
    .forEach( btn => btn.addEventListener('click', btnClicked));
document.querySelectorAll('.calc .buttons .operation')
    .forEach( btn => btn.addEventListener('click', btnClicked));

function btnClicked(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.calc .buttons .eq').addEventListener('click',  () => {
    if(display.value.search('/0') != -1) {
        alert("Error /0 !!!");
    }
    else if(CheckOperations(display.value)) {
        alert("Error there is 2 or more operations in a row!!!");
    }
    else {
        display.value = eval(display.value)
    }
    });

function CheckOperations(string) {
    let operations = ['+', '-', '*', '/'];
    let operationsPositions = [];
    let searchIndex = 0;
    for(let i = 0; i < operations.length; i++) {
        while(string.indexOf(operations[i], searchIndex) != -1) {
            operationsPositions.push(string.indexOf(operations[i], searchIndex));
            searchIndex=string.indexOf(operations[i], searchIndex) + 1;
        }
        searchIndex = 0;
    }
    for(let i = 0; i < operationsPositions.length; i++) {
        for(let j = i + 1; j < operationsPositions.length; j++) {
            if(operationsPositions[i]+1 === operationsPositions[j]) {
                return true;
            }
        }
    }
    return false;
}

  document.querySelector('.calc .minusPlus').addEventListener('click' , () => {
    if(display.value[0] === '-') {
        display.value += "*(-1)";
        display.value = eval(display.value)
    }
    else {
        display.value = '-' + display.value;
    }
  });

  document.querySelector('.calc .buttons .clear').addEventListener('click' ,
  () => display.value = '' );