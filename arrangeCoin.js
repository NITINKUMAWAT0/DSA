function arrangeCoins(n) {
    let low = 1, high = n;
    let k, currentSum;

    while (low <= high) {
        k = Math.floor(low + (high - low) / 2);
        currentSum = k * (k + 1) / 2;

        if (currentSum === n) {
            return k;
        } else if (currentSum < n) {
            low = k + 1;
        } else {
            high = k - 1;
        }
    }
    return high;
}

let n = 8;
console.log(arrangeCoins(n));
