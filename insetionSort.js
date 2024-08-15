function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
}

// Example usage:
const arr = [12, 11, 13, 5, 6];
const sortedArr = insertionSort(arr);
console.log(sortedArr);