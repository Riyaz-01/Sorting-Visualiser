//variables
let input = document.querySelectorAll('input');
let pillars = document.querySelector('.pillars');
let sortBtn = document.querySelectorAll('.sortBtn');
let algos = document.querySelectorAll('.algos div');


let pillarHeight = (window.innerHeight - (document.querySelector('header').offsetHeight + document.querySelector('footer').offsetHeight));
if (pillarHeight < 330)
    pillarHeight = 400;
let algo = 'merge';
let size = 0, speed = 1;
let array = [];
let running = false


//funtions
pillars.style.height = pillarHeight + 'px';
setAlgo = (i) => {
    if (running)
        return;
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
}
changeSize = (e) => {
    let sizeDisplay = document.querySelector('.size');
    size = e.target.value;
    sizeDisplay.innerHTML = size;
    if (running)
        return;
    createArray(size);
}
changeSpeed = (e) => {
    let speedDisplay = document.querySelector('.speed')
    speed = e.target.value;
    speedDisplay.innerHTML = speed;
    if (running)
        return;
    createArray(size);
}
sort = () => {
    if (running)
        return;
    disable();
    let pillarArray = document.querySelectorAll('.pillar');
    delay = 0;
    visualSpeed = 10000 / (10 ** speed);
    switch (algo) {
        case 'merge':
            mergeSort(pillarArray);
            break;
    }
    visualSpeed = 1000;
    enable();
}

//Event listeners

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

//initiating sort
for (e of sortBtn) {
    e.addEventListener('click', sort);
}