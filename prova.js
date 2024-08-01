console.log("Hello World")

let humanScore=computerScore=0;

function getComputerChoice(){
//let rock,paper,scissor;
 if((Math.random)<=0.333) {
   console.log(`Computer chose rock`)
    return "rock"
 } else if((Math.random)>0.333 && (Math.random(num))<0.667){
   console.log(`Computer chose paper`)
    return "paper"
 } else{
   console.log(`Computer chose scissor`)
    return "scissor"
 }
}

function getHumanChoice (){
  let choice;
  do{
  choice= prompt("Rock, paper, or scissors?");
  choice=choice.toLowerCase();}
  while ((choice !== "rock") && (choice !== "paper") && (choice !== "scissor"));
  return choice
}


      
function playRound(humanChoice,computerChoice){
   if(humanChoice===computerChoice){
      humanScore++, computerScore++;
      console.log("It's a tie!")
   }else if((humanChoice==="rock" && computerChoice==="paper") || (humanChoice==="scissor" && computerChoice==="rock") || (humanChoice==="paper" && computerChoice==="scissor")){
      computerScore++;
      console.log(`You lost! ${computerChoice} beats ${humanChoice}`)
   }else {
      humanScore++;
      console.log(`You win! Your choice, ${humanChoice}, beats ${computerChoice}`)
   }

}




//let choice= prompt("Write a number!");
let morracomp=getComputerChoice();
let morrahum=getHumanChoice();
console.log(morrahum);

playRound(morrahum,morracomp);

