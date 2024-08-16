function reverseString(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Swap the elements at left and right
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        
        // Move the pointers towards the center
        left++;
        right--;
    }
}
let s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s);
