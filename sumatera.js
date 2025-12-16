// Data destinasi dummy untuk Sumatera
const destinations = [
    {
        id: 1,
        title: "Danau Toba, Sumatera Utara",
        description: "Danau vulkanik terbesar di Indonesia dengan keindahan alam yang memukau dan pulau Samosir di tengahnya.",
        category: "alam",
        image: "image/toba.jpg",
        province: "Sumatera Utara",
        date: "15 Des 2025",
        views: 1200
    },
    {
        id: 2,
        title: "Bukit Lawang, Sumatera Utara",
        description: "Tempat konservasi orangutan di habitat alami mereka di Taman Nasional Gunung Leuser.",
        category: "alam",
        image: "image/lawang.jpg",
        province: "Sumatera Utara"
    },
    {
        id: 3,
        title: "Air Terjun Tujuh Dara, Sumatera Utara",
        description: "Air terjun yang terdiri dari tujuh tingkat dengan pemandangan yang spektakuler.",
        category: "alam",
        image: "image/tujuh.jpg",
        province: "Sumatera Utara"
    },
    {
        id: 4,
        title: "Ngarai Sianok, Sumatera Barat",
        description: "Lembah curam dengan pemandangan yang menakjubkan dan jembatan gantung yang ikonik.",
        category: "alam",
        image: "image/ngarai.jpg",
        province: "Sumatera Barat"
    },
    {
        id: 5,
        title: "Rumah Gadang, Sumatera Barat",
        description: "Arsitektur tradisional Minangkabau dengan atap melengkung yang khas.",
        category: "budaya",
        image: "image/gadang1.jpg",
        province: "Sumatera Barat"
    },
    {
        id: 6,
        title: "Pulau Mentawai, Sumatera Barat",
        description: "Kepulauan eksotis dengan pantai berpasir putih dan ombak yang sempurna untuk berselancar.",
        category: "alam",
        image: "image/mentawai.jpg",
        province: "Sumatera Barat"
    },
    {
        id: 7,
        title: "Kerinci Seblat, Sumatera Barat",
        description: "Kawasan pelestarian gajah sumatera dan habitat alami satwa langka lainnya.",
        category: "alam",
        image: "image/kerinci2.jpg",
        province: "Sumatera Barat"
    },
    {
        id: 8,
        title: "Masjid Raya Baiturrahman, Aceh",
        description: "Simbol kebangkitan Aceh setelah bencana tsunami, dengan arsitektur yang megah.",
        category: "budaya",
        image: "image/masjid.jpg",
        province: "Aceh"
    },
    {
        id: 9,
        title: "Pantai Lampuuk, Aceh",
        description: "Pantai indah dengan ombak yang tenang dan pemandangan bawah laut yang memukau.",
        category: "alam",
        image: "image/lampukk1.jpg",
        province: "Aceh"
    },
    {
        id: 10,
        title: "Kuala Lumpur-Tapak Padang, Aceh",
        description: "Rute ekspedisi dengan pemandangan alam dan budaya Aceh yang khas.",
        category: "alam",
        image: "image/tapak.jpg",
        province: "Aceh"
    },
    {
        id: 11,
        title: "Bengkulu Heritage Site",
        description: "Situs sejarah dengan bangunan kolonial Belanda dan perkebunan kopi yang khas.",
        category: "budaya",
        image: "image/bengkulu.jpg",
        province: "Bengkulu"
    },
    {
        id: 12,
        title: "Pantai Panjang, Bengkulu",
        description: "Pantai berpasir putih dengan garis pantai yang panjang dan indah.",
        category: "alam",
        image: "image/bengkulu1.jpg",
        province: "Bengkulu"
    },
    {
        id: 13,
        title: "Gorilla Cafe, Jambi",
        description: "Kafe unik dengan tema hutan yang menyajikan kopi lokal dari perkebunan Jambi.",
        category: "kuliner",
        image: "image/gorilacafe.jpg",
        province: "Jambi"
    },
    {
        id: 14,
        title: "Kerinci Valley, Jambi",
        description: "Lembah subur di kaki Gunung Kerinci dengan pemandangan alam yang menakjubkan.",
        category: "alam",
        image: "image/kerinci valey.jpg",
        province: "Jambi"
    },
    {
        id: 15,
        title: "Gorilla Trekking, Riau",
        description: "Pengalaman unik menjelajahi hutan gambut di Sumatera untuk melihat satwa liar.",
        category: "alam",
        image: "image/gorila.jpg",
        province: "Riau"
    },
    {
        id: 16,
        title: "Pulau Rupat, Riau",
        description: "Pulau eksotis dengan pantai berpasir putih dan terumbu karang yang indah.",
        category: "alam",
        image: "image/rupat.jpg",
        province: "Riau"
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
        // Ini adalah filter tipe:nilai, misalnya "province:Sumatera Utara" atau "category:alam"
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

    // Redirect to jawa.html when clicking on the Jawa nav link (in this case, from Sumatera page)
    const jawaNavLink = document.getElementById('nav-jawa-sm');
    if (jawaNavLink) {
        jawaNavLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior
            window.location.href = 'jawa.html'; // Redirect to jawa.html
        });
    }

    // Redirect to kalimantan.html when clicking on the Kalimantan nav link (in this case, from Sumatera page)
    const kalimantanNavLink = document.getElementById('nav-kalimantan-sm');
    if (kalimantanNavLink) {
        kalimantanNavLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior
            window.location.href = 'kalimantan.html'; // Redirect to kalimantan.html
        });
    }

    // Redirect to sulawesi.html when clicking on the Sulawesi nav link (in this case, from Sumatera page)
    const sulawesiNavLink = document.getElementById('nav-sulawesi-sm');
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

// Search functionality
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