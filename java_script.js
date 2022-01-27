function computerPlay() {
    let form = ['rock', 'paper', 'scissors'];
    let formPlay = form[Math.floor(Math.random() * form.length)];
    return formPlay;
}
computerPlay()

let [playerScore, computerScore, tide] = [0, 0, 0]
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'rock'){
        computerScore++;        
    } 
    else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++;
    }
    else if (playerSelection == computerSelection){
        alert("It is tide!")
    }

    document.getElementById("pScore").innerHTML = playerScore;
    document.getElementById("cScore").innerHTML = computerScore;


    if(playerScore == 5){
        alert("You won!") 
            location.reload()
    }
    else if(computerScore == 5){
        alert("You luse!")
            location.reload()
    }
}


const btnR = document.querySelector('#btnR');
btnR.addEventListener("click", () => {
    playRound('rock', computerPlay())
})

const btnP = document.querySelector('#btnP');
btnP.addEventListener("click", () => {
    playRound('paper', computerPlay())
})

const btnS = document.querySelector('#btnS');
btnS.addEventListener("click", () => {
    playRound('scissors', computerPlay())
})