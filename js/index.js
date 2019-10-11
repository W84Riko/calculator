const display = document.querySelector('.calc .display');

document.querySelectorAll('.calc .buttons .number')
    .forEach( btn => btn.addEventListener('click', btnClicked));
document.querySelectorAll('.calc .buttons .operation')
    .forEach( btn => btn.addEventListener('click', btnClicked));

function btnClicked(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.calc .buttons .eq').addEventListener('click',  () => {
    if(display.value.search('1/0') != -1) {
        alert("Error /0 !!!");
    }
    else if(false) {
        alert("Error there is 2 or more operations in a row!!!");
    }
    else {
        display.value = eval(display.value)
    }
    });

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