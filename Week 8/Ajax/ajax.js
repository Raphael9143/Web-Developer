function display() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', '/Week%208/Ajax/abcs.json', true)
    xhr.onload = () => {
        if (xhr.status == 200 && xhr.readyState == 4) {
            document.getElementById("content").innerHTML = xhr.responseText
        }
    }
    xhr.send()
} 