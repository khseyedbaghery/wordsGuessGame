// Variable
const containerAll = document.querySelector('.my-container')
const startBtn = document.querySelector('.start-btn');
const containForm = document.querySelector('.containForm');
const cunterGuess = document.querySelector('.cunter-guess');

const arrayWords = ['new', 'hello', 'blue', 'red', 'flower']

let shuffleArrayWords = [];
arrayWords.forEach(item => {
    shuffleArrayWords.push(shuffle(item));
    // console.log(shuffleArrayWords);
});
//////////////////////////////////////

const word = document.createElement('p');
word.className = 'my-word m-4 text-light';
word.innerText = shuffleArrayWords[0];

const myInput = document.createElement('input');
myInput.className = 'enter-word card p-1 mr-3';
myInput.placeholder = 'enter correct word';
myInput.value = '';

const guessBtn = document.createElement('button');
guessBtn.className = 'my-guess btn btn-primary';
guessBtn.innerText = 'Guess';
guessBtn.type = 'button';

////////////////////////////////////////

startBtn.addEventListener('click', func_start);
guessBtn.addEventListener('click', guess);

function func_start(){

    startBtn.remove();
    containerAll.appendChild(word);
    containForm.appendChild(myInput) + containForm.appendChild(guessBtn);
    containerAll.appendChild(containForm)
    containerAll.appendChild(cunterGuess);
    
}

function shuffle(x){
    let newX = '';
    let shuffleNumber = [];

    for (let j = 0; j < x.length; j++) {
        i = Math.floor(Math.random()*x.length);
        if(shuffleNumber.includes(i)){
            j--;
        }
        else{
            shuffleNumber.push(i);
            newX += x[i];
        }
    }
    // console.log(newX); 
    return newX;
}

let item1 = 0;
let cunter1 = 0;
let flag = 0;
function guess(){

    const inputSelct = document.querySelector('.enter-word')
    word.innerText = shuffleArrayWords[item1];      

    if(flag==1){
        cunter1 = 0;
        cunterGuess.innerText = '';
        inputSelct.value = '';
        flag = 0;
        guessBtn.innerText = 'Guess';
        
    }
    else{
        cunter1 ++;
        cunterGuess.innerText = cunter1 + " Guesses";
        if(inputSelct.value ==  arrayWords[item1]){
            cunterGuess.innerText = "You win with " + cunter1 + " Guesses";
            flag = 1;
            item1++ ;
            if(item1 == shuffleArrayWords.length){
                cunterGuess.innerText += '\n' + "The Words were finished!" + '\n' + "Start from first word.";
                item1 = 0;

            }
            guessBtn.innerText = 'Start';
        }
        else{
            cunterGuess.innerText = 'Wrong' + '\n' + cunter1 + " Guesses";
            
            console.log(flag);
        }
    }
   

}