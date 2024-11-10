//rgb to sepia: https://abhijitnathwani.github.io/blog/2018/01/08/colortosepia-Image-using-C

const max_value = 255

onmessage = function (e) {
    let postImage = e.data
    let data = postImage.data

    console.log(data)

    for (let i = 0; i < data.length; i += 4) {
        let r = data[i]
        let g = data[i + 1]
        let b = data[i + 2]

        data[i] = (r * 0.393) + (g * 0.769) + (b * 0.189);
        data[i + 1] = (r * 0.349) + (g * 0.686) + (b * 0.168);
        data[i + 2] = (r * 0.272) + (g * 0.534) + (b * 0.131);

        if (data[i] > max_value) {
            data[i] = max_value
        }

        if (data[i + 1] > max_value) {
            data[i + 1] = max_value
        }

        if (data[i + 2] > max_value) {
            data[i + 2] = max_value
        }
    }

    console.log(data)

    postMessage(postImage)
}
