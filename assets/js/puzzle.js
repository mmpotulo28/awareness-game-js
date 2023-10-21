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

const puzzles = ['puzzle1.jpeg', 'puzzle2.jpg', 'puzzle3.jpg']
const puzzleFolders = ['puzzle1', 'puzzle2', 'puzzle3']

var puzzleFolder = '' //to be used to store the name of the picked puzzle folder
var random = 0; //to be used to store the random number
var imageOrder = []; //to be used to check the order of the puzzle pieces
var picked = []; //to be used to avoid picking the same color twice
let i = 0
var image1 = '', image2 = '';// to store current images for the pieces
var id1S = false, id2S = false; //to indicate if a specific piece is selected
var id1 = null;
var id2 = null;


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
    random = Math.floor(Math.random() * 3);
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

    //set puzzleImage to the image at the puzzle board
    puzzleImage.style.background = "url(./images/" + puzzleFolder + "/" + puzzles[random] + ")";
    puzzleImage.style.backgroundSize = "100% 100%";
}

