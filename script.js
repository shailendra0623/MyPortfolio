// Contact form validation
// This is my JS file
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
    } else {
        alert(`Thank you, ${name}! Your message has been submitted successfully.`);
        document.getElementById("contactForm").reset(); // Clear the form
    }
});
