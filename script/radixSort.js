let m;
max = (pillarArray) => {
    mx = 0;
    let i = 0
    array.forEach((x) => {
        updatePillar(pillarArray[i], array[i], 'yellow');
        if (x > mx)
            mx = x;
        updatePillar(pillarArray[i], array[i], '#1a1a1d')
        ++i;
    })
    m = mx;
}
counter = (pillarArray, exp) => {
    let output = [];
    let i, count = [];
    for (let i = 0; i < 10; ++i)
        count[i] = 0;
    for (i = 0; i < size; ++i) {
        count[(Math.floor(array[i] / exp)) % 10]++;
    }

    for (i = 1; i < 10; i++)
        count[i] += count[i - 1];

    let cjs = [];
    for (i = size - 1, k = 0; i >= 0; i--, k++) {
        let j = (Math.floor(array[i] / exp)) % 10;
        cjs[k] = count[j];
        updatePillar(pillarArray[i], array[i], 'yellow');
        updatePillar(pillarArray[i], array[i], '#1a1a1d');
        output[count[j]] = array[i];
        count[j]--;
    }
    cjs.forEach((j) => {
        updatePillar(pillarArray[j - 1], array[j - 1], 'red');
        array[j - 1] = output[j];
        updatePillar(pillarArray[j - 1], array[j - 1], 'red');
        updatePillar(pillarArray[j - 1], array[j - 1], m < exp * 10 ? 'green' : '#1a1a1d');
    });
}
radixSort = (pillarArray) => {
    max(pillarArray);
    for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10) {
        counter(pillarArray, exp);
    }
}