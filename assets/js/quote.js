document.querySelector("#callRequestForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("InputName-2").value;
    const email = document.getElementById("InputEmail-2").value;
    const InputState = document.getElementById("InputState").value;
    const distance = document.getElementById("InputDistance").value;
    const kilo = document.getElementById("InputWeight").value;
    const Centimeter = document.getElementById("InputHeight").value;

    try {
        const res = await fetch("https://srisailogistics.vercel.app/api/quote", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, InputState, distance, kilo, Centimeter })
        });

        const data = await res.json();
        alert(data.message);

        e.target.reset();

    } catch (err) {
        console.error("Form submission error:", err);
        alert("There was an error sending your message. Please try again.");
    }
});
