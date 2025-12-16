// Data destinasi dummy untuk Jawa
const destinations = [
    {
        id: 1,
        title: "Candi Borobudur, Jawa Tengah",
        description: "Candi Buddha terbesar di dunia dan situs warisan dunia UNESCO dengan relief yang menakjubkan.",
        category: "budaya",
        image: "image/borobudur (7).jpg",
        province: "Jawa Tengah",
        date: "10 Des 2025",
        views: 2500
    },
    {
        id: 2,
        title: "Gunung Bromo, Jawa Timur",
        description: "Gunung berapi aktif dengan kaldera luas dan keindahan matahari terbit yang legendaris.",
        category: "alam",
        image: "image/bromo (15).jpg",
        province: "Jawa Timur",
        date: "08 Des 2025",
        views: 2200
    },
    {
        id: 3,
        title: "Kota Tua Jakarta, DKI Jakarta",
        description: "Kawasan bersejarah dengan arsitektur kolonial Belanda dan museum-museum menarik.",
        category: "budaya",
        image: "image/jakarta (11).jpg",
        province: "DKI Jakarta",
        date: "05 Des 2025",
        views: 1800
    },
    {
        id: 4,
        title: "Pantai Pangandaran, Jawa Barat",
        description: "Pantai eksotis dengan pasir putih dan pemandangan bawah laut yang indah.",
        category: "alam",
        image: "image/pangandaran (10).jpg",
        province: "Jawa Barat",
        date: "02 Des 2025",
        views: 1500
    },
    {
        id: 5,
        title: "Kawah Putih Ciwidey, Jawa Barat",
        description: "Danau kawah dengan air berwarna putih kehijauan dan pemandangan sekitar yang menawan.",
        category: "alam",
        image: "image/ciwidey (1).jpg",
        province: "Jawa Barat",
        date: "28 Nov 2025",
        views: 1900
    },
    {
        id: 6,
        title: "Candi Prambanan, Jawa Tengah",
        description: "Candi Hindu megah yang merupakan warisan dunia UNESCO dengan arsitektur yang rumit.",
        category: "budaya",
        image: "image/prambanan (10).jpg",
        province: "Jawa Tengah",
        date: "25 Nov 2025",
        views: 1750
    },
    {
        id: 7,
        title: "Gunung Ijen, Jawa Timur",
        description: "Gunung berapi aktif terkenal dengan fenomena blue fire dan kawah asamnya.",
        category: "alam",
        image: "image/ijen (9).jpg",
        province: "Jawa Timur",
        date: "20 Nov 2025",
        views: 2100
    },
    {
        id: 8,
        title: "Kota Bandung, Jawa Barat",
        description: "Kota kembang dengan udara sejuk, kuliner lezat, dan tempat wisata menarik.",
        category: "kuliner",
        image: "image/bandung (1).jpg",
        province: "Jawa Barat",
        date: "18 Nov 2025",
        views: 1600
    },
    {
        id: 9,
        title: "Desa Wisata Tawangmangu, Jawa Tengah",
        description: "Desa wisata dengan udara segar, pemandangan indah, dan aktivitas outdoor.",
        category: "alam",
        image: "image/tawangmangu1.jpg",
        province: "Jawa Tengah",
        date: "15 Nov 2025",
        views: 1400
    },
    {
        id: 10,
        title: "Pantai Parangtritis, DI Yogyakarta",
        description: "Pantai legendaris di Yogyakarta dengan mitos dan keindahan alamnya.",
        category: "alam",
        image: "image/parangtritis (3).jpg",
        province: "DI Yogyakarta",
        date: "12 Nov 2025",
        views: 1650
    },
    {
        id: 11,
        title: "Sasak Derawan Penulis, Jawa Tengah",
        description: "Tempat menarik di Jawa Tengah yang berkaitan dengan sejarah sastra dan budaya.",
        category: "budaya",
        image: "https://source.unsplash.com/600x400/?literature,indonesia",
        province: "Jawa Tengah",
        date: "10 Nov 2025",
        views: 1300
    },
    {
        id: 12,
        title: "Curug Cinulang, Jawa Barat",
        description: "Air terjun yang menyegarkan di tengah hutan, cocok untuk refreshing.",
        category: "alam",
        image: "image/cinulang (2).jpg",
        province: "Jawa Barat",
        date: "08 Nov 2025",
        views: 1200
    },
    {
        id: 13,
        title: "Kuliner Sate Ponorogo, Jawa Timur",
        description: "Sate khas Ponorogo dengan bumbu kacang khas dan teknik tusuk sate unik.",
        category: "kuliner",
        image: "image/sate (3).jpg",
        province: "Jawa Timur",
        date: "05 Nov 2025",
        views: 1450
    },
    {
        id: 14,
        title: "Malioboro, DI Yogyakarta",
        description: "Jalanan ikonik di Yogyakarta yang selalu ramai oleh wisatawan dan pedagang.",
        category: "budaya",
        image: "image/malioboro (2).jpg",
        province: "DI Yogyakarta",
        date: "03 Nov 2025",
        views: 1800
    },
    {
        id: 15,
        title: "Taman Nasional Gunung Halimun Salak, Jawa Barat",
        description: "Hutan hujan tropis yang menjadi rumah bagi berbagai satwa endemik.",
        category: "alam",
        image: "image/salak.jpg",
        province: "Jawa Barat",
        date: "30 Okt 2025",
        views: 1350
    },
    {
        id: 16,
        title: "Masjid Agung Demak, Jawa Tengah",
        description: "Salah satu masjid tertua di Indonesia dengan arsitektur tradisional Jawa.",
        category: "budaya",
        image: "image/demak.jpg",
        province: "Jawa Tengah",
        date: "28 Okt 2025",
        views: 1100
    }
];

