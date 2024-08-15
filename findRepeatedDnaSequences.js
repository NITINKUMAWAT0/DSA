function findRepeatedDnaSequences(s) {
    const n = s.length;
    if (n < 10) {
        return [];
    }
    
    const seen = new Set();
    const repeated = new Set();
    
    for (let i = 0; i <= n - 10; i++) {
        const dna = s.substring(i, i + 10);
        if (seen.has(dna)) {
            repeated.add(dna);
        } else {
            seen.add(dna);
        }
    }
    
    return Array.from(repeated);
}

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));

console.log(findRepeatedDnaSequences("AAAAAAAAAAAAA"));
