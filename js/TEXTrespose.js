
const form = document.querySelector("form");

form.addEventListener("submit", async function (evt) {
    evt.preventDefault();

    const formData = new FormData(form);

    try {
        const response = await fetch("/predict", {
            method: "POST",
            body: formData
        });

        const result = await response.text();

        document.querySelector("#result").textContent = result;

    } catch (error) {
        console.error(error);
    }
});
