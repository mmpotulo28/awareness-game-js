const logicBtn = document.querySelector('#logic-btn');
const mathBtn = document.querySelector('#math-btn');
const logic = document.querySelector('.logic');
const mathsBlock = document.querySelector('.maths');
const buttonOptions = document.querySelector('.button-opts');
const exitLogic = document.querySelector('#exit-logic');

exitLogic.addEventListener('click', () => {
    logic.style.display = "none";
    mathsBlock.style.display = "none";
    buttonOptions.style.display = "block";
});

logicBtn.addEventListener('click', () => {
    logic.style.display = "block";
    mathsBlock.style.display = "none";
    buttonOptions.style.display = "none";
});

mathBtn.addEventListener('click', () => {
    mathsBlock.style.display = "block";
    logic.style.display = "none";
    buttonOptions.style.display = "none";
});
