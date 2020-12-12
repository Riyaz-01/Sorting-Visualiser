let visualSpeed, delay;
let sliders = document.querySelectorAll('.slider');
let stopVars = [], totalVisual, comVisual = 0;

/*totalVisual keeps track of number of times updatePillar funtion is called after resume 

comVisual keeps track of number of times a pillar was updated

these variabled are key to proper working of resume() funtion*/


updatePillar = (pillar, height, color) => {
    totalVisual++;
    if ((prevState == 'paused' && totalVisual > comVisual) || prevState == 'running') {
        stopVars[totalVisual] = window.setTimeout(function () {
            pillar.style.height = height + 'px';
            pillar.style.background = color;
            pillar.querySelector('span').innerHTML = height;
            comVisual++;
            if (totalVisual == comVisual) {
                enable();
                comVisual = 0;
                sBtns.forEach((btn) => {
                    btn.innerHTML = 'Sort';
                }
                )
            }
        }, delay);
        delay = delay + visualSpeed;
    }
}

pauseVisuals = () => {
    stopVars.forEach((stopVar) => {
        window.clearTimeout(stopVar);
    })
}

disable = () => {
    sBtns.forEach((btn) => {
        btn.innerHTML = "Pause";
    })
    for (i of input) {
        i.parentElement.style.background = 'darkgrey';
        i.disabled = true;
    }
    for (a of algos) {
        if (!a.classList.contains('selectedAlgo')) {
            a.style.color = 'darkgrey';
        }
        a.disabled = true;
    }
}

enable = () => {
    for (i of input) {
        i.parentElement.style.background = 'white';
        i.disabled = false;
    }
    for (a of algos) {
        if (!a.classList.contains('selectedAlgo'))
            a.style.color = 'white';
        a.disabled = false;
    }
    sBtns.forEach((btn) => {
        if (prevState == 'running')
            btn.innerHTML = "Resume";
    })
}