// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isPowerOfTwo = function(n) {
//     if(n==1){
//         return true
//     }
//     if(n<1 || n%2!=0){
//         return false
//     }

//     return isPowerOfTwo(n/2)
// };

// console.log(isPowerOfTwo(-64))



/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    

    if(nums.length==0){
        return 0;
    }
   let flag=0;
    for(let i=0;i<nums.length;i++){
    if(nums[i]!=nums[flag]){
     flag++;
    nums[flag]=nums[i];
    }
    }
        return flag+1;
};








