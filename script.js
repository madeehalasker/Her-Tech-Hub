document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const formContainer = document.querySelector(".contact-section"); // Find the container element
    const successMessage = document.querySelector(".success-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Perform any form data validation and submission here
        // Hide the form
        form.style.display = "none";
        // Assuming the form submission is successful
        successMessage.style.display = "block";
        //displaySuccessMessage();
    });

    function displaySuccessMessage() {
        // Create a success message element
        const successMessage = document.createElement("div");
        successMessage.textContent = "Your message has been sent. Thank you!";
        successMessage.classList.add("success-message");

        // Insert the success message after the form
        formContainer.appendChild(successMessage);
    }
});