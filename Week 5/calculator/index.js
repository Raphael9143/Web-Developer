// 0: td#delete
// 1: td#change
// 2: td#percent
// 3: td#divide
// 4: td#seven
// 5: td#eight
// 6: td#nine
// 7: td#multiply
// 8: td#four
// 9: td#five
// 10: td#six
// 11: td#subtract
// 12: td#one
// 13: td#two
// 14: td#three
// 15: td#plus
// 16: td#zero
// 17: td#point
// 18: td#equal
// length:19

let button_queries = document.querySelectorAll("td")
let result = document.getElementById("result")
let temporary = document.getElementById("temporary")
let errorText = document.getElementById("error")

let defaultText = "0"

function innerText(element, text) {
    element.innerHTML = text
}

function reset() {
    innerText(result, defaultText)
    innerText(temporary, defaultText)
}

function countBrackets(expr) {
    let output = 0
    for (let i = 0; i < expr.length; i++) {
        if (expr.charAt(i) == "(") {
            output++
        } else if (expr.charAt(i) == ")") {
            output--
        }
    }
    console.log(output)
    return output
}

function convertString(expr) {
    // for (let i = 0; i < expr.length; i++) {
    //     if (expr.charAt(i) == "×") {
    //         expr = expr.slice(0, i) + "*" + expr.slice(i + 1)
    //     } else if (expr.charAt(i) == "÷") {
    //         expr = expr.slice(0, i) + "/" + expr.slice(i + 1)
    //     } else if (expr.charAt(i) == "%") {
    //         console.log(i)
    //         let prevOp = -1
    //         for (let j = 0; j < i; j++) {
    //             let curOp = expr.charAt(j)
    //             if (curOp == "+" || curOp == "-" || curOp == "*" || curOp == "/") {
    //                 prevOp = j
    //             }
    //         }
    //         if (prevOp == -1) {
    //             expr = "(" + expr.slice(0, i) + "/100)" + expr.slice(i + 1)
    //         } else {
    //             expr = expr.slice(0, prevOp + 1) + "(" + expr.slice(prevOp + 1, i) + "/100)" + expr.slice(i + 1)
    //         }
    //         console.log(prevOp)
    //     }
    // }

    expr = expr.replace(/×/g, "*")
    expr = expr.replace(/÷/g, "/")
    expr = expr.replace(/(\d+)%/g, "($1/100)")
    console.log(expr)
    return expr
}

function press(symbol) {
    result.style = "color: black"
    innerText(errorText, "")
    if (result.textContent != "0") {
        innerText(result, defaultText)
    }
    if (temporary.textContent == "0") {
        if (symbol == ".") {
            innerText(temporary, "0.")
        } else if (symbol == "-" || symbol == "(" || (symbol >= "0" && symbol <= "9")) {
            innerText(temporary, symbol)
        } else if (symbol > "9" || symbol < "0") {
            return
        }
        return
    }

    let expression = temporary.textContent
    let len = expression.length
    let lastIdx = expression.charAt(len - 1)

    if (symbol == "=") {
        if (lastIdx > "9" || lastIdx < "0") {
            if (lastIdx != "%") {
                if (lastIdx != ")" || (lastIdx == ")" && countBrackets(expression) > 0)) {
                    innerText(result, "Syntax Error")
                    result.style = "color: red"
                    return
                }
            }
        }
        let output = Math.round(eval(convertString(expression)) * 100) / 100
        if (Number.isNaN(output) || !Number.isFinite(output)) {
            innerText(result, "MATH Error")
            result.style = "color: red"
            return
        }
        innerText(result, output)
        innerText(temporary, expression)
        return
    }

    if (symbol == "#") {
        if (result.textContent == "0") {
            if (len == 1) {
                innerText(temporary, defaultText)
            } else {
                innerText(temporary, expression.slice(0, len - 1))
            }
        }
        return
    }

    if (symbol == "!") {
        if ((lastIdx >= "0" && lastIdx <= "9") || lastIdx == ")" || lastIdx == "%") {
            if (countBrackets(expression) > 0) {
                innerText(temporary, expression + ")")
            } else {
                innerText(temporary, expression + "×(")
            }
        } else if (lastIdx < "0" || lastIdx > "9") {
            innerText(temporary, expression + "(")
        }
        return
    }

    if (symbol < "0" || symbol > "9") {
        // if (symbol == "%" || symbol == "." || symbol == ")") {
        //     if (lastIdx >= "0" && lastIdx <= "9") {
        //         innerText(temporary, expression + symbol)
        //     }
        //     return
         if (lastIdx < "0" || lastIdx > "9") {
            if (lastIdx != "(" && lastIdx != "%" && lastIdx != ")") {
                innerText(temporary, expression.slice(0, len - 1) + symbol)
            } else if (lastIdx == ")" && (symbol == "%" || symbol == ".")) {
                return
            } else {
                innerText(temporary, expression + symbol)
            }
            return
        }
    } else if (lastIdx == "%" || lastIdx == ")") {
        innerText(temporary, expression + "×" + symbol)
        return
    }
    innerText(temporary, expression + symbol)
    // if ((lastIdx >= "0" && lastIdx <= "9") || lastIdx == "%" || lastIdx == ")") {
    //     innerText(temporary, expression + symbol)
    // } else if ((lastIdx < "0" || lastIdx > "9") && (symbol < "0" || symbol > "9") ) {
    //     innerText(temporary, expression.slice(0, len - 1) + symbol)
    // } else {
    //     innerText(temporary, expression + symbol)
    // }
}
