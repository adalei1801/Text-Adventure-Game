console.log('loading...');

const descriptionText = document.querySelector('.adventure-description');
const buttons = document.querySelectorAll('.button');
const textAdventure = [
  {
    description: 'This is Charlie and he is spending a rainy day at home. What shall he do?',
    options: [
      'Read a book',
      'Watch a movie'
    ]
  },
  {
    description: 'Great! Which book?',
    options: [
      'The Crucible by Arthur Miller',
      'The Haunting of Hill House by Shirley Jackson'
    ]
  },
  {
    description: 'He finished The Crucible by Arthur Miller! Now what?',
    options: [
      'Read another book',
      'Go to sleep'
    ]
  }
]

let index = 0;

function setGameState() {
  let gameStateText = textAdventure[index];
  descriptionText.textContent = gameStateText.description;
  for (let i=0, ii=buttons.length; i<ii; i++) {
    let button = buttons[i];
    let buttonText = gameStateText.options[i];

    button.textContent = buttonText;
  }
}

function resetGame() {
  index = 0;

  for (let i=0, ii=buttons.length; i<ii; i++) {
    let button = buttons[i];
    button.removeEventListener('click', resetGame);
    button.addEventListener('click', buttonClick);  
  }

  setGameState();
}

function forward() {
  if (index == textAdventure.length - 1) {
    descriptionText.textContent = 'Thank you for playing!';
    for (let i=0, ii=buttons.length; i<ii; i++) {
      let button = buttons[i];
      button.removeEventListener('click', buttonClick);
      button.textContent = 'Play Again';
      button.addEventListener('click', resetGame);
    }
  }
  index++;
  setGameState();
}

function back() {
  if (index == 0) {
    console.log("can't go back any further!")
    return;
  }
  
  index--;
  setGameState();
}

function buttonClick(event) {
  if (event.target.id == 'first_btn') {
    forward();
  } else {
    back();
  }
}

for (let i=0, ii=buttons.length; i<ii; i++) {
  let button = buttons[i];
  button.addEventListener('click', buttonClick);  
}

setGameState();