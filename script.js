// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
    
    // Accordion functionality
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
    
    // Initialize map
    var map = L.map('map').setView([-7.75, 112.58], 11);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Add markers for important points (approximate coordinates)
    L.marker([-7.7805941, 112.6578405]).addTo(map)
        .bindPopup('Basecamp Tambaksari')
        .openPopup();
        
    L.marker([-7.7680, 112.5980]).addTo(map)
        .bindPopup('Pos 1 Onto Boego (1.300 mdpl)');
        
    L.marker([-7.7520, 112.5920]).addTo(map)
        .bindPopup('Pos 2 Tampuono');
        
    L.marker([-7.7500, 112.5900]).addTo(map)
        .bindPopup('Pos 3 Eyang Sakri');
        
    L.marker([-7.7400, 112.5850]).addTo(map)
        .bindPopup('Pos 4 Eyang Semar');
        
    L.marker([-7.7350, 112.5800]).addTo(map)
        .bindPopup('Pos 5 Mangkutoromo (Camp Favorit)');
        
    L.marker([-7.7300, 112.5750]).addTo(map)
        .bindPopup('Pos 6 Candi Sepilar');
        
    L.marker([-7.7200, 112.5700]).addTo(map)
        .bindPopup('Pos 7 Jawa Dipa');
        
    L.marker([-7.7100, 112.5650]).addTo(map)
        .bindPopup('Plawangan');
        
    L.marker([-7.7050, 112.5600]).addTo(map)
        .bindPopup('Puncak Arjuno (3.339 mdpl)');
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Adjust map height on mobile devices
    function adjustMapHeight() {
        const mapElement = document.getElementById('map');
        if (window.innerWidth <= 768) {
            mapElement.style.height = '300px';
        } else {
            mapElement.style.height = '400px';
        }
    }
    
    // Initial adjustment
    adjustMapHeight();
    
    // Adjust on window resize
    window.addEventListener('resize', adjustMapHeight);
});
