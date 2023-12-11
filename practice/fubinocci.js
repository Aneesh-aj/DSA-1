var fubi = (x)=>{
    const arr=[0,1]

    for(let i=2; i< x;i++){
        arr[i]=arr[i-1]+arr[i-2]
    }

    return arr
}

console.log(fubi(5))