let nbr1 = 1;
let nbr2 = 1;
let wins = 0;
let losses = 0;
let games = [];
let val;
let point = 0;

let die1;
let die2 ;

const PlayCraps = () => {
    rollDie();
    if (val ===7 || val === 11){
        wins++
        games.push[val];
        displaywin();
        displaytotal();
    }
    else if (val ===2 || val === 3|| val === 12){
        losses++
        displayLoss();
        displaytotal();
        games.push[val];
    }
    else {
        PlayCraps2()
    }
   
}
const PlayCraps2 = () => {
    games.push[val];
    val = point;
    rollDie();
    if (val === point){
        wins++
        games.push[val];
        displaywin();
               displaytotal();
    }
    else if (val ===7){
        losses++
        displayLoss();
        displaytotal();
        games.push[val];
    }
    else {
        games.push[val];
        PlayCraps2()
    }
   
}



// const displayresultswin = () =>
// {
//     let tbody = document.getElementById("tbody");
//     tbody.style.fontWeight = "bold";
//     tbody.innerHTML = "";
//     `$Winner roll: ${val} number of wins: ${wins} number of losses: ${losses}
//     number of games: ${wins+losses}`;
  
    

// }

const displaytotal = () => {
 inpCtrl = document.getElementById("Total").innerText = wins+losses
}

const displaywin = () => {
     inpCtrl = document.getElementById("Win").innerText = nbr1++
    document.getElementById('dad').textContent = `Winner roll: ${[val]} | Precentage of Wins ${(wins/losses)}`
  
       
}

const displayLoss = () => {
     inpCtrl = document.getElementById("Loss").innerText = nbr2++
    document.getElementById('dad').textContent = `Loser roll: ${[val]}  | Precentage of Losses ${losses/wins}`

       
}



const rollDie = () => {
    let play1 = Math.floor(Math.random() * 6) + 1;
    let play2 = Math.floor(Math.random() * 6) + 1;
    val = play1 + play2;
    return val
}

// const script = document.createElement('script');
// script.setAttribute(
//     'src',
//     'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
//   );

//   script.setAttribute('async', '');

//   script.onload = function handleScriptLoaded() {
//     console.log('script has loaded');
  
//     document.getElementById('tbody').textContent = "";
//   };
  
//   script.onerror = function handleScriptError() {
//     console.log('error loading script');
//   };
  
//   document.head.appendChild(script);