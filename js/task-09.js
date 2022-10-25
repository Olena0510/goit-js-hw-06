function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

 
const colorBodyEl = document.querySelector('body');

const colorSpanEl = document.querySelector('.color');

const colorBtnEl = document.querySelector('.change-color');


const onBtnClick = () => {
  const colorBody = getRandomHexColor();
  colorSpanEl.textContent = colorBody;
  colorBodyEl.style.backgroundColor = colorBody;
};

colorBtnEl.addEventListener('click', onBtnClick);
