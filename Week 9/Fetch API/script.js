document.querySelector("button").addEventListener("click", async function() {
    try {
        const response = await fetch("package.json")

        if (!response.ok) {
            throw new Error("Can't fetch api!")
        }

        const data = await response.json()

        display(data)
    } catch(error) {
        console.error("Fetch Error: ", error)
    }
})

function display(data) {
    let tbody = document.querySelector("table>tbody")
    console.log(data)
    console.log(tbody)
    for (let i = 0; i < data.length; i++) {
        let r = document.createElement("tr")
        let d1 = document.createElement("td")
        let d2 = document.createElement("td")
        let d3 = document.createElement("td")
        let d4 = document.createElement("td")

        d1.textContent = data[i].name
        d2.textContent = data[i].age
        d3.textContent = data[i].cars.length

        for (let j = 0; j < data[i].cars.length; j++) {
            d4.innerHTML += data[i].cars[j].name + " - " + data[i].cars[j].models + "<br>"
        }

        r.appendChild(d1)
        r.appendChild(d2)
        r.appendChild(d3)
        r.appendChild(d4)

        tbody.appendChild(r)
    }
}