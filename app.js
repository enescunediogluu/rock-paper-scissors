let userScore = 0;
let compScore = 0;
let userScoreSpan = document.getElementById("user-score");
let compScoreSpan = document.getElementById("comp-score");
const scoreboardDiv = document.querySelector(".score-board");
const resultDiv = document.querySelector(".result>p");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");
const choicesDiv = document.querySelector(".choices");

main();

function showCompChoice(compChoice,situation){
    let colorIndicator;
    if(situation == 0){
        colorIndicator = "green";
    }else if(situation == 1){
        colorIndicator = "red";
    }else if(situation == 2){
        colorIndicator = "yellow";
    }
    switch(compChoice){
        case 'R':
            rockDiv.style.backgroundColor = `${colorIndicator}`;
            rockDiv.style.boxShadow = `0 0 20px 2px ${colorIndicator}`;
            break;
        case 'P':
            paperDiv.style.boxShadow = `0 0 20px 2px ${colorIndicator}`;
            paperDiv.style.backgroundColor = `${colorIndicator}`;
            break;
        case 'S':
            scissorsDiv.style.boxShadow = `0 0 20px 2px ${colorIndicator}`;
            scissorsDiv.style.backgroundColor = `${colorIndicator}`;
            break;
    }
}

function getComputerChoice(){
    const choices = ["R","P","S"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(compChoice){
    showCompChoice(compChoice,0);
    userScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    resultDiv.innerHTML = "You won!";
    setTimeout(resetBackground, 2000);
}

function lose(compChoice){
    showCompChoice(compChoice,1);
    compScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    resultDiv.innerHTML = "You lost!";
    setTimeout(resetBackground, 2000);
}

function draw(compChoice){
    showCompChoice(compChoice,2);
    resultDiv.innerHTML = "It's a draw!";
    setTimeout(resetBackground, 2000);
}



function game(userChoice){
    choicesDiv.style.pointerEvents = "none";
    const compChoice = getComputerChoice();
    
    console.log("user choice => "+ userChoice);
    console.log("comp choice => " + compChoice);

    switch(userChoice + compChoice){
        case "RS":
        case "PR":
        case "SP":
            win(compChoice);
            break;
        case "RP":
        case "PS":
        case "SR":
            lose(compChoice);
            break; 
        case "PP":
        case "RR":
        case "SS":
            draw(compChoice);
            break;       
    }
    
    

}

function resetBackground() {
    rockDiv.style.backgroundColor = '';
    paperDiv.style.backgroundColor = '';
    scissorsDiv.style.backgroundColor = '';
    rockDiv.style.boxShadow = '';
    paperDiv.style.boxShadow = '';
    scissorsDiv.style.boxShadow = '';
    choicesDiv.style.pointerEvents = "auto";
}


function main(){
    
    
    rockDiv.addEventListener('click',function(){
        resetBackground();
        game("R");
        rockDiv.style.backgroundColor = 'white';
    })

    paperDiv.addEventListener('click', function(){
        resetBackground();
        game("P");
        paperDiv.style.backgroundColor = 'white';
    })

    scissorsDiv.addEventListener('click', function(){
        resetBackground();
        game("S");
        scissorsDiv.style.backgroundColor = 'white';
    })
}