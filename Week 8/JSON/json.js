let data = "";
function httpGetAsync() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            data = JSON.parse(xmlHttp.responseText);
            display();
        }
    };
    xmlHttp.open("GET", "/package.json", true);
    xmlHttp.send();
}

function display() {
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = "";
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const ageCell = document.createElement("td");
        const carCountCell = document.createElement("td");
        const carsCell = document.createElement("td");

        nameCell.innerHTML = data[i].name;
        row.appendChild(nameCell);

        ageCell.innerHTML = data[i].age;
        row.appendChild(ageCell);

        carCountCell.innerHTML = data[i].cars.length;
        row.appendChild(carCountCell);

        let carList = "";
        for (let j = 0; j < data[i].cars.length; j++) {
            carList += "<br>" + data[i].cars[j].name + " - " + data[i].cars[j].models;
        }
        carsCell.innerHTML = carList;
        row.appendChild(carsCell);

        tableBody.appendChild(row);
    }
}
