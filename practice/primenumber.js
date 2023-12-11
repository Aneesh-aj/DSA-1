const prime = (x)=>{
    if(x<2){
      return false
    }
    for(let i=2 ;i< x ;i++){
        if(i%x===0){
            return false
        }
    }

    return true
}

console.log(prime(3))