// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Add interactivity here
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.id = "userInput";
    inputField.placeholder = "Type something...";

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";

    const outputDiv = document.createElement("div");
    outputDiv.id = "output";

    submitButton.addEventListener("click", function () {
        let unsafeText = document.getElementById("userInput").value;
        let safeText = DOMPurify.sanitize(unsafeText);
        document.getElementById("output").textContent = safeText;//Fixed: Corrected Id and Variable Name 
    });

    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    button.style.margin = '20px';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#4CAF50';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.cursor = 'pointer';

    button.addEventListener('click', function () {
        alert('Hello! This is a JavaScript example.');
    });

    document.querySelector('main').appendChild(button);
    document.body.appendChild(inputField);
    document.body.appendChild(submitButton);
    document.body.appendChild(outputDiv);
});
