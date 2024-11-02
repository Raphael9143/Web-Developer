function onClick(element) {
    const nextUL = element.parentElement.querySelector('ul')
    if(nextUL.style.display == "none" || nextUL.style.display == "") {
        nextUL.style.display = "block"
        element.src = "https://itest.com.vn/lects/webappdev/tree/images/minus.gif"
    } else {
        nextUL.style.display = "none"
        element.src = "https://itest.com.vn/lects/webappdev/tree/images/plus.gif"
    }
}