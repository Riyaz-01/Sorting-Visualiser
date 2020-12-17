selectionSort = (pillarArray) => {
    let i, j;
    for (i = 0; i < size; ++i) {
        let minI = i, min = array[i];
        for (j = i + 1; j < size; ++j) {
            updatePillar(pillarArray[j], array[j], 'yellow')
            if (array[j] < min) {
                updatePillar(pillarArray[minI], array[minI], '#1a1a1d');
                min = array[j];
                minI = j;
            }
            else
                updatePillar(pillarArray[j], array[j], '#1a1a1d');
        }
        if (minI != i) {
            updatePillar(pillarArray[i], array[i], 'red');
            updatePillar(pillarArray[minI], array[minI], 'red');
            let temp = array[i];
            array[i] = array[minI];
            array[minI] = temp;

            updatePillar(pillarArray[i], array[i], 'red');
            updatePillar(pillarArray[minI], array[minI], 'red');
            updatePillar(pillarArray[minI], array[minI], '#1a1a1d')
        }
        updatePillar(pillarArray[i], array[i], 'green');
    }
}