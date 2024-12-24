let userScore =0;
let computerScore =0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector('#user-score');
const comScorePara = document.querySelector('#computer-score');


const genComChoice = () =>  {
    const options = ["stone","paper","scissors"];
     const radIdx = Math.floor(Math.random() *3);
     return options [radIdx];
}

const drawGame = () => {
    console.log("drawGame");
    msg.innerText = "game was draw";
    msg.style.backgroundColor = "yellow";
}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win")
        msg.innerText = `you win ${userChoice}beats ${compChoice}`
    msg.style.backgroundColor = "green";

    }else{
        computerScore++;
        comScorePara.innerText = computerScore;
        console.log("you lose")
        msg.innerText = `you lose ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
        
    }
}

const playGame = (userChoice) =>{
//generate computer choiceco
const compChoice = genComChoice();
console.log(compChoice);
console.log(userChoice);

if(userChoice == compChoice){
    drawGame();
}else{
    let  userWin = true;
    if(userChoice==="stone"){
        //paper scissors
        userWin = compChoice ==="paper" ? false:true;
    }else if(userChoice==="paper"){
        // stone scissors
        userWin = compChoice ==="scissors" ? false:true;
    }else{
        //stone paper
        userWin = compChoice ==="stone" ? false:true;

    }
    showWinner(userWin ,userChoice,compChoice);
}
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });

}) ;