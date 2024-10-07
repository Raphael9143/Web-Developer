let defaultText = "Quý vị chưa nhập "
let emptyText = ""
let date_regex = /^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/
function isEmpty() {
    if (document.forms['frm']['name'].value == "") {
        document.getElementById('name-error').innerHTML = defaultText + "họ tên"
    } else {
        document.getElementById('name-error').innerHTML = emptyText
    }
    if (document.forms['frm']['datebirth'].value == "") {
        document.getElementById('datebirth-error').innerHTML = defaultText + "ngày sinh"
    } else {
        if (!(date_regex.test(document.getElementById('datebirth').value))) {
            document.getElementById('datebirth-error').innerHTML = 'Ngày sinh không đúng định dạng'
        } else {
            document.getElementById('datebirth-error').innerHTML = emptyText
        }
    }
    if (document.forms['frm']['email'].value == "") {
        document.getElementById('email-error').innerHTML = defaultText + "email"
    } else {
        document.getElementById('email-error').innerHTML = emptyText
    }
    if (document.forms['frm']['username'].value == "") {
        document.getElementById('username-error').innerHTML = defaultText + "tên người dùng"
    } else {
        document.getElementById('username-error').innerHTML = emptyText
    }
    if (document.forms['frm']['password'].value == "") {
        document.getElementById('password-error').innerHTML = defaultText + "mật khẩu"
    } else {
        document.getElementById('password-error').innerHTML = emptyText
    }
    if (document.forms['frm']['password'].value != "" && (document.forms['frm']['password'].value != document.forms['frm']['repassword'].value)) {
        document.getElementById('password-error').innerHTML = "Mật khẩu và gõ lại mật khẩu không trùng nhau"
    }

}
function loadFile(event) {
    var output = document.getElementById('output')
    output.src = URL.createObjectURL(event.target.files[0])
    output.onload = function () {
        URL.revokeObjectURL(output.src)
    }
}