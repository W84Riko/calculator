const display = document.querySelector('.calc .display');

document.querySelectorAll('.calc .buttons .number')
    .forEach( btn => btn.addEventListener('click', btnClicked));
document.querySelectorAll('.calc .buttons .operation')
    .forEach( btn => btn.addEventListener('click', btnClicked));

function btnClicked(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.calc .eq').addEventListener('click' ,
  () => display.value = eval(display.value) );

  document.querySelector('.calc .minusPlus').addEventListener('click' , () => {
    if(display.value[0] === '-') {
        display.value += "*(-1)";
        display.value = eval(display.value)
    }
    else {
        display.value = '-' + display.value;
    }
  });