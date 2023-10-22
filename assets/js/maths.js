import * as puzzle from './puzzle.js';

const num1Block = document.getElementById('num1-block');
const num2Block = document.getElementById('num2-block');
const oprBlock = document.getElementById('opr-block');
const resultBlock = document.getElementById('result-block');
const answersBlocks = document.querySelectorAll('.math-block-answer');
const exitMaths = document.querySelector('#exit-math');
const maths = document.querySelector('.maths');
const logicBlock = document.querySelector('.logic');
const btnOpts = document.querySelector('.button-opts');

// answers
const answers1 = document.querySelector('#answer1');
const answers2 = document.querySelector('#answer2');
const answers3 = document.querySelector('#answer3');
const answers4 = document.querySelector('#answer4');

var num1 = 0;
var num2 = 0;
var opr = '+';
var result = 0;
var correctAnswer = 0;

var imgFolder = 'images/maths/'
var mathsImages = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"]

// exit maths
exitMaths.addEventListener('click', () => {
    maths.style.display = "none";
    logicBlock.style.display = "none";
    btnOpts.style.display = "block";

});

function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
}

function generateRandomOperator() {
    var operators = ['+', '-', '*', '/'];
    return operators[Math.floor(Math.random() * operators.length)];
}

function generateQuestion() {
    num1 = generateRandomNumber();
    num2 = generateRandomNumber();
    opr = generateRandomOperator();
    result = calculateResult();

    if (result > 9 || result < 0) {
        return generateQuestion();
    } else {

        if (num1 == 0) {
            num1Block.style.backgroundImage = "url(" + imgFolder + mathsImages[0] + ")";
        } else if (num1 == 1) {
            num1Block.style.backgroundImage = "url(" + imgFolder + mathsImages[1] + ")";
        } else if (num1 == 2) {
            num1Block.style.backgroundImage = "url(" + imgFolder + mathsImages[2] + ")";
        } else if (num1 == 3) {
            num1Block.style.backgroundImage = "url(" + imgFolder + mathsImages[3] + ")";
        } else if (num1 == 4) {
            num1Block.style.backgroundImage = "url(" + imgFolder + mathsImages[4] + ")";
        } else if (num1 == 5) {
            num1Block.style.backgroundImage = "url(" + imgFolder + mathsImages[5] + ")";
        } else if (num1 == 6) {
            num1Block.style.backgroundImage = "url(" + imgFolder + mathsImages[6] + ")";
        } else if (num1 == 7) {
            num1Block.style.backgroundImage = "url(" + imgFolder + mathsImages[7] + ")";
        } else if (num1 == 8) {
            num1Block.style.backgroundImage = "url(" + imgFolder + mathsImages[8] + ")";
        } else if (num1 == 9) {
            num1Block.style.backgroundImage = "url(" + imgFolder + mathsImages[9] + ")";
        }

        if (num2 == 0) {
            num2Block.style.backgroundImage = "url(" + imgFolder + mathsImages[0] + ")";
        } else if (num2 == 1) {
            num2Block.style.backgroundImage = "url(" + imgFolder + mathsImages[1] + ")";
        } else if (num2 == 2) {
            num2Block.style.backgroundImage = "url(" + imgFolder + mathsImages[2] + ")";
        } else if (num2 == 3) {
            num2Block.style.backgroundImage = "url(" + imgFolder + mathsImages[3] + ")";
        } else if (num2 == 4) {
            num2Block.style.backgroundImage = "url(" + imgFolder + mathsImages[4] + ")";
        } else if (num2 == 5) {
            num2Block.style.backgroundImage = "url(" + imgFolder + mathsImages[5] + ")";
        } else if (num2 == 6) {
            num2Block.style.backgroundImage = "url(" + imgFolder + mathsImages[6] + ")";
        } else if (num2 == 7) {
            num2Block.style.backgroundImage = "url(" + imgFolder + mathsImages[7] + ")";
        } else if (num2 == 8) {
            num2Block.style.backgroundImage = "url(" + imgFolder + mathsImages[8] + ")";
        } else if (num2 == 9) {
            num2Block.style.backgroundImage = "url(" + imgFolder + mathsImages[9] + ")";
        }

        // num1Block.innerHTML = num1;
        // num2Block.innerHTML = num2;
        oprBlock.innerHTML = opr;

        // style the image background
        num1Block.style.backgroundSize = "100% 100%";
        num1Block.style.backgroundRepeat = "no-repeat";
        num1Block.style.backgroundPosition = "center";

        num2Block.style.backgroundSize = "100% 100%";
        num2Block.style.backgroundRepeat = "no-repeat";
        num2Block.style.backgroundPosition = "center";

        displayAnswers();
    }

    resultBlock.innerHTML = "?";
}

