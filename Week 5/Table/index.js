let data_queries = document.querySelectorAll('input')
let row_queries = document.querySelectorAll('tr')

let data_header = data_queries[0]
let delete_button = document.getElementById('deletebutton')

function headerChecking() {
    if (data_header.checked) {
        delete_button.style.display = "block"
        for (let i = 1; i < data_queries.length; i++) {
            data_queries[i].checked = true;
            row_queries[i].style = "background-color: yellow"
        }
    } else {
        delete_button.style.display = "none"
        for (i = 1; i < data_queries.length; i++) {
            data_queries[i].checked = false;
            row_queries[i].style = "tbody>tr:nth-child(odd) {background-color: antiquewhite;}"
        }
    }
}

function boxChecking() {
    let isChecked = false
    for (let i = 1; i < data_queries.length; i++) {
        if (data_queries[i].checked) {
            row_queries[i].style = "background-color: yellow"
        } else {
            row_queries[i].style = "tbody>tr:nth-child(odd) {background-color: antiquewhite;}"
        }
    }
    data_queries.forEach(element => {
        if (element.checked) {
            delete_button.style.display = 'block'
            isChecked = true
        }
    })
    if (!isChecked) {
        delete_button.style.display = 'none'
    }
}

function deleteButtonOnClick() {
    for (let i = 1; i < data_queries.length; i++) {
        if (data_queries[i].checked) {
            row_queries[i].remove()
        }
    }
}