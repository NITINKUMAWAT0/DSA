var reverseStr = function(s, k) {
    const reverse = (str, start, end) => {
        let result = '';
        for (let i = end; i >= start; i--) {
            result += str[i];
        }
        return result;
    };
   
    let result = '';
    for (let i = 0; i < s.length; i += 2 * k) {
        result += reverse(s, i, Math.min(i + k - 1, s.length - 1));
        result += s.substring(i + k, i + 2 * k);
    }
   
    return result;
};

let s = "abcdefg";
let k = 2;

console.log(reverseStr(s, k));
