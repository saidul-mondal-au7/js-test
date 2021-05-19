// Find the maximum consecutive 1's in an array of 0's and 1's.
// Example:
// a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]
// b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]


const findMaxConsecutiveOnes = (nums) => {
	  
  let max = 0;
  let current = 0;
  for (let i = 0; i<nums.length; i++) {
        nums[i] === 0 ? current = 0 : current++;
        if (current > max) max = current;
  };
  return max;
	
};

findMaxConsecutiveOnes([0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0])