function addStrings(num1, num2) {
    let sb = [];
    let carry = 0;
    let i = num1.length - 1, j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        let digit1 = i >= 0 ? num1.charAt(i) - '0' : 0;
        let digit2 = j >= 0 ? num2.charAt(j) - '0' : 0;
        let sum = digit1 + digit2 + carry;
        sb.push(sum % 10);
        carry = Math.floor(sum / 10);
        i--;
        j--;
    }

    return sb.reverse().join('');
}

console.log(addStrings("123", "456"));
console.log(addStrings("999", "1"));
