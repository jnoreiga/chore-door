'use strict';

// door imgs
const closedDoor =
    'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
const robotDoor =
    'https://content.codecademy.com/projects/chore-door/images/robot.svg';
const beachDoor =
    'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceDoor =
    'https://content.codecademy.com/projects/chore-door/images/space.svg';

// door elements
const door1 = document.getElementById('door1');
const door2 = document.getElementById('door2');
const door3 = document.getElementById('door3');
const btn = document.querySelector('button');

const isBot = door => (door.src === robotDoor ? true : false);
const isClicked = door => (door.src === closedDoor ? false : true);

let ranDoor1;
let ranDoor2;
let ranDoor3;
let currentlyPlaying;
let numClosedDoors;
let currentStreak = 0;
let bestStreak = 0;

const gameBegin = () => {
    numClosedDoors = 3;
    currentlyPlaying = true;
    btn.textContent = 'Good Luck!';

    door1.src = closedDoor;
    door2.src = closedDoor;
    door3.src = closedDoor;

    const ranNum = Math.floor(Math.random() * 3);
    if (ranNum === 0) {
        ranDoor1 = robotDoor;
        ranDoor2 = beachDoor;
        ranDoor3 = spaceDoor;
    } else if (ranNum === 1) {
        ranDoor1 = beachDoor;
        ranDoor2 = robotDoor;
        ranDoor3 = spaceDoor;
    } else {
        ranDoor1 = spaceDoor;
        ranDoor2 = beachDoor;
        ranDoor3 = robotDoor;
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
    } else if (isBot(door)) {
        gameOver();
    }
};

const gameOver = status => {
    currentlyPlaying = false;

    if (status === 'win') {
        btn.textContent = 'You Win! Play Again!';
    } else {
        btn.textContent = 'Game over! Try Again!';
    }
};

// restart game
btn.addEventListener('click', () => {
    if (!currentlyPlaying) gameBegin();
});

// Counters
