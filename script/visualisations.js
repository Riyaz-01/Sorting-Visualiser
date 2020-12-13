let visualSpeed, delay;
let sliders = document.querySelectorAll('.slider');
let stopVars = [], vNum = 0

updatePillar = (pillar, height, color) => {
    stopVars[vNum++] = window.setTimeout(() => {
        pillar.style.height = height + 'px';
        pillar.style.background = color;
        pillar.querySelector('span').innerHTML = height;
    }, delay);
    delay = delay + visualSpeed;
}

stopVisuals = () => {
    stopVars.forEach((stopVar) => {
        window.clearTimeout(stopVar);
    })
    defaultColor();
}

disable = () => {
    sBtns.forEach((btn) => {
        btn.innerHTML = 'Stop';
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
allGreen = (pillarArray) => {
    for (let i = 0; i < size; ++i) {
        if (pillarArray[i].style.background != 'green')
            return false;
    }
    return true;
}
enable = (Edelay, pillarArray) => {
    window.setTimeout(() => {
        if (Edelay != 0 && !allGreen(pillarArray))
            return;
        sBtns.forEach((btn) => {
            btn.innerHTML = 'Sort';
        })
        for (i of input) {
            i.parentElement.style.background = 'white';
            i.disabled = false;
        }
        for (a of algos) {
            if (!a.classList.contains('selectedAlgo'))
                a.style.color = 'white';
            a.disabled = false;
        }
    }, Edelay);
}