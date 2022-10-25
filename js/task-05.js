
const inputEl = document.querySelector('#name-input');

const spanEl = document.querySelector('#name-output');

const onMakeSpan = ({ currentTarget }) => {
    spanEl.textContent = currentTarget.value;

    if (spanEl.textContent === "") {
        spanEl.textContent = "Anonymous";
     }
};

inputEl.addEventListener('input', onMakeSpan);

