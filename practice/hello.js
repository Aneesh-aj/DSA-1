var search = function(nums, target) {
    let leftIndex=0;
    let rightIndex=nums.length;
     
     while(leftIndex<=rightIndex){
         let middleIndex = Math.floor((leftIndex+rightIndex)/2)
         if(target==nums[middleIndex]){
         return middleIndex;
         }
         if(target < nums[middleIndex]){
         rightIndex=middleIndex -1;
     }else{
         leftIndex=middleIndex +1;
     }
     }
     return -1;
       
};
console.log(search([-1,0,3,5,9,12],9))