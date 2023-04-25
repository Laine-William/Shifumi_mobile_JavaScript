const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const play = document.querySelector('.play');
const reset = document.querySelector('.reset');


//--------------------Sound-------------------------------
const ring = () => {
    const audio = new Audio();
    audio.scr = "../sound/music.mp3";
    audio.play();
};



//------------------Selections----------------
rock.addEventListener('click', () => {
    
    rock.innerHTML = '0';
    paper.innerHTML = '';
    scissors.innerHTML = '';
    rock.classList.add('validBorder');
    rock.classList.remove('border');
    paper.classList.remove('validBorder');
    scissors.classList.remove('validBorder');
    ring();
})

paper.addEventListener('click', () => {

    paper.innerHTML = '1';
    rock.innerHTML = '';
    scissors.innerHTML = '';
    paper.classList.add('validBorder');
    paper.classList.remove('border');
    scissors.classList.remove('validBorder');
    rock.classList.remove('validBorder');
})

scissors.addEventListener('click', () => {

    scissors.innerHTML = '2';
    paper.innerHTML = '';
    rock.innerHTML = '';
    scissors.classList.add('validBorder');
    scissors.classList.remove('border');
    rock.classList.remove('validBorder');
    paper.classList.remove('validBorder');
})

//---------------------scoreHistory-------------------------------
let scoreHistory = document.getElementById('scoreHistory');

let resultRock = document.querySelector('.resultRock');
let resultPaper = document.querySelector('.resultPaper');
let resultScissors = document.querySelector('.resultScissors');

let resultRock1 = document.querySelector('.resultRock1');
let resultPaper1 = document.querySelector('.resultPaper1');
let resultScissors1 = document.querySelector('.resultScissors1');

//-----------------------ScoreGame-----------------------------
let player1 = 0;
let player2 = 0;
//----------------------TextWIN------------------------------
let win = document.getElementById('win');
//---------------------TextDawn------------------------------
let dawn = document.getElementById('dawn');
//--------------------TextLoose------------------------------
let loose = document.getElementById('loose');
//---------------------PeachWIN------------------------------
let peach = document.getElementById('peach');
//----------------------BrowerJrLoose------------------------
let browerJr = document.getElementById('browerJr');
//-----------------------Koopa--------------------------------
let koopa = document.getElementById('koopa');

//--------------------GAME'CLICK'-----------------------------

play.addEventListener('click', () => {
    let computer = Math.floor(Math.random() * 3); // 0, 1 or 2
    //rock--------------------------

    if (rock.innerText) {

        if ((rock.innerText == 0 && computer == 2)) {
            setTimeout(() => {
                peach.style.bottom = "12vw";
            }, 0)
            setTimeout(() => {
                peach.style.bottom = "-60vw"
            }, 2500)
            setTimeout(() => {
                win.style.bottom = "12vw";
            }, 500)
            setTimeout(() => {
                win.style.bottom = "-60vw"
            }, 2500)

            //------------------scoreHistory
            setTimeout(() => {
                resultRock.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultScissors.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultPaper.style.opacity = "0%";
            }, 0)
            //------------------scoreHistory
            //------------------scoreHistoryIA
            setTimeout(() => {
                resultRock1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultScissors1.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultPaper1.style.opacity = "0%";
            }, 0)
            //------------------scoreHistoryIA
            player1 = player1 + 1;
            document.getElementById('player1').innerHTML = player1;

        } else if ((rock.innerText == 0 && computer == 1)) {
            setTimeout(() => {
                browerJr.style.bottom = "20vw";
            }, 0)
            setTimeout(() => {
                browerJr.style.bottom = "-35vw"
            }, 2500)
            setTimeout(() => {
                loose.style.bottom = "10vw";
            }, 0)
            setTimeout(() => {
                loose.style.bottom = "-35vw"
            }, 2500)
            //------------------scoreHistory
            setTimeout(() => {
                resultRock.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultScissors.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultPaper.style.opacity = "0%";
            }, 0)
            //------------------scoreHistory
            //------------------scoreHistoryIA
            setTimeout(() => {
                resultRock1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultScissors1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultPaper1.style.opacity = "100%";
            }, 0)
            //------------------scoreHistoryIA
            player2 = player2 + 1;
            document.getElementById('player2').innerHTML = player2

        } else if ((rock.innerText == 0 && computer == 0)) {
            setTimeout(() => {
                koopa.style.left = "40vw";
            }, 0)
            setTimeout(() => {
                koopa.style.left = "-60vw"
            }, 2500)
            setTimeout(() => {
                dawn.style.right = "29vw";
            }, 0)
            setTimeout(() => {
                dawn.style.right = "-60vw"
            }, 2500)
            //------------------scoreHistory
            setTimeout(() => {
                resultRock.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultScissors.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultPaper.style.opacity = "0%";
            }, 0)
            //------------------scoreHistory
            //------------------scoreHistoryIA
            setTimeout(() => {
                resultRock1.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultScissors1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultPaper1.style.opacity = "0%";
            }, 0)
            //------------------scoreHistoryIA
        }
        else alert('none P')
    }
})

//paper--------------------------

