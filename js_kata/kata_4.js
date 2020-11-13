function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number)
    var hign = Math.max(...numbers)
    var low = Math.min(...numbers)
    return `${hign} ${low}`
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))