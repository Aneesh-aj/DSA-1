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


nums=[0,0,1,1,1,2,2,3,3,4]
var a=removeDuplicates(nums)
console.log(nums)
// console.log(a)

for(i=0;i< a ;i++){
    console.log(nums[i])
}