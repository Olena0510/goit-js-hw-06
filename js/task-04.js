let counterValue = 0;

const decrementBtnEl = document.querySelector('button[data-action = "decrement"]');
const incrementBtnEl = document.querySelector('button[data-action = "increment"]');

const decrement = () => {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
}

const increment = () => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
};

decrementBtnEl.addEventListener('click', decrement);

incrementBtnEl.addEventListener('click', increment);