
/* VARIABLES */

let input = document.querySelectorAll('input');
//since there are 2 different sort buttons and generate buttons for different sizes this has to be an array 
let sBtns = document.querySelectorAll('.sortBtn');
let gBtns = document.querySelectorAll('.generate');
let sec = document.querySelector('.sec');
let mili = document.querySelector('.mili');
//array containing all algo buttons
let algos = document.querySelectorAll('.algos button');
let pillars = document.querySelector('.pillars');
//this is max pillar height
let pillarsHeight = (window.innerHeight - (document.querySelector('header').offsetHeight + document.querySelector('footer').offsetHeight));
if (pillarsHeight < 350)
    pillarsHeight = 400;
pillars.style.height = pillarsHeight + 'px';

//defualt values
let algo = 'quick';
let size = 20, speed = 3;
let array = [];


//FUNTIONS
window.onload = () => {
    createArray();
};
setAlgo = (i) => {
    defaultColor();
    for (algo of algos) {
        algo.classList.remove('selectedAlgo');
    }
    i.target.classList.toggle('selectedAlgo');
    algo = i.target.classList[0];
}
createDiv = (i, pillarWidth) => {
    let h = Math.floor(Math.random() * (pillarsHeight - 40)) + 20;
    let pillar = document.createElement('div');

    pillar.style.width = pillarWidth + 'px';
    pillar.style.height = h + 'px';

    array[i] = h;

    // Creating Size Label
    let heightLabel = document.createElement('span');
    heightLabel.innerHTML = h;
    heightLabel.style.fontSize = (pillarWidth / 2) > 20 ? 20 + 'px' : (pillarWidth / 2) + 'px';
    pillar.appendChild(heightLabel);

    pillar.classList.add('pillar');
    return pillar;
}
createArray = () => {
    array = [];
    pillars.innerHTML = '';           //removing previous pillars
    let s = size;
    let pillarWidth = ((80 / 100) * window.innerWidth) / (Number(s) + 2);
    if (pillarWidth > 70)
        pillarWidth = 70;
    while (s > 0) {
        pillars.appendChild(createDiv(size - s, pillarWidth));
        --s;
    }
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
    defaultColor();
    let speedDisplay = document.querySelector('.speed')
    speed = e.target.value;
    speedDisplay.innerHTML = speed;
}
sort = () => {
    defaultColor();
    if (size == 0)
        return;
    //disabling all the buttons during sorting
    disable();
    //overriding previous visualisations delay time
    delay = 0;
    visualSpeed = 10000 / (10 ** speed);
    vNum = 0;
    stopVars = [];
    let pillarArray = document.querySelectorAll('.pillar');
    //Starting timer
    mili.innerHTML = 0;
    sec.innerHTML = 0;
    timerStart();
    switch (algo) {
        case 'merge':
            mergeSort(pillarArray);
            break;
        case 'bubble':
            bubbleSort(pillarArray);
            break;
        case 'selection':
            selectionSort(pillarArray);
            break;
        case 'quick':
            quickSort(pillarArray);
            break;
        case 'radix':
            radixSort(pillarArray);
            break;
        case 'heap':
            heapSort(pillarArray);
            break;
        default: alert('No Algo Selected');
    }
    enable(delay, pillarArray);
}

stop = () => {
    stopVisuals();
    enable(0);
    defaultColor();
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
    btn.addEventListener('click', () => {
        btn.innerHTML == 'Sort' ? sort() : stop();
    });
}

//Generate botton
gBtns.forEach((btn) => {
    btn.addEventListener('click', createArray);
})