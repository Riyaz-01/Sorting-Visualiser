heapify = (pillarArray, n, i) => {
    let max = i, l = 2 * i + 1, r = 2 * i + 2;

    if (l < n && array[l] > array[max]) {
        if (max != i)
            updatePillar(pillarArray[max], array[max], "#1a1a1d");

        max = l;
        updatePillar(pillarArray[max], array[max], "red");
    }
    if (r < n && array[r] > array[max]) {
        if (max != i)
            updatePillar(pillarArray[max], array[max], "#1a1a1d");

        max = r;
        updatePillar(pillarArray[max], array[max], "red");
    }
    if (max != i) {
        updatePillar(pillarArray[i], array[i], 'red');
        updatePillar(pillarArray[max], array[max], 'red');

        let temp = array[i];
        array[i] = array[max];
        array[max] = temp;

        updatePillar(pillarArray[i], array[i], 'red');
        updatePillar(pillarArray[max], array[max], 'red');

        updatePillar(pillarArray[i], array[i], '#1a1a1d');
        updatePillar(pillarArray[max], array[max], '#1a1a1d');

        updatePillar(pillarArray[max], array[max], 'yellow');
        heapify(pillarArray, n, max);
        updatePillar(pillarArray[max], array[max], '#1a1a1d');
    }
}
heapSort = (pillarArray) => {
    for (let i = Math.floor(size / 2 - 1); i >= 0; i--)
        heapify(pillarArray, size, i);

    for (let i = size - 1; i > 0; i--) {
        updatePillar(pillarArray[i], array[i], 'red');
        updatePillar(pillarArray[0], array[0], 'red');

        let temp = array[i];
        array[i] = array[0];
        array[0] = temp;

        updatePillar(pillarArray[i], array[i], 'red');
        updatePillar(pillarArray[0], array[0], 'red');

        updatePillar(pillarArray[i], array[i], '#1a1a1d');
        updatePillar(pillarArray[0], array[0], '#1a1a1d');

        updatePillar(pillarArray[i], array[i], "green");
        updatePillar(pillarArray[i], array[i], "yellow");

        heapify(pillarArray, i, 0);

        updatePillar(pillarArray[i], array[i], "#1a1a1d");
        updatePillar(pillarArray[i], array[i], "green")
    }
    updatePillar(pillarArray[0], array[0], "green");
}