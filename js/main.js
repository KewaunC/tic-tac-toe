// Create a two player Tic-Tac-Toe game. 
// users should be able to click to place their X or O
//     after every click auto switch players
//     click places x or o 
//       alert if x or o is already there
//       cant click if there is a winner
// tell who wins 
//    3 in a row in any direction of xs or o's
//     //vertical/horizontal/diagonal
//   if all cards are filled and theres no winner= TIE
//   announce winner or tie in DOM
// button to reset the game
// keep track of score & display in DOM *OPTIONAL*
// keep track & display in DOM of whose turn it is *OPTIONAL*
// make the game as OOP as possible. 

//PREP
//parameters
//result
// document.querySelector('.box').addEventListener( 'click', )

// CLear and Results
const button = document.querySelector('#clear')
const result = document.querySelector('#results')
//Boxes
const box1 = document.querySelector('.one')
const box2 = document.querySelector('.two')
const box3 = document.querySelector('.three')
const box4 = document.querySelector('.four')
const box5 = document.querySelector('.five')
const box6 = document.querySelector('.six')
const box7 = document.querySelector('.seven')
const box8 = document.querySelector('.eight')
const box9 = document.querySelector('.nine')


const playerTurn = true

function playerClick(e) {
    if (e.target.classList.contains('.box')) {
        e.target.innerText = playerTurn == true ? 'X' : 'O';
        playerTurn == true ? playerTurn == false : playerTurn == true;
    }
}

document.querySelecter('.container').addEventListener('click', playerClick)


// class Player {
//     constructor( name,startScore) {
//         this.name = name,
//         this.score = startScore
//     }
//         ticTacToe() {
//             console.log('tic tac toe 3 in a row!')
//         }
//     }

// let player1 = new Player( 'Dan', 0 );
// let player2 = new Player( 'Joe', 0);