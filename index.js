// slower time complexity solution

const pairSum = (numbers, targetSum) => {
    for (let i = 0; i < numbers.length; i == 1) {
        for (let j = i + 1; j < numbers.length; j += 1) {
            if (numbers[i] + numbers[j] === targetSum) {
                return [i, j];
            }
        }
    }
};

console.log(pairSum([3,2,5,4,1], 8))

// faster linear solution

const pairSumLinear = (numbers, targetSum) => {
    const previousNums = {};
    for (let i = 0; i < numbers.length; i += 1) {
      const num = numbers[i];
      const complement = targetSum - num;
      if (complement in previousNums) {
        return [i, previousNums[complement]];
      }
      previousNums[num] = i;
    }
  };

  console.log(pairSumLinear([4, 7, 9, 2, 5, 1], 5))