// Variabel untuk pagination
const itemsPerPage = 8;
let currentPage = 0;
let filteredDestinations = [...destinations];

// Fungsi untuk render cards
function renderCards(destinationsToShow) {
    const container = document.getElementById('destinationContainer');

    // Kosongkan container
    container.innerHTML = '';

    // Render cards untuk halaman saat ini
    destinationsToShow.forEach(destination => {
        const col = document.createElement('div');
        col.className = 'col-lg-3 col-md-6 mb-4';

        col.innerHTML = `
            <div class="card h-100 destination-card border-0 shadow-sm">
                <img src="${destination.image}" class="card-img-top img-fluid object-fit-cover" style="height: 200px;" alt="${destination.title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${destination.title}</h5>
                    <p class="card-text flex-grow-1">${destination.description.substring(0, 100)}...</p>
                    <div class="mt-auto">
                        <small class="text-body-secondary">${destination.date} | ${destination.views} views</small>
                        <small class="text-body-secondary">Provinsi: ${destination.province}</small>
                        <div class="d-flex justify-content-between align-items-center mt-2">
                            <span class="badge bg-primary text-capitalize">${destination.category}</span>
                            <a href="#" class="btn btn-sm btn-outline-primary stretched-link">Lihat Detail</a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(col);
    });

    // Panggil render pagination setelah render cards
    renderPagination();
}

// Fungsi untuk filter destinasi
function filterDestinations(filter) {
    if (filter === 'all') {
        filteredDestinations = [...destinations];
    } else if (filter.includes(':')) {
        // Ini adalah filter tipe:nilai, misalnya "province:Jawa Tengah" atau "category:alam"
        const [type, value] = filter.split(':');
        if (type === 'province') {
            filteredDestinations = destinations.filter(dest => dest.province === value);
        } else if (type === 'category') {
            filteredDestinations = destinations.filter(dest => dest.category === value);
        } else {
            // Jika tipe tidak dikenal, kembalikan semua
            filteredDestinations = [...destinations];
        }
    } else {
        // Ini adalah filter lama berdasarkan category
        filteredDestinations = destinations.filter(dest => dest.category === filter);
    }

    currentPage = 0;
    updateLoadMoreButton();
    renderCards(getCurrentPageDestinations());
}

// Fungsi untuk mendapatkan destinasi halaman saat ini
function getCurrentPageDestinations() {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredDestinations.slice(startIndex, endIndex);
}

// Fungsi untuk update tombol "Load More" (sekarang di-hide karena pagination digunakan)
function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    loadMoreBtn.style.display = 'none'; // Sengaja di-hide karena pagination aktif
}

// Fungsi untuk render pagination
function renderPagination() {
    const container = document.getElementById('paginationContainer');
    const totalPages = Math.ceil(filteredDestinations.length / itemsPerPage);
    if (totalPages === 0) {
        container.innerHTML = ''; // Kosongkan pagination jika tidak ada data
        return;
    }
    const maxVisiblePages = 5; // Jumlah maksimal nomor halaman yang ditampilkan
    let startPage, endPage;

    if (totalPages <= maxVisiblePages) {
        // Jika total halaman kurang dari atau sama dengan max, tampilkan semua
        startPage = 1;
        endPage = totalPages;
    } else {
        // Jika lebih, tentukan start dan end page di sekitar current page
        const maxPagesBeforeCurrent = Math.floor(maxVisiblePages / 2);
        const maxPagesAfterCurrent = Math.ceil(maxVisiblePages / 2) - 1;

        if (currentPage <= maxPagesBeforeCurrent) {
            // Jika current page di awal
            startPage = 1;
            endPage = maxVisiblePages;
        } else if (currentPage + maxPagesAfterCurrent >= totalPages) {
            // Jika current page di akhir
            startPage = totalPages - maxVisiblePages + 1;
            endPage = totalPages;
        } else {
            // Jika current page di tengah
            startPage = currentPage - maxPagesBeforeCurrent;
            endPage = currentPage + maxPagesAfterCurrent;
        }
    }

    container.innerHTML = ''; // Kosongkan dulu

    // Tombol Previous
    const prevItem = document.createElement('li');
    prevItem.className = `page-item ${currentPage === 0 ? 'disabled' : ''}`;
    const prevLink = document.createElement('a');
    prevLink.className = 'page-link';
    prevLink.href = '#';
    prevLink.textContent = 'Previous';
    if (!prevItem.classList.contains('disabled')) {
        prevLink.addEventListener('click', function(e) {
            e.preventDefault();
            changePage(currentPage - 1);
        });
    }
    prevItem.appendChild(prevLink);
    container.appendChild(prevItem);

    // Nomor Halaman
    for (let i = startPage; i <= endPage; i++) {
        const pageItem = document.createElement('li');
        pageItem.className = `page-item ${i - 1 === currentPage ? 'active' : ''}`;
        const pageLink = document.createElement('a');
        pageLink.className = 'page-link';
        pageLink.href = '#';
        pageLink.textContent = i;
        pageLink.addEventListener('click', function(e) {
            e.preventDefault();
            changePage(i - 1);
        });
        pageItem.appendChild(pageLink);
        container.appendChild(pageItem);
    }

    // Tombol Next
    const nextItem = document.createElement('li');
    nextItem.className = `page-item ${currentPage === totalPages - 1 || totalPages === 0 ? 'disabled' : ''}`;
    const nextLink = document.createElement('a');
    nextLink.className = 'page-link';
    nextLink.href = '#';
    nextLink.textContent = 'Next';
    if (!nextItem.classList.contains('disabled')) {
        nextLink.addEventListener('click', function(e) {
            e.preventDefault();
            changePage(currentPage + 1);
        });
    }
    nextItem.appendChild(nextLink);
    container.appendChild(nextItem);
}

// Fungsi untuk pindah halaman
function changePage(newPage) {
    // Validasi newPage
    const totalPages = Math.ceil(filteredDestinations.length / itemsPerPage);
    if (newPage >= 0 && newPage < totalPages) {
        currentPage = newPage;
        renderCards(getCurrentPageDestinations()); // Render halaman baru
        renderPagination(); // Update pagination
    }
}

// Event listener untuk filter buttons
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Hapus class 'active' dari semua button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Tambah class 'active' ke button yang diklik
        this.classList.add('active');

        // Filter destinasi berdasarkan kategori
        const filter = this.getAttribute('data-filter');
        filterDestinations(filter);
    });
});

// Event listener untuk tombol "Load More"
document.getElementById('loadMoreBtn').addEventListener('click', function() {
    currentPage++;
    const newDestinations = getCurrentPageDestinations();

    // Tambahkan destinasi baru ke container
    const container = document.getElementById('destinationContainer');
    newDestinations.forEach(destination => {
        const col = document.createElement('div');
        col.className = 'col-lg-3 col-md-6 mb-4';

        col.innerHTML = `
            <div class="card h-100 destination-card border-0 shadow-sm">
                <img src="${destination.image}" class="card-img-top img-fluid object-fit-cover" style="height: 200px;" alt="${destination.title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${destination.title}</h5>
                    <p class="card-text flex-grow-1">${destination.description.substring(0, 100)}...</p>
                    <div class="mt-auto">
                        <small class="text-body-secondary">${destination.date} | ${destination.views} views</small>
                        <small class="text-body-secondary">Provinsi: ${destination.province}</small>
                        <div class="d-flex justify-content-between align-items-center mt-2">
                            <span class="badge bg-primary text-capitalize">${destination.category}</span>
                            <a href="#" class="btn btn-sm btn-outline-primary stretched-link">Lihat Detail</a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(col);
    });

    updateLoadMoreButton();
});

