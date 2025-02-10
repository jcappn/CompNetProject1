// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Add interactivity here
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
});
