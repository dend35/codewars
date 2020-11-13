function validParentheses(parens){
    parens = parens.split('');
    var opened = 0;
    for (let i = 0; i < parens.length; i++) {
        if(parens[i] == "(")
            opened++
        if(parens[i] == ")")
            opened--
        if(opened < 0)
            return false
    }
    return opened == 0
}

console.log(validParentheses( "()" ))
console.log(validParentheses( "())" ))
console.log(validParentheses( "(())" ))
console.log(validParentheses( "((())" ))
console.log(validParentheses( "())())" ))