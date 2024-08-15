var findRelativeRanks = function(score) {
    const sortedNums = [...score];
  sortedNums.sort((a, b) => b - a);
  const rankMap = new Map();
  for (let i = 0; i < sortedNums.length; i++) {
      const score = sortedNums[i];
      if (i === 0) {
          rankMap.set(score, "Gold Medal");
      } else if (i === 1) {
          rankMap.set(score, "Silver Medal");
      } else if (i === 2) {
          rankMap.set(score, "Bronze Medal");
      } else {
          rankMap.set(score, (i + 1).toString());
      }
  }
  const result = [];
  for (let i = 0; i < score.length; i++) {
      result.push(rankMap.get(score[i]));
  }
  return result;
};
