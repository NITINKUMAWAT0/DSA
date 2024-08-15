function lengthOfLastWord(s) {
    let n = s.length;
    let len = 0;

    for (let i = n - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            len++;
        } else if (len > 0) {
            break;
        }
    }

    return len;
}

const s = "Hello World";
console.log(lengthOfLastWord(s));
