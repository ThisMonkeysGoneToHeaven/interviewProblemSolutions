function solve(nums, target){

    let i = 0, j = 0, 
    currentSum = nums[0],
    res = Infinity;

    while(j < nums.length){

        if(j < i)
            j = i;

        if(currentSum >= target){
            res = Math.min(res, j - i  + 1);
            currentSum -= nums[i];
            i++;
        }
        else{
            j++;
            if(j < nums.length)
                currentSum += nums[j];
        }    
    }

    return res == Infinity ? 0 : res;
}

console.log(solve([2,3,1,2,4,3], 7));
console.log(solve([1,1,1,1,1,1], 6));
console.log(solve([1,1,1,1,1,1], 7));