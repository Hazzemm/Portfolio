document.getElementById('menuIcon').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    var menuIcon = document.getElementById('menuI');

    if (navbar.style.display === 'block') {
        navbar.style.display = 'none'; // Hide the navbar
        menuIcon.style.color = 'white'; // Set menu icon color to white
    } else {
        navbar.style.display = 'block'; // Show the navbar
        menuIcon.style.color = 'rgb(10, 188, 129)'; // Set menu icon color to green
    }
});
