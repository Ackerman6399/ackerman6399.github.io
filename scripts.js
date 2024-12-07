// Handle the form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting (page reload)

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    alert(`Thank you for contacting us, ${name}! We will respond to your email at ${email}.`);
});
