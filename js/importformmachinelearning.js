//// this part ma json respose send ho rha ha lakna json ma hi out put malga lakan
const form = document.querySelector("form");

form.addEventListener("submit", async function (evt) {
    evt.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    try {
        const response = await fetch("http://127.0.0.1:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        });

        const result = await response.json();

        document.querySelector("#result").textContent = result.message;

    } catch (error) {
        console.error(error);
    }
});
// return jsonify({
    //     "message": "Registration successful!",
    //     "name": name
    // })
 
// part 2 agar text ma data send karna ha to .textcontent use karna hoga
    
javascript
const form1 = document.querySelector("form");

form.addEventListener("submit", async function (evt) {
    evt.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    try {
        const response = await fetch("http://127.0.0.1:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        });

        const result = await response.text();

        document.querySelector("#result").textContent = result;

    } catch (error) {
        console.error("Error:", error);
    }
});

