// Navbar scroll effect - since Bootstrap handles the responsive nav, we just add scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50) {
        navbar.classList.add('bg-white', 'shadow-sm');
        navbar.style.backdropFilter = 'none';
    } else {
        navbar.classList.remove('bg-white', 'shadow-sm');
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if(targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize Bootstrap carousel if needed
document.addEventListener('DOMContentLoaded', function() {
    // Handle the backdrop filter for navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.backdropFilter = 'blur(10px)';
    }

    // Initialize the carousel with custom settings
    const carouselElement = document.getElementById('heroCarousel');
    if(carouselElement) {
        const carousel = new bootstrap.Carousel(carouselElement, {
            interval: 5000,
            wrap: true
        });
    }

    // Search functionality
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    if(searchButton && searchInput) {
        searchButton.addEventListener('click', function() {
            performSearch();
        });

        searchInput.addEventListener('keypress', function(e) {
            if(e.key === 'Enter') {
                performSearch();
            }
        });
    }

    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if(searchTerm) {
            alert(`Searching for: ${searchTerm}`);
            // In a real implementation, you would perform the actual search here
            // For now, we just show an alert
            searchInput.value = ''; // Clear the search input
        }
    }

    // Redirect to sumatera.html when clicking on the Sumatera nav link
    const sumateraNavLink = document.getElementById('nav-sumatera');
    if (sumateraNavLink) {
        sumateraNavLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior
            window.location.href = 'sumatera.html'; // Redirect to sumatera.html
        });
    }

    // Redirect to jawa.html when clicking on the Jawa nav link
    const jawaNavLink = document.getElementById('nav-jawa');
    if (jawaNavLink) {
        jawaNavLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior
            window.location.href = 'jawa.html'; // Redirect to jawa.html
        });
    }

    // Redirect to kalimantan.html when clicking on the Kalimantan nav link
    const kalimantanNavLink = document.getElementById('nav-kalimantan');
    if (kalimantanNavLink) {
        kalimantanNavLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior
            window.location.href = 'kalimantan.html'; // Redirect to kalimantan.html
        });
    }

    // Redirect to sulawesi.html when clicking on the Sulawesi nav link
    const sulawesiNavLink = document.getElementById('nav-sulawesi');
    if (sulawesiNavLink) {
        sulawesiNavLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior
            window.location.href = 'sulawesi.html'; // Redirect to sulawesi.html
        });
    }
});