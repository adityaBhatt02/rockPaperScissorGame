let result = document.querySelectorAll("p")[0];
let userScore_span = document.querySelector("#user-score");
let compScore_span = document.querySelector("#comp-score");

let [userScore , compScore] = [0,0];

let choices = [`rock`, `paper`, `scissors`];
let randomNumber = Math.floor(Math.random() * choices.length);
let computerChoice = choices[randomNumber];

let userChoice;

let userClickedR = document.querySelector("#r").addEventListener("click", () => {
    userChoice = choices[0];
    
    if (userChoice == `rock` && computerChoice == `rock`) {
        result.innerHTML = `🚩Draw 🚩!`;
        document.querySelector("#r").classList.add("grey-glow");
        setTimeout(()=>{
            document.querySelector("#r").classList.remove("grey-glow")
        },200);


    } else if (userChoice == `rock` && computerChoice == `paper`) {
        result.innerHTML = `Paper covers rock you Lose 💩!`;
        document.querySelector("#r").classList.add("red-glow");
        setTimeout(()=>{
            document.querySelector("#r").classList.remove("red-glow")
        },200);
        compScore++;
        compScore_span.innerHTML = compScore;
    } else if (userChoice == `rock` && computerChoice == `scissors`) {

        document.querySelector("#r").classList.add("green-glow");
   setTimeout(()=>{
    document.querySelector("#r").classList.remove("green-glow")}
    ,200);
        result.innerHTML = `Rock crushes scissors you Win 🚩!`;
     
        userScore++;
        userScore_span.innerHTML = userScore;
    }

})

let userClickedP = document.querySelector("#p").addEventListener("click", () => {
    userChoice = choices[1];
    if (userChoice == `paper` && computerChoice == `paper`) {
        result.innerHTML = `🚩Draw 🚩!`;
        document.querySelector("#p").classList.add("grey-glow");
setTimeout(()=>{
    document.querySelector("#p").classList.remove("grey-glow")}
    ,200);  
    } else if (userChoice == `paper` && computerChoice == `rock`) {
        result.innerHTML = `Paper covers rock you Win 🚩!`;
        document.querySelector("#p").classList.add("green-glow");
setTimeout(()=>{
    document.querySelector("#p").classList.remove("green-glow")}
    ,200);   
        userScore++;
        userScore_span.innerHTML = userScore;
    } else if (userChoice == `paper` && computerChoice == `scissors`) {
        document.querySelector("#p").classList.add("red-glow");
        setTimeout(()=>{
            document.querySelector("#p").classList.remove("red-glow")
        },200);
        result.innerHTML = `Scissor cuts the paper you Lose 💩!`;
        compScore++;
        compScore_span.innerHTML = compScore;
    }
})

let userClickedS = document.querySelector("#s").addEventListener("click", () => {
    userChoice = choices[2];
    if (userChoice == `scissors` && computerChoice == `scissors`) {
        result.innerHTML = `🚩Draw 🚩!`;
        document.querySelector("#s").classList.add("grey-glow");
        setTimeout(()=>{
            document.querySelector("#s").classList.remove("grey-glow")
        },200);
    } else if (userChoice == `scissors` && computerChoice == `rock`) {
        result.innerHTML = `Rock crushes scissors you Lose 💩!`;
        document.querySelector("#s").classList.add("red-glow");
        setTimeout(()=>{
            document.querySelector("#s").classList.remove("red-glow")
        },200);
        compScore++;
        compScore_span.innerHTML = compScore;
    } else if (userChoice == `scissors` && computerChoice == `paper`) {
        result.innerHTML = `Scissor cuts the paper you Win 🚩!`;
        document.querySelector("#s").classList.add("green-glow");
        setTimeout(()=>{
            document.querySelector("#s").classList.remove("green-glow")}
            ,200);
        userScore++;
        userScore_span.innerHTML = userScore;
    }
})
