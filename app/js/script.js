const SOL_O_BTN = document.querySelector('.btns p');
const SOL_C_BTN = document.querySelector('.sol i');
const SOL_DIV = document.querySelector('.sol');

SOL_O_BTN.onclick = () => {
  SOL_DIV.style.display = 'block';
};

SOL_C_BTN.onclick = () => {
  SOL_DIV.style.display = 'none';
};


// GENERATE RANDOM SQUARE FUNCTION
const newSqrtFuncBtn = document.querySelector('.btns button');
const SqrtFuncA = document.querySelector('#a');
const SqrtFuncX = document.querySelector('#x');
const SqrtFuncY = document.querySelector('#y');

newSqrtFuncBtn.onclick = () => {
  let a = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
  const x = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
  const y = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
  const xBefore = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
  const yBefore = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
  const aAfter = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
  if (aAfter == 1) {
    a += 0.5;
  }
  
  SqrtFuncA.innerText = a;
  SqrtFuncX.innerText = `(x ${xBefore == 1 ? '-' : '+'} ${x})²`;
  SqrtFuncY.innerText = ` ${yBefore == 1 ? '-' : '+'} ${y}`;
};;