play.addEventListener('click', () => {
    var computer = Math.floor(Math.random() * 3); // 0, 1 or 2
    if (paper.innerText) {

        if ((paper.innerText == 1 && computer == 2)) {
            setTimeout(() => {
                browerJr.style.bottom = "20vw";
            }, 0)
            setTimeout(() => {
                browerJr.style.bottom = "-35vw"
            }, 2500)
            setTimeout(() => {
                loose.style.bottom = "10vw";
            }, 0)
            setTimeout(() => {
                loose.style.bottom = "-35vw"
            }, 2500)
            //------------------scoreHistory
            setTimeout(() => {
                resultRock.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultScissors.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultPaper.style.opacity = "100%";
            }, 0)
            //------------------scoreHistory
            //------------------scoreHistoryIA
            setTimeout(() => {
                resultRock1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultScissors1.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultPaper1.style.opacity = "0%";
            }, 0)
            //------------------scoreHistoryIA
            player2 = player2 + 1;
            document.getElementById('player2').innerHTML = player2
        } else if ((paper.innerText == 1 && computer == 1)) {
            setTimeout(() => {
                koopa.style.left = "40vw";
            }, 0)
            setTimeout(() => {
                koopa.style.left = "-60vw"
            }, 2500)
            setTimeout(() => {
                dawn.style.right = "29vw";
            }, 0)
            setTimeout(() => {
                dawn.style.right = "-60vw"
            }, 2500)
            //------------------scoreHistory
            setTimeout(() => {
                resultRock.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultScissors.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultPaper.style.opacity = "100%";
            }, 0)
            //------------------scoreHistory
            //------------------scoreHistoryIA
            setTimeout(() => {
                resultRock1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultScissors1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultPaper1.style.opacity = "100%";
            }, 0)
            //------------------scoreHistoryIA
        } else if ((paper.innerText == 1 && computer == 0)) {
            setTimeout(() => {
                peach.style.bottom = "12vw";
            }, 0)
            setTimeout(() => {
                peach.style.bottom = "-60vw"
            }, 2500)
            setTimeout(() => {
                win.style.bottom = "12vw";
            }, 500)
            setTimeout(() => {
                win.style.bottom = "-60vw"
            }, 2500)
            //------------------scoreHistory
            setTimeout(() => {
                resultRock.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultScissors.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultPaper.style.opacity = "100%";
            }, 0)
            //------------------scoreHistory
            //------------------scoreHistoryIA
            setTimeout(() => {
                resultRock1.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultScissors1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultPaper1.style.opacity = "0%";
            }, 0)
            //------------------scoreHistoryIA
            player1 = player1 + 1;
            document.getElementById('player1').innerHTML = player1
        }
        else alert('none P')
    }
})

//scissors--------------------------

play.addEventListener('click', () => {
    var computer = Math.floor(Math.random() * 3); // 0, 1 or 2
    if (scissors.innerText) {

        if ((scissors.innerText == 2 && computer == 2)) {
            setTimeout(() => {
                koopa.style.left = "40vw";
            }, 0)
            setTimeout(() => {
                koopa.style.left = "-60vw"
            }, 2500)
            setTimeout(() => {
                dawn.style.right = "29vw";
            }, 0)
            setTimeout(() => {
                dawn.style.right = "-60vw"
            }, 2500)
            //------------------scoreHistory
            setTimeout(() => {
                resultRock.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultScissors.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultPaper.style.opacity = "0%";
            }, 0)
            //------------------scoreHistory
            //------------------scoreHistoryIA
            setTimeout(() => {
                resultRock1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultScissors1.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultPaper1.style.opacity = "0%";
            }, 0)
            //------------------scoreHistoryIA
        } else if ((scissors.innerText == 2 && computer == 1)) {
            setTimeout(() => {
                peach.style.bottom = "12vw";
            }, 0)
            setTimeout(() => {
                peach.style.bottom = "-60vw"
            }, 2500)
            setTimeout(() => {
                win.style.bottom = "12vw";
            }, 500)
            setTimeout(() => {
                win.style.bottom = "-60vw"
            }, 2500)
            //------------------scoreHistory
            setTimeout(() => {
                resultRock.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultScissors.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultPaper.style.opacity = "0%";
            }, 0)
            //------------------scoreHistory
            //------------------scoreHistoryIA
            setTimeout(() => {
                resultRock1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultScissors1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultPaper1.style.opacity = "100%";
            }, 0)
            //------------------scoreHistoryIA
            player1 = player1 + 1;
            document.getElementById('player1').innerHTML = player1
        } else if ((scissors.innerText == 2 && computer == 0)) {
            setTimeout(() => {
                browerJr.style.bottom = "20vw";
            }, 0)
            setTimeout(() => {
                browerJr.style.bottom = "-35vw"
            }, 2500)
            setTimeout(() => {
                loose.style.bottom = "10vw";
            }, 0)
            setTimeout(() => {
                loose.style.bottom = "-35vw"
            }, 2500)
            //------------------scoreHistory
            setTimeout(() => {
                resultRock.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultScissors.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultPaper.style.opacity = "0%";
            }, 0)
            //------------------scoreHistory
            //------------------scoreHistoryIA
            setTimeout(() => {
                resultRock1.style.opacity = "100%";
            }, 0)
            setTimeout(() => {
                resultScissors1.style.opacity = "0%";
            }, 0)
            setTimeout(() => {
                resultPaper1.style.opacity = "0%";
            }, 0)
            //------------------scoreHistoryIA
            player2 = player2 + 1;
            document.getElementById('player2').innerHTML = player2
        }
        else alert('none P')
    }
})

//--------------------scoreHistory--------


