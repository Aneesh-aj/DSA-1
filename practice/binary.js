const arr= [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91]
const target= 16

const binarysearch =(arr,terget)=>{
     let left =0
     let right=arr.length-1

     while(left <= right ){
         let mid = Math.floor((left+right)/2)

         if(arr[mid] === target){
            return mid
         }
         if(arr[mid]<target){
            left = mid+1
         }else if(arr[mid]>target){
            right = mid-1
         }
     }
   return -1
}




let result = binarysearch(arr,target)

console.log(result)