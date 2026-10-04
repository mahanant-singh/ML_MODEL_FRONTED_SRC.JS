
async function predictPrice() {
    const form = document.querySelector("form");
    const fd = new FormData(form);

    try {
        const response = await fetch("/predict", {
            method: "POST",
            body: fd
        });

        if (!response.ok) {
            throw new Error("Something went wrong!");
        }

        const result = await response.text();
        document.getElementById("result").innerHTML = result;

    } catch (error) {
        document.getElementById("result").textContent = error.message;
    }
}
//Agar Flask backend /predict se HTML ya plain text return kar raha hai, toh response.text() sahi hai. Agar JSON return kar raha hai, toh response.json() use karna. innerHTML sirf trusted server response ke liye use karo; otherwise textContent safer hai.


// 1 ) code explation
// async: Function ke andar asynchronous operations perform karne ke liye.



// FormData(form): Form ke saare input values collect karta hai.



// fetch(): Server ke /predict route par POST request send karta hai.



// await: Server ke response ka wait karta hai bina callback functions ke.



// response.ok: Check karta hai ki HTTP response successful hai ya nahi.



// response.text(): Server se aane wale response ko text mein convert karta hai.



// try...catch: Agar request mein error aaye, toh use handle karta hai.


// [Old JavaScript]	[Modern JavaScript]
// [XMLHttpRequest-->	fetch()]
// [onreadystatechange-->	await]
// xhr.send(fd)-->	fetch(url, options)
// Callback-based-->	Promise-based




// =====imp===

// JavaScript mein fetch(url, options) ke andar:
// - url: Batata hai ki request kis server ya API endpoint par send karni hai.
// - options: Batata hai ki request kaise send karni hai, jaise GET ya POST method, data, headers, etc.
// Example
// fetch("/predict", {
//     method: "POST",
//     body: fd
// });


// Options ke andar kya hota hai?
// Option	Meaning
// method	Request ka type (GET, POST, PUT, DELETE)
// body	Server ko bheja jane wala data
// headers	Request ke saath additional information bhejna
// mode	CORS request ka behavior control karna
// credentials	Cookies aur authentication credentials bhejna
// cache	Request ki caching ka behavior control karna
// Example: POST request with JSON
// const data = {
//     name: "Mahanant",
//     price: 500000
// };

// const response = await fetch("/predict", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
// });

// const result = await response.json();
// console.log(result);


// Is code mein:
// 1. method: "POST" — Server ko data send kar rahe hain.
// 2. headers — Server ko bata rahe hain ki data JSON format mein hai.
// 3. JSON.stringify(data) — JavaScript object ko JSON string mein convert karta hai.
// 4. response.json() — Server se aaye JSON response ko JavaScript object mein convert karta hai.
// Yaad rakhne wali baat:
// url = Kahan request bhejni hai.
// options = Request kaise bhejni hai aur uske saath kya data bhejna hai.

// Ek important point: Tumhare previous code mein body: fd use kiya gaya hai. FormData ke saath normally Content-Type header manually set nahi karte, kyunki browser khud required multipart/form-data boundary set karta hai.