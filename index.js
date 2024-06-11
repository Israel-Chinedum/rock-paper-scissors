let result = document.querySelector('#result');
let human = document.querySelector('#human');
let computer = document.querySelector('#computer');
const btn = document.querySelector('#btn-box');

let compChoice;

function Color(){
    return{

        red(looser){
         looser.style.color = 'red';
        },

        green(winner){
         winner.style.color = 'green';
        }
    }
} const color = new Color();


function random(){
    return Math.floor(Math.random()*3)
}

function computerAnswer(){

    if(random() == 0){
        compChoice = 'Rock';
    }else if(random() == 1){
        compChoice = 'Paper';
    } else{
        compChoice = 'Scissors';
    }
}

function display(e){
    human.innerHTML = e.target.value;
    computer.innerHTML = compChoice;
}

function ref(){
    if(compChoice == human.innerHTML){
        result.innerHTML = 'Draw!';
        color.green(computer); color.green(human);
    }

    if(compChoice == 'Rock' && human.innerHTML == 'Paper'){
        result.innerHTML = 'You win!';
        color.green(human); color.red(computer);
    }

    if(compChoice == 'Scissors' && human.innerHTML == 'Paper'){
        result.innerHTML = 'You loose!';
        color.green(computer); color.red(human);
    }

    if(compChoice == 'Rock' && human.innerHTML == 'Scissors'){
        result.innerHTML = 'You loose!';
        color.green(computer); color.red(human);
    }

    if(compChoice == 'Paper' && human.innerHTML == 'Scissors'){
        result.innerHTML = 'You win!';
        color.green(human); color.red(computer);
    }

    if(compChoice == 'Scissors' && human.innerHTML == 'Rock'){
        result.innerHTML = 'You win!';
        color.green(human); color.red(computer);
    }

    if(compChoice == 'Paper' && human.innerHTML == 'Rock'){
        result.innerHTML = 'You loose!';
        color.green(computer); color.red(human);
    }

}

btn.addEventListener('click', (e)=>{
    random()
    computerAnswer()
    display(e);
    ref()
});
