quickPartition = (pillarArray, l, r) => {
    let pivot = array[r], i = l - 1, j = l;
    updatePillar(pillarArray[r], array[r], 'yellow');
    while (j < r) {
        updatePillar(pillarArray[j], array[j], 'yellow');
        if (array[j] < pivot) {
            ++i;
            if (i != j) {
                updatePillar(pillarArray[j], array[j], 'red');
                updatePillar(pillarArray[i], array[i], 'red');
                let temp = array[j];
                array[j] = array[i];
                array[i] = temp;
                updatePillar(pillarArray[j], array[j], 'red');
                updatePillar(pillarArray[i], array[i], 'red');

                updatePillar(pillarArray[j], array[j], '#1a1a1d');
                updatePillar(pillarArray[i], array[i], '#1a1a1d');
            }
        }
        updatePillar(pillarArray[j], array[j], '#1a1a1d');
        ++j;
    }
    ++i;
    if (i != r) {
        updatePillar(pillarArray[r], array[r], 'red');
        updatePillar(pillarArray[i], array[i], 'red');
        let temp = array[i];
        array[i] = array[r];
        array[r] = temp;
    }
    updatePillar(pillarArray[r], array[r], r - 1 == i ? 'green' : '#1a1a1d');
    updatePillar(pillarArray[i], array[i], 'green');

    return i;
}
quick = (pillarArray, l, r) => {

    if (l == r) {
        updatePillar(pillarArray[l], array[l], 'green');
    }
    if (l < r) {
        let pi = quickPartition(pillarArray, l, r);
        quick(pillarArray, l, pi - 1);
        quick(pillarArray, pi + 1, r);
    }
}
quickSort = (pillarArray) => {
    quick(pillarArray, 0, size - 1);
}