// script.js (Fix for XSS Protection & Form Submission Issue)
document.addEventListener("DOMContentLoaded", function () {
    // Select existing form elements
    const form = document.getElementById("userForm");
    const inputField = document.getElementById("userInput");
    const outputDiv = document.getElementById("output");

    // Ensure JavaScript prevents form from reloading
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form reload
        
        console.log("Form submitted!"); // Debugging: Check if this appears in Console
        
        let unsafeText = inputField.value.trim(); // Trim whitespace
        let safeText = DOMPurify.sanitize(unsafeText); // Sanitize input
        
        if (safeText) {
            outputDiv.textContent = safeText; // Display sanitized input
        } else {
            outputDiv.textContent = "Please enter some text."; // Handle empty input
        }
    });

   // Create and properly position the "Click Me!" button
    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    button.style.display = 'block'; // Ensures it is visible
    button.style.margin = '20px auto'; // Centers it
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#4CAF50';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.cursor = 'pointer';

    button.addEventListener('click', function () {
        alert('Hello! This is a JavaScript example.');
    });

    // Append the button inside the "main" section to ensure visibility
    document.querySelector('main').appendChild(button);
});
