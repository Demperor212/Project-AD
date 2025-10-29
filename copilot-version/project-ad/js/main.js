// JavaScript code to handle the collapsible sidenav functionality

document.addEventListener('DOMContentLoaded', function() {
    const sidenav = document.querySelector('.sidenav');
    const mainContent = document.querySelector('.main');
    const toggleButton = document.createElement('button');
    
    toggleButton.innerHTML = '▶'; // Arrow icon for expanding
    toggleButton.style.position = 'absolute';
    toggleButton.style.top = '20px';
    toggleButton.style.left = '170px'; // Position it next to the sidenav
    toggleButton.style.backgroundColor = 'transparent';
    toggleButton.style.border = 'none';
    toggleButton.style.color = '#818181';
    toggleButton.style.fontSize = '25px';
    toggleButton.style.cursor = 'pointer';
    document.body.appendChild(toggleButton);

    let isCollapsed = false;

    toggleButton.addEventListener('click', function() {
        if (isCollapsed) {
            sidenav.style.width = '160px';
            mainContent.style.marginLeft = '160px';
            toggleButton.innerHTML = '▶'; // Arrow pointing right
        } else {
            sidenav.style.width = '0';
            mainContent.style.marginLeft = '0';
            toggleButton.innerHTML = '◀'; // Arrow pointing left
        }
        isCollapsed = !isCollapsed;
    });
});