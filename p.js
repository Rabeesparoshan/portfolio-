document.getElementById('dashboard-toggle').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevents click from bubbling up
    const menu = document.getElementById('dashboard-menu');
    menu.classList.toggle('active');
});

// Close the sidebar if clicked outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('dashboard-menu');
    const dashboardToggle = document.getElementById('dashboard-toggle');
    if (!menu.contains(event.target) && event.target !== dashboardToggle) {
        menu.classList.remove('active');
    }
});
