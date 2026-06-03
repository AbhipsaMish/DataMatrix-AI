    const scriptURL = "https://script.google.com/macros/s/AKfycbwIMDVRCGLxUJJRiQpxjIyoqu_eCSKP8NSIha_df9tIqQHau41DbtMPCePSjreEFw0W/exec";

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", e => {

        e.preventDefault();

        const btn = form.querySelector("button");
        const originalText = btn.innerText;
        btn.innerText = "Sending...";

        const formData = new FormData(form);
        formData.append("action","contact");

        fetch(scriptURL,{
            method:"POST",
            body:formData
        })
        .then(res => res.json())
        .then(data => {

            if(data.status === "success"){
                alert("Message sent successfully!");
                form.reset();
            }else{
                alert(data.message || "Error sending message. Please try again.");
            }

        })
        .catch(err => {
            console.error('Error!', err.message);
            alert("Error! Something went wrong. Please try again.");
        })
        .finally(() => {
            btn.innerText = originalText;
        });

    });

