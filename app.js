//variables
let input=document.querySelectorAll('input');
let sizeDisplay=document.querySelector('.size');
let pillars=document.querySelector('.pillars')
let sortBtn=document.querySelector('.sortBtn');
let algos=document.querySelectorAll('.algos div');
let algo=null;
let array=[];

//funtions
setAlgo=(i)=>{
    for(algo of algos){
        algo.classList.remove('selectedAlgo');
    }
    i.target.classList.toggle('selectedAlgo');
    algo=i.target.classList[0];
}
createDiv=(i,pillarWidth)=>{
    let h=Math.floor(Math.random()*415) +20;
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
    let pillarWidth=10*(((63/100)*window.innerWidth)/(size+2));
    if(pillarWidth>70)
        pillarWidth=70;
    while(s>0){
        pillars.appendChild(createDiv(size-s,pillarWidth));
        --s;
    }
}
changeSize=(e)=>{
    let size=e.target.value;
    sizeDisplay.innerHTML=size;
    createArray(size);
}
sort=()=>{
    ;
}
//event listeners

//selecting algos
for(i of algos){
    i.addEventListener('click',setAlgo);
}
//changing size of the array
for(e of input){
        if(e.classList.contains('s'))
        e.addEventListener('input',changeSize);
    // else
    //    e.addEventListener('input',changeSpeed);
}
//initiating sort
sortBtn.addEventListener('click',sort);