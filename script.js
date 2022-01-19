'use strict';

// door imgs
const doorClosed =
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

let ranDoor1;
let ranDoor2;
let ranDoor3;
let numClosedDoors = 3;

const isBot = door => (door.src === doorClosed ? true : false);

// door event
door1.addEventListener('click', () => {
    if (door1.src === doorClosed) {
        door1.src = ranDoor1;
        playDoor();
        // console.log(numClosedDoors);
    }
});
door2.addEventListener('click', () => {
    if (door2.src === doorClosed) {
        door2.src = ranDoor2;
        playDoor();
        // console.log(numClosedDoors);
    }
});
door3.addEventListener('click', () => {
    if (door3.src === doorClosed) {
        door3.src = ranDoor3;
        playDoor();
        // console.log(numClosedDoors);
    }
});

const ranDoorGenerator = () => {
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
ranDoorGenerator();

// win/loss
const playDoor = () => {
    numClosedDoors--;

    if (numClosedDoors === 0) {
        gameOver();
    }
};

const gameOver = () => {};

// restart game
btn.addEventListener('click', () => {
    door1.src = doorClosed;
    door2.src = doorClosed;
    door3.src = doorClosed;

    numClosedDoors = 3;
    ranDoorGenerator();
});

// Counters
