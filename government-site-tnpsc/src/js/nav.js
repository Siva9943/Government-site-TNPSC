document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const navMenu = document.getElementById('nav-menu');

    menuButton.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});

// CSS for the active class to show/hide the menu
const style = document.createElement('style');
style.innerHTML = `
    #nav-menu {
        display: none;
        flex-direction: column;
        align-items: center;
    }
    #nav-menu.active {
        display: flex;
    }
`;
document.head.appendChild(style);