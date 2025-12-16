// Data destinasi dummy untuk Sulawesi
const destinations = [
    {
        id: 1,
        title: "Pesona Alam dan Tradisi di Batutumonga, Sulsel",
        description: "Kalau kamu lagi di Toraja, jangan lupa mampir ke Batutumonga untuk menikmati alam dan tradisi lokal.",
        category: "budaya",
        image: "image/batutumonga.jpg",
        province: "Sulawesi Selatan",
        date: "14 Des 2025",
        views: 1200
    },
    {
        id: 2,
        title: "Jalan-jalan ke Kabupaten Banggai, Sulteng",
        description: "Eksplorasi keindahan alam dan budaya di Kabupaten Banggai, Sulawesi Tengah.",
        category: "alam",
        image: "image/banggai.jpg",
        province: "Sulawesi Tengah",
        date: "12 Des 2025",
        views: 1400
    },
    {
        id: 3,
        title: "Mengenal Budaya Sumpah Lemo, Sulut",
        description: "Sumpah Lemo adalah tradisi unik di Sulawesi Utara yang menarik untuk diketahui.",
        category: "budaya",
        image: "image/lemo.jpg",
        province: "Sulawesi Utara",
        date: "10 Des 2025",
        views: 1100
    },
    {
        id: 4,
        title: "Danau Linow, Sulut",
        description: "Danau vulkanik cantik di Sulawesi Utara dengan pemandangan menakjubkan.",
        category: "alam",
        image: "image/linow.jpg",
        province: "Sulawesi Utara",
        date: "08 Des 2025",
        views: 1600
    },
    {
        id: 5,
        title: "Pulau Lao-Lao, Sulteng",
        description: "Keindahan tersembunyi di Sulawesi Tengah dengan pasir putih dan air laut jernih.",
        category: "alam",
        image: "image/lao.jpg",
        province: "Sulawesi Tengah",
        date: "06 Des 2025",
        views: 1300
    },
    {
        id: 6,
        title: "Rumah Adat Pongdowo, Sultengra",
        description: "Arsitektur tradisional suku Wuna di Sulawesi Tenggara yang unik dan menarik.",
        category: "budaya",
        image: "image/pongdowo.jpg",
        province: "Sulawesi Tenggara",
        date: "04 Des 2025",
        views: 1000
    },
    {
        id: 7,
        title: "Pantai Torosiaje, Sulsel",
        description: "Pantai indah di Sulawesi Selatan yang cocok untuk liburan keluarga.",
        category: "alam",
        image: "image/torosiaje.jpg",
        province: "Sulawesi Selatan",
        date: "02 Des 2025",
        views: 1500
    },
    {
        id: 8,
        title: "Taman Nasional Bunaken, Sulut",
        description: "Surga bawah laut di Sulawesi Utara yang terkenal dunia.",
        category: "alam",
        image: "image/bunaken.jpg",
        province: "Sulawesi Utara",
        date: "30 Nov 2025",
        views: 2000
    },
    {
        id: 9,
        title: "Bukit Lampu, Sulteng",
        description: "Tempat wisata di Sulawesi Tengah dengan pemandangan kota dari ketinggian.",
        category: "alam",
        image: "image/bukitlampu.jpg",
        province: "Sulawesi Tengah",
        date: "28 Nov 2025",
        views: 1250
    },
    {
        id: 10,
        title: "Air Terjun Saluopa, Sulsel",
        description: "Air terjun yang indah tersembunyi di Sulawesi Selatan.",
        category: "alam",
        image: "image/saluopa.jpg",
        province: "Sulawesi Selatan",
        date: "26 Nov 2025",
        views: 1150
    },
    {
        id: 11,
        title: "Kampung Naga Bajo, Sultengra",
        description: "Desa wisata yang mempertahankan kehidupan tradisional di Sulawesi Tenggara.",
        category: "budaya",
        image: "image/nagabajo.jpg",
        province: "Sulawesi Tenggara",
        date: "24 Nov 2025",
        views: 950
    },
    {
        id: 12,
        title: "Pantai Kodingareng, Sulsel",
        description: "Gugusan pulau cantik di Sulawesi Selatan untuk wisata bahari.",
        category: "alam",
        image: "image/kodingareng.jpg",
        province: "Sulawesi Selatan",
        date: "22 Nov 2025",
        views: 1350
    },
    {
        id: 13,
        title: "Lembah Kematubung, Sulbar",
        description: "Pemandangan alam eksotis di Sulawesi Barat.",
        category: "alam",
        image: "image/kematubung.jpg",
        province: "Sulawesi Barat",
        date: "20 Nov 2025",
        views: 1050
    },
    {
        id: 14,
        title: "Gunung Soputan, Sulut",
        description: "Gunung berapi aktif yang menjadi destinasi trekking di Sulawesi Utara.",
        category: "alam",
        image: "image/soputan.jpg",
        province: "Sulawesi Utara",
        date: "18 Nov 2025",
        views: 1450
    },
    {
        id: 15,
        title: "Desa Wisata Bantimurung, Sulsel",
        description: "Desa wisata di Sulawesi Selatan dengan potensi alam dan budaya.",
        category: "alam",
        image: "image/bantimurung.jpg",
        province: "Sulawesi Selatan",
        date: "16 Nov 2025",
        views: 1100
    },
    {
        id: 16,
        title: "Situs Megalitikum Karave, Sultengra",
        description: "Situs bersejarah di Sulawesi Tenggara dengan struktur megalitikum.",
        category: "budaya",
        image: "image/karave.jpg",
        province: "Sulawesi Tenggara",
        date: "14 Nov 2025",
        views: 850
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
        // Ini adalah filter tipe:nilai, misalnya "province:Sulawesi Selatan" atau "category:alam"
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

    // Redirect to sumatera.html when clicking on the Sumatera nav link (in this case, from Sulawesi page)
    const sumateraNavLink = document.getElementById('nav-sumatera-sw');
    if (sumateraNavLink) {
        sumateraNavLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior
            window.location.href = 'sumatera.html'; // Redirect to sumatera.html
        });
    }

    // Redirect to jawa.html when clicking on the Jawa nav link (in this case, from Sulawesi page)
    const jawaNavLink = document.getElementById('nav-jawa-sw');
    if (jawaNavLink) {
        jawaNavLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior
            window.location.href = 'jawa.html'; // Redirect to jawa.html
        });
    }

    // Redirect to kalimantan.html when clicking on the Kalimantan nav link (in this case, from Sulawesi page)
    const kalimantanNavLink = document.getElementById('nav-kalimantan-sw');
    if (kalimantanNavLink) {
        kalimantanNavLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior
            window.location.href = 'kalimantan.html'; // Redirect to kalimantan.html
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