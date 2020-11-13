const arrayDiff = (a, b) => a.filter(val => !b.includes(val))


console.log(arrayDiff([1,2,3,4,5], [1,4]))