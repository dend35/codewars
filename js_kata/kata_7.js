function comp(array1, array2) {
    console.log(array1.map(i=>i*i), array2)
    if (array1 == null || array2 == null)
        return false
    return array2.every(i => {
        var result = array1.includes(Math.sqrt(i))
        array1.splice(array1.indexOf(Math.sqrt(i)), 1)
        return result
    })
}



a1 = [ 99, 23, 74 ];
a2 = [ 9801, 529, 5477 ];
console.log(comp(a1, a2), true);