//declaration

var scores, roundScore, activePlayer, gamePlaying;

init();
// clicking on roll button

document.querySelector('.btn--roll').addEventListener('click', function(){
  
  if(gamePlaying){
    // Random number
  var dice = Math.floor(Math.random() * 6) + 1;

  // display results/dice image
  document.querySelector('.dice').style.display = 'block';
  document.querySelector('.dice').src = 'dice-' + dice + '.png';

  //update round score if dice number is not 1
  if(dice !== 1){
    roundScore += dice;
    document.querySelector('#current--' + activePlayer).textContent = roundScore;
  }
  else{
    changeActivePlayer();  
  }
  }
  
});

// coding for hold function

document.querySelector('.btn--hold').addEventListener('click', function(){
  if(gamePlaying){
    scores[activePlayer] += roundScore;
    document.getElementById('score--' + activePlayer).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 100){
      document.getElementById('name--' + activePlayer).textContent = 'Winner';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player--' + activePlayer).classList.add('player--winner');
      document.querySelector('.player--' + activePlayer).classList.remove('active');
      document.getElementById('current--' + activePlayer).textContent = '0';
      gamePlaying = false;
    }
    else{
      changeActivePlayer();
    }
  } 
});

//code foe new game button
document.querySelector('.btn--new').addEventListener('click', init);


//functions
function changeActivePlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
}



function init(){
  scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;
document.querySelector('.dice').style.display = 'none';

document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';
document.getElementById('name--0').textContent = 'Player 1';
document.getElementById('name--1').textContent = 'Player 2';

document.querySelector('.player--0').classList.remove('player--winner');
document.querySelector('.player--1').classList.remove('player--winner');
document.querySelector('.player--0').classList.remove('player--active');
document.querySelector('.player--1').classList.remove('player--active');

document.querySelector('.player--0').classList.add('player--active');


}