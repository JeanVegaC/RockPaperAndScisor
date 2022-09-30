"use strick";

const cardSup = document.querySelectorAll('.sup'),
cardInf = document.querySelectorAll('.inf'),
gameTitle = document.querySelector('.game-title'),
gameButton = document.querySelector('.game-button');

let player2, 
player1; // Valor de cartas de los jugadores

/* Evento de boton play */

gameButton.addEventListener('click',()=>{
    play();
    gameButton.textContent = 'Play Again';
    gameButton.addEventListener('click',()=>{
        location.reload();
    })
})

/* Funcion para mostrar las cartas de los jugadores */

const showCard = (n,NroCard)=>{
  
    if(NroCard == undefined){
        
        let card;
        if(n == 0) {
            card = cardSup
        }else{
            card = cardInf;
        }

        card.forEach( (e,i,a) =>{    
            e.addEventListener('click',()=>{
                card.forEach((e,i,a) =>{
                    card[i].classList.remove('active');
                    card[i].classList.add('desactive');
                })
                card[i].classList.remove('desactive');
                card[i].classList.add('active');  
                player1 = i;
                setTimeout(() => {
                    checkCard()
                }, 2000);

                setTimeout(() => {
                    revealCard();
                }, 2000);
            })
        })
    }else{
        cardInf.forEach((e,i,a) =>{
            cardInf[i].classList.remove('active');
            cardInf[i].classList.add('desactive');
        })
            cardInf[NroCard].classList.remove('desactive');
            cardInf[NroCard].classList.add('active');  
            
            player2 = NroCard;
    } 
}

/* Mostrar carta de rival */
const checkCard = ()=>{
    
    NroCard = Math.round(Math.random()*2);
    showCard(1,NroCard)
}

/* Cambia de titulo */
const changeTitle = ()=>{

    // gameTitle.innerHTML = `Comencemos ....`;
    setTimeout(() => {
        gameTitle.innerHTML = `Elige tu carta`;
    }, 500);
}

/* Inicia el juego */
const play = ()=>{
    changeTitle();
    showCard(0);
}    

/* Procedimiento para hallar el ganador */
const winner = ()=>{
    const img = document.getElementsByTagName('img');
    setTimeout(() => {
        if(img[player2+4].src == 'https://rock-paper-and-scisor.vercel.app/assets/img/Piedra.jpg.png'){
            if(player1 == 0){
                showWinner(0);
            }else if(player1 == 1){
                showWinner(1);
            }else showWinner(2);            
        }else if(img[player2+4].src == 'https://rock-paper-and-scisor.vercel.app/assets/img/Papel.jpg.png'){
            if(player1 == 0){
                showWinner(2);
            }else if(player1 == 1){
                showWinner(0);
            }else showWinner(1);
        }else if(img[player2+4].src == 'https://rock-paper-and-scisor.vercel.app/assets/img/Tijera.jpg.png'){
            if(player1 == 0){
                showWinner(1);
            }else if(player1 == 1){
                showWinner(2);
            }else showWinner(0);
        }else{
            console.log('BUGGED')
        }
    }, 1000);
    
}

/* funcion para mostrar al ganador */
const showWinner = (n)=>{
    let tmp = n;

    const overlay = document.querySelector('.game-overlay'),
    winner = document.querySelector('.winner'),
    imgWinner = document.querySelector('.img-winner'),
    titleWinner = document.querySelector('.title-winner');

    if(tmp == 0){
        titleWinner.textContent = `Empate :/`;
        imgWinner.src = 'https://i.pinimg.com/originals/50/d3/fe/50d3fe7437683844ba91130b8200b02c.png';
    }else if(tmp == 1){
        titleWinner.textContent = `Ganaste :D`;
        imgWinner.src = 'https://i.pinimg.com/564x/db/2a/24/db2a242eb36a73aa0a1dc115320dda85.jpg';
    }else{
        titleWinner.textContent = `Perdiste :(`;
        imgWinner.src = 'https://i.pinimg.com/736x/70/33/65/703365ee5679cf81a63c9e59b4a50172.jpg';
    }
    
    setTimeout(() => {
        winner.classList.add('show-winner');
        overlay.classList.add('show-overlay');
    }, 1000);
    console.log('Entre')
}

/* Funcion para revelar las cartas del rival */
const revealCard = ()=>{
   const img = document.getElementsByTagName('img');
   
   const listNum = []
   setTimeout(() => {
        listNum.push(4); 
    }, Math.random()*200);
   
    setTimeout(() => {
        listNum.push(5);
    }, Math.random()*200);
   
    setTimeout(() => {
        listNum.push(6);
    }, Math.random()*200);
    
    setTimeout(() => {
    img[listNum[0]].src = 'assets/img/Piedra.jpg.png';
    img[listNum[1]].src = 'assets/img/Papel.jpg.png';
    img[listNum[2]].src = 'assets/img/Tijera.jpg.png';
    }, 1000);
    
    winner();
    console.log(player1);
    console.log(player2);
}


