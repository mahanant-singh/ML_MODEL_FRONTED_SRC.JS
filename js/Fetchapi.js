// fetch("https://randomuser.me/api/")
//     .then(function (rawdata) {
//         rawdata.json();
//     }).then((data) => {
//         console.log(data.results[0].name)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

    // another thiraka

fetch("https://randomuser.me/api/")
    .then((raw) => raw.json())
    .then((data)=>console.log(data.results[0]))