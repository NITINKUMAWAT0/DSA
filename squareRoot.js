function mySqrt(x) {
    if (x === 0 || x === 1) return x;

    let start = 1;
    let end = x;
    let ans = 0;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        let square = mid * mid;

        if (square === x) {
            return mid;
        } else if (square < x) {
            start = mid + 1;
            ans = mid;
        } else {
            end = mid - 1;
        }
    }

    return ans;
}

const num = 8;
console.log(mySqrt(num));
