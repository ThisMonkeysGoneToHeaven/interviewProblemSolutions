function binarySearch(nums, target){
    let i = 0, j = nums.length;
    while(i < j){
        let mid = Math.floor((i + j) / 2);
        if(nums[mid] < target)
            i = mid + 1;
        else
            j = mid;
    }
    return i;
}

// (O log(n)) time, O(n) for each iteration and log(n) for binarySeach per iteration. O(1) Space.

function solve(nums, target){
    let res = Infinity;
    // making nums a sum-array
    for(let i = 1; i < nums.length; i++){
        nums[i] += nums[i - 1];
    }

    for(let i = 0; i < nums.length; i++){
        let thisElem = i == 0 ? nums[i] : nums[i] - nums[i - 1];
        let newTarget = nums[i] + target - thisElem;

        // calling binarySearch to find index of element >= newTarget in nums
        const index = binarySearch(nums, newTarget);
        if(index != nums.length)
            res = Math.min(res, index - i + 1);
    }

    return res == Infinity ? 0 : res;
}

console.log(solve([2,3,1,2,4,3], 7));
console.log(solve([1,1,1,1,1,1], 6));
console.log(solve([1,1,1,1,1,1], 7));