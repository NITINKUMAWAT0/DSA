function isValid(s) {
    const stack = [];
    for (let c of s) {
        if (isOpeningBracket(c)) {
            stack.push(getClosingBracket(c));
        } else {
            if (stack.length === 0 || stack.pop() !== c) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

function isOpeningBracket(c) {
    return c === '(' || c === '{' || c === '[';
}

function getClosingBracket(c) {
    switch (c) {
        case '(': return ')';
        case '{': return '}';
        case '[': return ']';
        default: return ' ';
    }
}

console.log(isValid("()"));     
console.log(isValid("()[]{}")); 
console.log(isValid("(]"));      
console.log(isValid("([)]"));    
console.log(isValid("{[]}"));   
