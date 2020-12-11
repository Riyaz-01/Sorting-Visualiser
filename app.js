//variables
let input=document.querySelectorAll('input');
let pillars=document.querySelector('.pillars');
let sortBtn=document.querySelector('.sortBtn');
let algos=document.querySelectorAll('.algos div');
let pillarHeight=(window.innerHeight-(document.querySelector('header').offsetHeight+document.querySelector('footer').offsetHeight));
if(pillarHeight<250)
    pillarHeight=250;
let algo=null;
let size=0;
let array=[];

//funtions
pillars.style.height=pillarHeight+'px';
setAlgo=(i)=>{
    for(algo of algos){
        algo.classList.remove('selectedAlgo');
    }
    i.target.classList.toggle('selectedAlgo');
    algo=i.target.classList[0];
}
createDiv=(i,pillarWidth)=>{
    let h=Math.floor(Math.random()*(pillarHeight-55)) +20;
    let pillar=document.createElement('div');
    
    pillar.style.width=pillarWidth+ 'px';
    pillar.style.height=h+'px';

    array[i]=h;

    let heightLabel=document.createElement('span');
    heightLabel.innerHTML=h;
    heightLabel.style.fontSize=(pillarWidth/2)+'px';
    pillar.appendChild(heightLabel);

    return pillar;
}
createArray=(size)=>{
    array=[];
    pillars.innerHTML='';           //removing previous pillars
    let s=size;
    let pillarWidth=10*(((80/100)*window.innerWidth)/(size+2));
    if(pillarWidth>70)
        pillarWidth=70;
    while(s>0){
        pillars.appendChild(createDiv(size-s,pillarWidth));
        --s;
    }
}
changeSize=(e)=>{
    let sizeDisplay=document.querySelector('.size');
    size=e.target.value;
    sizeDisplay.innerHTML=size;
    createArray(size);
}
changeSpeed=(e)=>{
    let speedDisplay=document.querySelector('.speed')
    let speed=e.target.value;
    speedDisplay.innerHTML=speed;
}
sort=()=>{
    switch(algo){
        case 'merge':
            mergeSort()
            break;
    }
}

//Event listeners
//selecting algos
for(i of algos){
    i.addEventListener('click',setAlgo);
}
//changing size of the array
for(e of input){
    if(e.classList.contains('s'))
        e.addEventListener('input',changeSize);
    else
        e.addEventListener('input',changeSpeed);
}
//initiating sort
sortBtn.addEventListener('click',sort);