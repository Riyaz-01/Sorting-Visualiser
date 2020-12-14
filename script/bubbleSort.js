let temp;
bubbleSort = (pillarArray) => {
    for (var i = 0; i < size - 1; ++i) {
        for (var j = 0; j < size - i - 1; ++j) {
            updatePillar(pillarArray[j], array[j], 'yellow');
            updatePillar(pillarArray[j + 1], array[j + 1], 'yellow');
            if (array[j] > array[j + 1]) {
                updatePillar(pillarArray[j], array[j], 'red');
                updatePillar(pillarArray[j + 1], array[j + 1], 'red');
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                updatePillar(pillarArray[j], array[j], 'red');
                updatePillar(pillarArray[j + 1], array[j + 1], 'red');
            }
            updatePillar(pillarArray[j], array[j], '#1a1a1d');
            updatePillar(pillarArray[j + 1], array[j + 1], '#1a1a1d');
        }
        updatePillar(pillarArray[j], array[j], 'green');
    }
    updatePillar(pillarArray[0], array[0], 'green');
}