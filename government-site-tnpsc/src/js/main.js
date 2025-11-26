// This file contains the JavaScript functionality for the project, including the navbar toggle functionality.

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const navMenu = document.getElementById('nav-menu');

    // Toggle the visibility of the vertical menu on button click
    menuButton.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});

// Additional functionality can be added here as needed.