generateQuestion();

//calculate result
function calculateResult() {
    var result = 0;

    switch (opr) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    return Math.floor(result);
}

// generate answerrs
function generateAnswers() {
    var answers = [result];
    while (answers.length < 4) {
        var randomAnswer = generateRandomNumber();
        if (answers.indexOf(randomAnswer) > -1) continue;
        answers.push(randomAnswer);
    }
    return answers;
}

// display answers
function displayAnswers() {
    var answers = generateAnswers();
    answers = answers.sort(() => Math.random() - 0.5);

    if (answers[0] == 1) {
        answers1.style.backgroundImage = "url(" + imgFolder + mathsImages[1] + ")";
    } else if (answers[0] == 2) {
        answers1.style.backgroundImage = "url(" + imgFolder + mathsImages[2] + ")";
    } else if (answers[0] == 3) {
        answers1.style.backgroundImage = "url(" + imgFolder + mathsImages[3] + ")";
    } else if (answers[0] == 4) {
        answers1.style.backgroundImage = "url(" + imgFolder + mathsImages[4] + ")";
    } else if (answers[0] == 5) {
        answers1.style.backgroundImage = "url(" + imgFolder + mathsImages[5] + ")";
    } else if (answers[0] == 6) {
        answers1.style.backgroundImage = "url(" + imgFolder + mathsImages[6] + ")";
    } else if (answers[0] == 7) {
        answers1.style.backgroundImage = "url(" + imgFolder + mathsImages[7] + ")";
    } else if (answers[0] == 8) {
        answers1.style.backgroundImage = "url(" + imgFolder + mathsImages[8] + ")";
    } else if (answers[0] == 9) {
        answers1.style.backgroundImage = "url(" + imgFolder + mathsImages[9] + ")";
    } else if (answers[0] == 0) {
        answers1.style.backgroundImage = "url(" + imgFolder + mathsImages[0] + ")";
    }

    if (answers[1] == 1) {
        answers2.style.backgroundImage = "url(" + imgFolder + mathsImages[1] + ")";
    } else if (answers[1] == 2) {
        answers2.style.backgroundImage = "url(" + imgFolder + mathsImages[2] + ")";
    } else if (answers[1] == 3) {
        answers2.style.backgroundImage = "url(" + imgFolder + mathsImages[3] + ")";
    } else if (answers[1] == 4) {
        answers2.style.backgroundImage = "url(" + imgFolder + mathsImages[4] + ")";
    } else if (answers[1] == 5) {
        answers2.style.backgroundImage = "url(" + imgFolder + mathsImages[5] + ")";
    } else if (answers[1] == 6) {
        answers2.style.backgroundImage = "url(" + imgFolder + mathsImages[6] + ")";
    } else if (answers[1] == 7) {
        answers2.style.backgroundImage = "url(" + imgFolder + mathsImages[7] + ")";
    } else if (answers[1] == 8) {
        answers2.style.backgroundImage = "url(" + imgFolder + mathsImages[8] + ")";
    } else if (answers[1] == 9) {
        answers2.style.backgroundImage = "url(" + imgFolder + mathsImages[9] + ")";
    } else if (answers[1] == 0) {
        answers2.style.backgroundImage = "url(" + imgFolder + mathsImages[0] + ")";
    }

    if (answers[2] == 1) {
        answers3.style.backgroundImage = "url(" + imgFolder + mathsImages[1] + ")";
    } else if (answers[2] == 2) {
        answers3.style.backgroundImage = "url(" + imgFolder + mathsImages[2] + ")";
    } else if (answers[2] == 3) {
        answers3.style.backgroundImage = "url(" + imgFolder + mathsImages[3] + ")";
    } else if (answers[2] == 4) {
        answers3.style.backgroundImage = "url(" + imgFolder + mathsImages[4] + ")";
    } else if (answers[2] == 5) {
        answers3.style.backgroundImage = "url(" + imgFolder + mathsImages[5] + ")";
    } else if (answers[2] == 6) {
        answers3.style.backgroundImage = "url(" + imgFolder + mathsImages[6] + ")";
    } else if (answers[2] == 7) {
        answers3.style.backgroundImage = "url(" + imgFolder + mathsImages[7] + ")";
    } else if (answers[2] == 8) {
        answers3.style.backgroundImage = "url(" + imgFolder + mathsImages[8] + ")";
    } else if (answers[2] == 9) {
        answers3.style.backgroundImage = "url(" + imgFolder + mathsImages[9] + ")";
    } else if (answers[2] == 0) {
        answers3.style.backgroundImage = "url(" + imgFolder + mathsImages[0] + ")";
    }

    if (answers[3] == 1) {
        answers4.style.backgroundImage = "url(" + imgFolder + mathsImages[1] + ")";
    } else if (answers[3] == 2) {
        answers4.style.backgroundImage = "url(" + imgFolder + mathsImages[2] + ")";
    } else if (answers[3] == 3) {
        answers4.style.backgroundImage = "url(" + imgFolder + mathsImages[3] + ")";
    } else if (answers[3] == 4) {
        answers4.style.backgroundImage = "url(" + imgFolder + mathsImages[4] + ")";
    } else if (answers[3] == 5) {
        answers4.style.backgroundImage = "url(" + imgFolder + mathsImages[5] + ")";
    } else if (answers[3] == 6) {
        answers4.style.backgroundImage = "url(" + imgFolder + mathsImages[6] + ")";
    } else if (answers[3] == 7) {
        answers4.style.backgroundImage = "url(" + imgFolder + mathsImages[7] + ")";
    } else if (answers[3] == 8) {
        answers4.style.backgroundImage = "url(" + imgFolder + mathsImages[8] + ")";
    } else if (answers[3] == 9) {
        answers4.style.backgroundImage = "url(" + imgFolder + mathsImages[9] + ")";
    } else if (answers[3] == 0) {
        answers4.style.backgroundImage = "url(" + imgFolder + mathsImages[0] + ")";
    }

    answers1.style.backgroundSize = "100% 100%";
    answers1.style.backgroundRepeat = "no-repeat";
    answers1.style.backgroundPosition = "center";

    answers2.style.backgroundSize = "100% 100%";
    answers2.style.backgroundRepeat = "no-repeat";
    answers2.style.backgroundPosition = "center";

    answers3.style.backgroundSize = "100% 100%";
    answers3.style.backgroundRepeat = "no-repeat";
    answers3.style.backgroundPosition = "center";

    answers4.style.backgroundSize = "100% 100%";
    answers4.style.backgroundRepeat = "no-repeat";
    answers4.style.backgroundPosition = "center";

    answers4.innerHTML = answers[3];
    answers3.innerHTML = answers[2];
    answers2.innerHTML = answers[1];
    answers1.innerHTML = answers[0];
}

// select the correct answer
function selectAnswer(answer) {
    if (answer == result) {
        // alert("correct");
        console.log("correct" + answer)
        puzzle.unscrambleRow();
        generateQuestion();
    } else {
        console.log("wrong" + answer)
    }
}

// add event listener to answers
answersBlocks.forEach((answer) => {
    answer.addEventListener('click', () => {
        selectAnswer(answer.innerHTML);
    });
});