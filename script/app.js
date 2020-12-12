
/* VARIABLES */

let input = document.querySelectorAll('input');
//since there are 2 different sort buttons for different sizes this has to be an array 
let sBtns = document.querySelectorAll('.sortBtn');
//array containing all algo buttons
let algos = document.querySelectorAll('.algos button');
let pillars = document.querySelector('.pillars');
//this is max pillar height
let pillarHeight = (window.innerHeight - (document.querySelector('header').offsetHeight + document.querySelector('footer').offsetHeight));
if (pillarHeight < 350)
    pillarHeight = 400;
pillars.style.height = pillarHeight + 'px';

//defualt values
let algo = 'merge';
let size = 0, speed = 1;
let array = [];
//this variable is required for resume() to work
let prevState = 'running';


//FUNTIONS

setAlgo = (i) => {
    for (algo of algos) {
        algo.classList.remove('selectedAlgo');
    }
    i.target.classList.toggle('selectedAlgo');
    algo = i.target.classList[0];
}
createDiv = (i, pillarWidth) => {
    let h = Math.floor(Math.random() * (pillarHeight - 55)) + 20;
    let pillar = document.createElement('div');

    pillar.style.width = pillarWidth + 'px';
    pillar.style.height = h + 'px';

    array[i] = h;

    // Creating Size Label
    let heightLabel = document.createElement('span');
    heightLabel.innerHTML = h;
    heightLabel.style.fontSize = (pillarWidth / 2) + 'px';
    pillar.appendChild(heightLabel);

    pillar.classList.add('pillar');
    return pillar;
}
createArray = (size) => {
    array = [];
    pillars.innerHTML = '';           //removing previous pillars
    let s = size;
    let pillarWidth = 10 * (((80 / 100) * window.innerWidth) / (size + 2));
    if (pillarWidth > 70)
        pillarWidth = 70;
    while (s > 0) {
        pillars.appendChild(createDiv(size - s, pillarWidth));
        --s;
    }
    totalVisual = 0;
    comVisual = 0;
}
changeSize = (e) => {
    let sizeDisplay = document.querySelector('.size');
    size = e.target.value;
    sizeDisplay.innerHTML = size;
    prevState = 'running';
    sBtns.forEach((btn) => {
        btn.innerHTML = 'Sort';
    })
    createArray(size);
}
changeSpeed = (e) => {
    let speedDisplay = document.querySelector('.speed')
    speed = e.target.value;
    speedDisplay.innerHTML = speed;
    sBtns.forEach((btn) => {
        btn.innerHTML = 'Sort';
    })
    prevState = 'running';
    createArray(size);
}
sort = () => {
    //disabling all the buttons during sorting
    disable();
    //overriding previous visualisations delay time
    delay = 0;
    visualSpeed = 10000 / (10 ** speed);
    totalVisual = 0;
    let pillarArray = document.querySelectorAll('.pillar');
    switch (algo) {
        case 'merge':
            mergeSort(pillarArray);
            break;
    }
    prevState = 'running';
}
pause = () => {
    prevState = 'running';
    sBtns.forEach((btn) => {
        btn.innerHTML = "Resume";
    })
    pauseVisuals();
    enable();
}

resume = () => {
    prevState = 'paused';
    let pillarArray = document.querySelectorAll('.pillar');
    for (let i = 0; i < size; ++i)
        array[i] = Number(pillarArray[i].offsetHeight);
    sort();
}


//EVENT LISTENERS

//selecting algos
for (e of algos) {
    e.addEventListener('click', setAlgo);
}

//changing size of the array
for (e of input) {
    if (e.classList.contains('s'))
        e.addEventListener('input', changeSize);
    else
        e.addEventListener('input', changeSpeed);
}

//initiating sort/resume/pause
for (btn of sBtns) {
    btn.addEventListener('click', (e) => {
        e.target.innerHTML === "Pause" ? pause() : e.target.innerHTML === 'Resume' ? resume() : sort();
    });
}