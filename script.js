'use strict';

////////// reduce window pollution? //////////

// door imgs
const closedDoor =
    'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
const robotDoor =
    'https://content.codecademy.com/projects/chore-door/images/robot.svg';

// door elements
const door1 = document.getElementById('door1');
const door2 = document.getElementById('door2');
const door3 = document.getElementById('door3');

// btn elements
const btnRules = document.getElementById('rules-btn');
const btnRestart = document.getElementById('restart-btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// counter elements
const bestStreakEl = document.getElementById('best-streak');
const currentStreakEl = document.getElementById('current-streak');

// const isBot = door => (door.src === robotDoor ? true : false); [removed to reduce window pollution; only used in one location]
const isClicked = door => (door.src === closedDoor ? false : true);

let ranDoor1;
let ranDoor2;
let ranDoor3;
let currentlyPlaying;
let numClosedDoors;
let currentStreakNum = 0;
let bestStreakNum = 0;

const gameBegin = () => {
    numClosedDoors = 3;
    currentlyPlaying = true;
    btnRestart.textContent = 'Good Luck!';

    door1.src = closedDoor;
    door2.src = closedDoor;
    door3.src = closedDoor;

    const arrDoors = [
        robotDoor,
        'https://content.codecademy.com/projects/chore-door/images/beach.svg',
        'https://content.codecademy.com/projects/chore-door/images/space.svg',
    ];
    const theDoors = [];

    const thePush = arr => {
        const newRan = Math.floor(Math.random() * arrDoors.length);
        theDoors.push(arr.splice(newRan, 1));
    };
    thePush(arrDoors);
    thePush(arrDoors);
    thePush(arrDoors);

    const ranNum = Math.floor(Math.random() * 6);

    if (ranNum === 0) {
        ranDoor1 = theDoors[0];
        ranDoor2 = theDoors[1];
        ranDoor3 = theDoors[2];
    } else if (ranNum === 1) {
        ranDoor1 = theDoors[0];
        ranDoor2 = theDoors[2];
        ranDoor3 = theDoors[1];
    } else if (ranNum === 2) {
        ranDoor1 = theDoors[1];
        ranDoor2 = theDoors[0];
        ranDoor3 = theDoors[2];
    } else if (ranNum === 3) {
        ranDoor1 = theDoors[1];
        ranDoor2 = theDoors[2];
        ranDoor3 = theDoors[0];
    } else if (ranNum === 4) {
        ranDoor1 = theDoors[2];
        ranDoor2 = theDoors[0];
        ranDoor3 = theDoors[1];
    } else {
        ranDoor1 = theDoors[2];
        ranDoor2 = theDoors[1];
        ranDoor3 = theDoors[0];
    }
};
gameBegin();

// door event
door1.addEventListener('click', () => {
    if (currentlyPlaying && !isClicked(door1)) {
        door1.src = ranDoor1;
        playDoor(door1);
        // console.log(numClosedDoors);
        // console.log(isBot(door1));
    }
});
door2.addEventListener('click', () => {
    if (currentlyPlaying && !isClicked(door2)) {
        door2.src = ranDoor2;
        playDoor(door2);
        // console.log(numClosedDoors);
    }
});
door3.addEventListener('click', () => {
    if (currentlyPlaying && !isClicked(door3)) {
        door3.src = ranDoor3;
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
