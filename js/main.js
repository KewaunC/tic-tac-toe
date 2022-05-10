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
const result = document.querySelector('#result')
//Boxes
const box1 = document.querySelector('#one')
const box2 = document.querySelector('#two')
const box3 = document.querySelector('#three')
const box4 = document.querySelector('#four')
const box5 = document.querySelector('#five')
const box6 = document.querySelector('#six')
const box7 = document.querySelector('#seven')
const box8 = document.querySelector('#eight')
const box9 = document.querySelector('#nine')


let playerTurn = true

function playerClick(e){
    if (!e.target.classList.contains('mark')){
        e.target.innerText = playerTurn == true ? 'X': 'O' 
        playerTurn == true ? playerTurn = false : playerTurn = true
        e.target.className += ' mark'
        winningCombos()
    } 
}
document.querySelector('.container').addEventListener('click', playerClick)

function winningCombos(){
    let verticalOne = ['one','four','seven']
    let verticalTwo = [ 'two','five','eight']
    let verticalThree = ['three', 'six', 'nine']
    let diagOne = ['one','five','nine']
    let diagTwo = ['three', 'five', 'seven']
    let horOne =['one', 'two', 'three']
    let horTwo = ['four', 'five', 'six']
    let horThree = ['seven', 'eight', 'nine']
    let arr = [verticalOne , verticalTwo , verticalThree , diagOne , diagTwo , horOne , horTwo , horThree ]
    //Checking and comparing each text
    if( arr.some( id => (boxChecker(id[0]) === "X" || (boxChecker(id[0]) === "O")) && boxChecker(id[0]) === boxChecker(id[1]) && boxChecker(id[1]) === boxChecker(id[2])) ) {
        result.innerText = 'Winner!!'
      } 
    }
     
function boxChecker(boxId){
    return document.querySelector('#'+ boxId).innerText
}
      
    document.querySelector('.container').addEventListener('click', playerClick)


// function playerClick(e) {
//     if (e.target.classList.contains('box')) {
//         e.target.innerText = playerTurn == true ? 'X' : 'O'
//         playerTurn == true ? playerTurn == false : playerTurn == true;
//     }
// }

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