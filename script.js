'use strict';

const door1 = document.getElementById('door1');
const door2 = document.getElementById('door2');
const door3 = document.getElementById('door3');

let ranDoor1;
let ranDoor2;
let ranDoor3;

// door event
door1.addEventListener('click', () => {
    door1.src = ranDoor1;
});
door2.addEventListener('click', () => {
    door2.src = ranDoor2;
});
door3.addEventListener('click', () => {
    door3.src = ranDoor3;
});

const ranNum = Math.floor(Math.random() * 3);

if (ranNum === 0) {
    ranDoor1 =
        'https://content.codecademy.com/projects/chore-door/images/robot.svg';
    ranDoor2 =
        'https://content.codecademy.com/projects/chore-door/images/beach.svg';
    ranDoor3 =
        'https://content.codecademy.com/projects/chore-door/images/space.svg';
} else if (ranNum === 1) {
    ranDoor1 =
        'https://content.codecademy.com/projects/chore-door/images/beach.svg';
    ranDoor2 =
        'https://content.codecademy.com/projects/chore-door/images/robot.svg';
    ranDoor3 =
        'https://content.codecademy.com/projects/chore-door/images/space.svg';
} else {
    ranDoor1 =
        'https://content.codecademy.com/projects/chore-door/images/space.svg';
    ranDoor2 =
        'https://content.codecademy.com/projects/chore-door/images/beach.svg';
    ranDoor3 =
        'https://content.codecademy.com/projects/chore-door/images/robot.svg';
}
