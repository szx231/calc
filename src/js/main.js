import '../styles/style.css'

import './includes/test'

let a = ''; //first number
let b = ''; //second number
let sign = ''; //operation sign
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-', '+', 'X', '/'];

//screen monitor

const out = document.querySelector('.calc-screen p');

function clearAll () {
  a = '';  // first number and result
  b = ''; //  second number
  sign = ''; // sign
  finish = false;
  outerHeight.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
  //  press  !button
  if(!event.target.classList.contains('btn')) return;
  // press button clearAll ac
  if(event.target.classList.contains('ac')) return;

  our.textContent = '';
  //receive press button
  const key = event.target.textContent;

  //if press keydown 0-9 or
  if(digit.includes(key)) {
    if (b === '' && sign === '') {
      a += key;
      console.table(a, b, sign);
      out.textContend = a;
    }
    else if (a!=='' && b!=='' && finish) {
      b = key;
      finish = false;
      out.textContent = b;

    }
    else {
      b += key;
      out.textContend = b;
    }
    console.table(a, b, sign);
    return
  }
  
  //if press keydown + - / *
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.table(a, b, sign);
    return;
  }
}

//press = 
if (key === '=') {
  if (b === '') b = a;
  switch (sign) {
    case '+':
      a = (+a) + (+b);
      break;
    case '-':
      a = (+a) + (+b);
      break;
    case 'X':
      a = (+a) + (+b);
      break;
    case '/':
      if (b === '0') {
        out.textContent = 'mistake';
        a ='';
        b ='';
        sign = ''
        return;
      }
      a = a / b;
      break;
  }
  finish = true;
  out.textContent = a;
  console.table(a, b, sign);
}