// Inisialisasi halaman
document.addEventListener('DOMContentLoaded', function() {
    // Tambahkan active class ke filter "all" secara default
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');

    // Render halaman pertama
    renderCards(getCurrentPageDestinations());

    // Update tombol load more
    updateLoadMoreButton();

    // --- Tambahkan event listener untuk navigasi antar halaman ---
    // Redirect to index.html when clicking on the Home nav link
    const homeNavLink = document.querySelector('.nav-link[href="index.html"]');
    if (homeNavLink) {
        homeNavLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior
            window.location.href = 'index.html'; // Redirect to index.html
        });
    }

    // Redirect to sumatera.html when clicking on the Sumatera nav link (in this case, from Jawa page)
    const sumateraNavLink = document.getElementById('nav-sumatera-jw');
    if (sumateraNavLink) {
        sumateraNavLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior
            window.location.href = 'sumatera.html'; // Redirect to sumatera.html
        });
    }

    // Redirect to kalimantan.html when clicking on the Kalimantan nav link (in this case, from Jawa page)
    const kalimantanNavLink = document.getElementById('nav-kalimantan-jw');
    if (kalimantanNavLink) {
        kalimantanNavLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior
            window.location.href = 'kalimantan.html'; // Redirect to kalimantan.html
        });
    }

    // Redirect to sulawesi.html when clicking on the Sulawesi nav link (in this case, from Jawa page)
    const sulawesiNavLink = document.getElementById('nav-sulawesi-jw');
    if (sulawesiNavLink) {
        sulawesiNavLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior
            window.location.href = 'sulawesi.html'; // Redirect to sulawesi.html
        });
    }
    // --- End of navigasi antar halaman ---

    // Ambil semua URL gambar dari array destinations
    const heroImages = destinations.map(dest => dest.image);

    let currentImageIndex = 0;

    function gantiGambarHero() {
        const heroBgElement = document.getElementById('heroBackground');
        if (heroBgElement && heroImages.length > 0) {
            // Ganti style backgroundImage
            heroBgElement.style.backgroundImage = `url('${heroImages[currentImageIndex]}')`;

            // Update indeks
            currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        }
    }

    // Ganti gambar setiap 10 detik (10000 milidetik)
    // Komen dulu biar gk langsung jalan, bisa diaktifin nanti
    // setInterval(gantiGambarHero, 10000);
});

// Search functionality (copied from index.js to maintain consistency across pages)
document.addEventListener('DOMContentLoaded', function() {
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
});