let visualSpeed, delay;
let sliders = document.querySelectorAll('.slider');
let stopVars = [], timerVar, vNum = 0;

updatePillar = (pillar, height, color) => {
    stopVars[vNum++] = window.setTimeout(() => {
        pillar.style.height = height + 'px';
        pillar.style.background = color;
        pillar.querySelector('span').innerHTML = height;
    }, delay);
    delay = delay + visualSpeed;
}
defaultColor = () => {
    let pillarArray = document.querySelectorAll('.pillar');
    for (let i = 0; i < size; ++i) {
        array[i] = pillarArray[i].offsetHeight;
        pillarArray[i].style.background = "#1a1a1d";
    }
}
timerStart = () => {
    let timerDelay = 0;
    if (size > 30 && (algo == 'bubble' || algo == 'selection')) {
        timerDelay = 50;
        mili.innerHTML = timerDelay;
    }
    window.setTimeout(() => {

        timerVar = window.setInterval(() => {
            mili.innerHTML = Number(mili.innerHTML) + 1;
            if (mili.innerHTML == 1000) {
                mili.innerHTML = 0;
                sec.innerHTML = Number(sec.innerHTML) + 1;
            }
            if (mili.innerHTML < 10)
                mili.innerHTML = '00' + mili.innerHTML;
            else if (mili.innerHTML < 100)
                mili.innerHTML = '0' + mili.innerHTML;

        }, 1);
    }, timerDelay);
}
stopTimer = () => {
    window.clearInterval(timerVar);
}
stopVisuals = () => {
    stopVars.forEach((stopVar) => {
        window.clearTimeout(stopVar);
    })
    stopTimer();
    defaultColor();
}

disable = () => {
    sBtns.forEach((btn) => {
        btn.innerHTML = 'Stop';
    })
    gBtns.forEach((btn) => {
        btn.style.color = 'darkgrey';
        btn.disabled = true;
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
        gBtns.forEach((btn) => {
            btn.style.color = 'white';
            btn.disabled = false;
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
        stopTimer();
    }, Edelay);
}