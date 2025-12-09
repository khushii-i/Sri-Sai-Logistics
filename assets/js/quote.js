document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.querySelector('input[placeholder="Name"]').value;
   const email = document.querySelector('input[placeholder="Email"]').value;
   const freightType = document.getElementById("freightSelect").value;
   const distance = document.querySelector('input[placeholder="Distance"]').value;
   const kilo = document.querySelector('textarea[placeholder="Kilo"]').value;
   const Centimeter = document.querySelector('textarea[placeholder="Centimeter"]').value;



    try {
        const res = await fetch("https://srisailogistics.vercel.app/api/quote", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, freightType, distance, kilo, Centimeter })
        });

        const data = await res.json();
        alert(data.message); 

        
        e.target.reset();

    } catch (err) {
        console.error("Form submission error:", err);
        alert("There was an error sending your message. Please try again.");
    }
});