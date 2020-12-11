let visualSpeed,delay;
let sliders=document.querySelectorAll('.slider');

updatePillar=(pillar,height,color)=>{
    window.setTimeout(function(){
        pillar.style.height=height+'px';
        pillar.style.background=color;
        pillar.querySelector('span').innerHTML=height;
    },delay);
    delay=delay+visualSpeed;
}
disable=()=>{
    running=true;
    for(i of input){
        i.parentElement.style.background='darkgrey';
    }
    for(a of algos){
        if(!a.classList.contains('selectedAlgo'));
            a.style.color='darkgrey';
    }
    for(btn of sortBtn){
        btn.style.color='darkgrey';
    }
}
    
enable=()=>{
    window.setTimeout(()=>{
        for(i of input){
            i.parentElement.style.background='white';
        }
        for(a of algos){
            if(!a.classList.contains('selectedAlgo'));
                a.style.color='white';
        }
        for(btn of sortBtn){
            btn.style.color='white';
        running=false;
        }
    },delay)
}