
// (O(n^2)) time, O(n) for each iteration of the two nested iterations. O(1) Space.

function solve(nums, target){
    let res = Infinity;

    for(let i = 0; i < nums.length; i++){
        let subArraySum = 0;
        for(let j = i; j < nums.length; j++){
            subArraySum += nums[j];
            if(subArraySum >= target)
                res = Math.min(res, j - i + 1);
        }
    }

    return res == Infinity ? 0 : res;
}


console.log(solve([2,3,1,2,4,3], 7));
console.log(solve([1,1,1,1,1,1], 6));
console.log(solve([1,1,1,1,1,1], 7));