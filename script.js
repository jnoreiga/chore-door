'use strict';

// door imgs
const closedDoor =
    'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
const robotDoor =
    'https://content.codecademy.com/projects/chore-door/images/robot.svg';
const beachImage = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceImage = 'https://content.codecademy.com/projects/chore-door/images/space.svg';

// door elements
const door1 = document.getElementById('door1');
const door2 = document.getElementById('door2');
const door3 = document.getElementById('door3');

// btn elements
const btnRules = document.getElementById('rules-btn');
const btnRestart = document.getElementById('restart-btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// const isBot = door => (door.src === robotDoor ? true : false); [removed to reduce window pollution; only used in one location]
const isClicked = door => (door.src === closedDoor ? false : true);

let currentlyPlaying;
let numClosedDoors;
let currentStreakNum = 0;
let bestStreakNum = 0;
let doors = [robotDoor, beachImage, spaceImage]

const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
const gameBegin = () => {
    numClosedDoors = 3;
    currentlyPlaying = true;
    btnRestart.textContent = 'Good Luck!';

    door1.src = closedDoor;
    door2.src = closedDoor;
    door3.src = closedDoor;
    shuffle(doors);    
};
gameBegin();

// door event
door1.addEventListener('click', () => {
    if (currentlyPlaying && !isClicked(door1)) {
        door1.src = doors[0];
        playDoor(door1);
        // console.log(numClosedDoors);
        // console.log(isBot(door1));
    }
});
door2.addEventListener('click', () => {
    if (currentlyPlaying && !isClicked(door2)) {
        door2.src = doors[1];
        playDoor(door2);
        // console.log(numClosedDoors);
    }
});
door3.addEventListener('click', () => {
    if (currentlyPlaying && !isClicked(door3)) {
        door3.src = doors[2];
        playDoor(door3);
        // console.log(numClosedDoors);
    }
});

// win/loss
const playDoor = door => {
    numClosedDoors--;

    if (numClosedDoors === 0) {
        gameOver('win');
        // } else if (isBot(door)) {
    } else if (door.src === robotDoor) {
        gameOver();
    }
};

const gameOver = status => {
    currentlyPlaying = false;

    const bestStreakEl = document.getElementById('best-streak');
    const currentStreakEl = document.getElementById('current-streak');

    if (status === 'win') {
        btnRestart.textContent = 'You Win! Play Again!';
        currentStreakNum++;
        currentStreakEl.textContent = currentStreakNum;
        bestStreakNum++;
        // console.log(bestStreakEl.value);
        if (bestStreakNum > +bestStreakEl.textContent)
            bestStreakEl.textContent = bestStreakNum;
    } else {
        btnRestart.textContent = 'Game over! Try Again!';
        currentStreakNum = 0;
        currentStreakEl.textContent = currentStreakNum;
        bestStreakNum = 0;
    }
};

// restart game
btnRestart.addEventListener('click', () => {
    if (!currentlyPlaying) gameBegin();
});

// modal rules
btnRules.addEventListener('click', () => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
});

const closeRules = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

overlay.addEventListener('click', closeRules);
