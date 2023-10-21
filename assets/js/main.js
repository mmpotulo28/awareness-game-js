const logicBtn = document.querySelector('#logic-btn');
const mathBtn = document.querySelector('#math-btn');
const logic = document.querySelector('.logic');
const buttonOptions = document.querySelector('.button-opts');
const exitLogic = document.querySelector('#exit-logic');

exitLogic.addEventListener('click', () => {
    logic.style.display = "none";
    buttonOptions.style.display = "block";
});

logicBtn.addEventListener('click', () => {
    logic.style.display = "block";
    buttonOptions.style.display = "none";
});

mathBtn.addEventListener('click', () => {
    window.location.href = "math.html";
});
