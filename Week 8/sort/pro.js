// asc: ↓
// desc: ↑


let sortcol = document.querySelectorAll('.sortcol')
let col1 = document.querySelectorAll('td:nth-child(1)')
let col2 = document.querySelectorAll('td:nth-child(2)')
let col3 = document.querySelectorAll('td:nth-child(3)')
let col4 = document.querySelectorAll('td:nth-child(4)')

let coldata = [];

for (let i = 0; i < col1.length; i++) {
    coldata.push({
        col1: col1[i].textContent,
        col2: col2[i].textContent,
        col3: col3[i].textContent,
        col4: col4[i].textContent
    });
}

let namcol = sortcol[0]
let orgcol = sortcol[1]

function sortName() {
    if (namcol.className == "sortcol") {
        namcol.className = "sortcol asc";
    } else if (namcol.className == "sortcol asc") {
        namcol.className = "sortcol desc";
    } else if (namcol.className == "sortcol desc") {
        namcol.className = "sortcol";
    }
    orgcol.className = "sortcol"; 
    sort("col3", namcol.className.includes("asc") ? 1 : -1);
}

function sortOrigin() {
    if (orgcol.className == "sortcol") {
        orgcol.className = "sortcol asc";
    } else if (orgcol.className == "sortcol asc") {
        orgcol.className = "sortcol desc";
    } else if (orgcol.className == "sortcol desc") {
        orgcol.className = "sortcol";
    }
    namcol.className = "sortcol"; 
    sort("col4", orgcol.className.includes("asc") ? 1 : -1);
}

function sort(column, order) {
    if (order === 0) {
        resetSort();
        return;
    }

    coldata.sort((a, b) => {
        if (a[column] < b[column]) return -1 * order;
        if (a[column] > b[column]) return 1 * order;
        return 0;
    });

    for (let i = 0; i < coldata.length; i++) {
        col1[i].innerHTML = coldata[i].col1;
        col2[i].innerHTML = coldata[i].col2;
        col3[i].innerHTML = coldata[i].col3;
        col4[i].innerHTML = coldata[i].col4;
    }
}

function resetSort() {
    for (let i = 0; i < coldata.length; i++) {
        col1[i].innerHTML = coldata[i].col1;
        col2[i].innerHTML = coldata[i].col2;
        col3[i].innerHTML = coldata[i].col3;
        col4[i].innerHTML = coldata[i].col4;
    }
}




// function sortName() {
//     if (namcol.className == "sortcol") {
//         namcol.className = "sortcol asc"
//     } else if (namcol.className == "sortcol asc") {
//         namcol.className = "sortcol desc"
//     } else if (namcol.className == "sortcol desc") {
//         namcol.className = "sortcol"
//     }
//     orgcol.className = "sortcol"
//     sort()
// }

// function sortOrigin() {
//     if (orgcol.className == "sortcol") {
//         orgcol.className = "sortcol asc"
//     } else if (orgcol.className == "sortcol asc") {
//         orgcol.className = "sortcol desc"
//     } else if (orgcol.className == "sortcol desc") {
//         orgcol.className = "sortcol"
//     }
//     namcol.className = "sortcol"
//     sort()
// }

// function sort() {
//     if (namcol.className == "sortcol" && orgcol.className == "sortcol") {
//         for (let i = 0; i < 5; i++) {
//             col1[i].innerHTML = coldata1[i]
//             col2[i].innerHTML = coldata2[i]
//             col3[i].innerHTML = coldata3[i]
//             col4[i].innerHTML = coldata4[i]
//         }
//         return
//     }

//     let tmpcol1 = [...coldata1]
//     let tmpcol2 = [...coldata2]
//     let tmpcol3 = [...coldata3]
//     let tmpcol4 = [...coldata4]

//     if (namcol.className == "sortcol asc") {
//         tmpcol3.sort()
//     }
//     if (namcol.className == "sortcol desc") {
//         tmpcol3.sort().reverse()
//     }
//     if (orgcol.className == "sortcol asc") {
//         tmpcol4.sort()
//     }
//     if (orgcol.className == "sortcol desc") {
//         tmpcol4.sort().reverse()
//     }

//     if (namcol.className != "sortcol") {
//         for (let i = 0; i < 5; i++) {
//             for (let j = 0; j < 5; j++) {
//                 if (coldata3[j] == tmpcol3[i]) {
//                     col1[i].innerHTML = coldata1[j]
//                     col2[i].innerHTML = coldata2[j]
//                     col3[i].innerHTML = coldata3[j]
//                     col4[i].innerHTML = coldata4[j]
//                     break
//                 }
//             }
//         }
//     }

//     if (orgcol.className != "sortcol") {
//         for (let i = 0; i < 5; i++) {
//             for (let j = 0; j < 5; j++) {
//                 if (coldata4[j] == tmpcol4[i]) {
//                     col1[i].innerHTML = coldata1[j]
//                     col2[i].innerHTML = coldata2[j]
//                     col3[i].innerHTML = coldata3[j]
//                     col4[i].innerHTML = coldata4[j]
//                     break
//                 }
//             }
//         }
//     }
    
//     // for (let i = 0; i < 5; i++) {
//     //     col1[i].innerHTML = tmpcol1[i]
//     //     col2[i].innerHTML = tmpcol2[i] 
//     //     col3[i].innerHTML = tmpcol3[i]
//     //     col4[i].innerHTML = tmpcol4[i] 
//     // }
//     return
// }
