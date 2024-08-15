function nextGreatestLetter(letters, target) {
    let left = 0;
    let right = letters.length - 1;

    if (target >= letters[right] || target < letters[left]) {
        return letters[left];
    }

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (letters[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return letters[left] > target ? letters[left] : letters[0];
}

const letters = ['c', 'f', 'j'];
const target = 'a';
console.log(nextGreatestLetter(letters, target));
