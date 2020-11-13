function bouncingBall(h,  bounce,  window) {
    if(h<=0 || window>=h || bounce>=1 || bounce<=0)
        return -1
        
    var count = 1
    while(h > window){
        count+=2
        h *= bounce
    }

    return count
}

console.log(bouncingBall(30.0, 0.66, 1.5))