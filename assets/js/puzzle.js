//query for puzzle pecies
const puzzlePiece = document.querySelectorAll('.puzzle-peice');
//puzzle container
const puzzleBoard = document.querySelector('.puzzle_board');

//get reference to the puzzle image element
const puzzleImage = document.querySelector('.puzzle-image');
//reference to the win popup container
const winPopup = document.querySelector('.win-container');

//create array of puzzle images
const images = [
    "1.jpg", "5.jpg", "9.jpg", "13.jpg",
    "2.jpg", "6.jpg", "10.jpg", "14.jpg",
    "3.jpg", "7.jpg", "11.jpg", "15.jpg",
    "4.jpg", "8.jpg", "12.jpg", "16.jpg"]

const row1 = ["1.jpg", "5.jpg", "9.jpg", "13.jpg"]
const row2 = ["2.jpg", "6.jpg", "10.jpg", "14.jpg"]
const row3 = ["3.jpg", "7.jpg", "11.jpg", "15.jpg"]
const row4 = ["4.jpg", "8.jpg", "12.jpg", "16.jpg"]

const puzzles = ['puzzle1.jpeg', 'puzzle2.jpg', 'puzzle3.jpg']
const puzzleFolders = ['puzzle4', 'puzzle5', 'puzzle6', 'puzzle7']

var puzzleFolder = '' //to be used to store the name of the picked puzzle folder
var random = 0; //to be used to store the random number
var imageOrder = []; //to be used to check the order of the puzzle pieces
var picked = []; //to be used to avoid picking the same color twice
let i = 0
var image1 = '', image2 = '';// to store current images for the pieces
var id1S = false, id2S = false; //to indicate if a specific piece is selected
var id1 = null;
var id2 = null;
var row1Solved = false, row2Solved = false, row3Solved = false, row4Solved = false;
var row = 1;
var puzzleOrder = []

export function unscrambleRow() {
    switch (row) {
        case 1:
            for (let i = 0; i < 4; i++) {
                puzzlePiece[i].style.backgroundImage = "url(./images/" + puzzleFolder + "/" + row1[i] + ")";
            }
            break;
        case 2:
            for (let i = 4; i < 8; i++) {
                puzzlePiece[i].style.backgroundImage = "url(./images/" + puzzleFolder + "/" + row2[i - 4] + ")";
            }
            break;
        case 3:
            for (let i = 8; i < 12; i++) {
                puzzlePiece[i].style.backgroundImage = "url(./images/" + puzzleFolder + "/" + row3[i - 8] + ")";
            }
            break;
        case 4:
            for (let i = 12; i < 16; i++) {
                puzzlePiece[i].style.backgroundImage = "url(./images/" + puzzleFolder + "/" + row4[i - 12] + ")";
            }
            break;
        default:
            break;
    }

    row++;

    checkPuzzleOrder()
}

setPuzzle();

function resetPuzzle() {
    //reset puzzle pieces
    puzzlePiece.forEach(piece => {
        //remove border and scale down
        piece.style.border = "2px solid black";
        piece.style.borderRadius = "0px";
        piece.style.transform = "scale(1.0)";
        piece.style.boxShadow = "none";
    });


    puzzleFolder = '' //to be used to store the name of the picked puzzle folder
    random = 0; //to be used to store the random number
    imageOrder = []; //to be used to check the order of the puzzle pieces
    picked = []; //to be used to avoid picking the same color twice
    i = 0
    image1 = '', image2 = '';// to store current images for the pieces
    id1S = false, id2S = false; //to indicate if a specific piece is selected
    id1 = null;
    id2 = null;
}

//loop through puzzle pieces and set color for each peice
function setPuzzle() {

    //reset puzzle pieces
    resetPuzzle();

    //pick puzzle folder
    random = Math.floor(Math.random() * 4);
    puzzleFolder = puzzleFolders[random].toString();

    puzzlePiece.forEach(piece => {
        //generate random number between 0 and 15 [this will be the index]
        var randomNum = Math.floor(Math.random() * 16);

        //if the random number has already been picked, generate another number
        while (picked.includes(randomNum)) {
            randomNum = Math.floor(Math.random() * 16);
        }
        //push the random number to the picked array
        picked.push(randomNum); //this will be used to avoid picking the same color twice

        //set the background image of the puzzle piece to the image at the index of the random number
        let imgPath = "./images/" + puzzleFolder + "/" + images[randomNum];
        // alert(imgPath)
        piece.style.backgroundImage = "url(" + imgPath + ")";
        // i++
    });

}


function checkPuzzleOrder() {
    puzzleOrder = []

    puzzlePiece.forEach(piece => {
        let imgPath = piece.style.backgroundImage;
        let imgName = imgPath.substring(imgPath.lastIndexOf("/") + 1, imgPath.lastIndexOf(".")) + '.jpg';
        puzzleOrder.push(imgName)
    });

    for (let i = 0; i < images.length; i++) {
        if (puzzleOrder[i] != images[i]) {
            return
        }
    }

    displayMessage()

    console.log(puzzleOrder)
}


const message = document.querySelector('.message');
const winPopUp = document.querySelector('.winPopUp');
const winImg = document.querySelector('.win-img');

function displayMessage() {
    winPopUp.style.display = 'flex';
    let puzzle5Message = `We all have the responsibility to teach, to teachers, we have the responsibility to learn, so we can keep the planet clean.`

    let puzzle4Definition = `Air pollution is the contamination of air by harmful substances in the atmosphere, mainly due to human activities.`
    let puzzle4Message = `Fun fact about air pollution: 80% of bad smoke is causing our world to warm up.`

    let puzzle7Definition = `Water pollution is the contamination of water bodies, usually as a result of human activities.`
    let puzzle7Message = `Fun Fact: 80% of Bad water goes back to my clean water without Mommy cleaning it.`

    let puzzle6Definition = `Fun Fact: Where there's a lot of people, there's no piece!`
    let puzzle6Message = `Fun Fact: Mumbai india is considered the most noisest city in the world.`

    if (puzzleFolder == 'puzzle4') {
        message.innerHTML = "<h2>Definition: </h2>" + puzzle4Definition + "<br><br><p>Fun Fact: </p>" + puzzle4Message;
    } else if (puzzleFolder == 'puzzle5') {
        message.innerHTML = "<p>Fun Fact: </p>" + puzzle5Message;
    } else if (puzzleFolder == 'puzzle6') {
        message.innerHTML = "<h2>Definition: </h2>" + puzzle6Definition + "<br><br><p>Fun Fact: </p>" + puzzle6Message;
    } else if (puzzleFolder == 'puzzle7') {
        message.innerHTML = "<h2>Definition: </h2>" + puzzle7Definition + "<br><br><p>Fun Fac: t</p>" + puzzle7Message;
    }

    message.style.display = 'block';
    message.style.color = 'white';
    message.style.fontSize = '20px';

    winImg.src = './images/' + puzzleFolder + '/puzzle.jpg';



}

const playAgain = document.querySelector('#play-again');
playAgain.addEventListener('click', () => {
    // reload page
    winPopUp.style.display = 'none';
    location.reload();
});
