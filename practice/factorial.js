const facto = (x) =>{
     let fact =1
    for(let i= 1; i<=x;i++){
        fact = fact * i
    }

    return fact
}

console.log(facto(5))