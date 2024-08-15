function pushZerosToEnd(arr) {
    let count = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] !== 0) {
            arr[count++] = arr[i];
        }
    }

    while (count < n) {
        arr[count++] = 0;
    }
}

const arr = [0, 1, 0, 3, 12];
pushZerosToEnd(arr);
console.log(arr);
