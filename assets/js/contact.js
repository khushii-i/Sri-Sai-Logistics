document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.querySelector('input[placeholder="Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const phone = document.querySelector('input[placeholder="Phone Number"]').value;
    const city = document.querySelector('input[placeholder="City"]').value;
    const message = document.querySelector('textarea[placeholder="Message"]').value;

    try {
        const res = await fetch("https://srisailogistics.vercel.app/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone, city, message })
        });

        const data = await res.json();
        console.log(data);
        alert(data.message); 

        
        e.target.reset();

    } catch (err) {
        console.error("Form submission error:", err);
        alert("There was an error sending your message. Please try again.");
    }
});