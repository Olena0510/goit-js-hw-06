
const inputEl = document.querySelector('#validation-input');

const onChecksOfNumber = () => {
    if (inputEl.value.length == inputEl.dataset.length) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
};
inputEl.addEventListener("blur", onChecksOfNumber);
