// function printerError(s) {
//     const valid = "abcdefjhigklm"
//     var errorCount = s.split('').filter(i => !valid.includes(i))
//     return `${errorCount.length}/${s.length}` 
// }

const printerError = (s) => `${s.split('').filter(i => !"abcdefjhigklm".includes(i)).length}/${s.length}` 

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))