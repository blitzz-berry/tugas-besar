// Data destinasi dummy untuk Kalimantan
const destinations = [
    {
        id: 1,
        title: "Air Terjun Semolon, Malinau, Kaltara",
        description: "Keindahan alam tersembunyi di Kalimantan Utara dengan pemandangan yang memukau.",
        category: "alam",
        image: "image/semolon.jpg",
        province: "Kalimantan Utara",
        date: "13 Des 2025",
        views: 1200
    },
    {
        id: 2,
        title: "Pulau Randayan, Kalbar: Pantai Sepi dan Sunset Tak Terlupakan",
        description: "Liburan romantis ke pulau eksotis di Kalimantan Barat dengan pasir putih dan matahari terbenam yang indah.",
        category: "alam",
        image: "image/randayan.jpg",
        province: "Kalimantan Barat",
        date: "11 Des 2025",
        views: 1400
    },
    {
        id: 3,
        title: "Taman Nasional Gunung Palung, Kalbar",
        description: "Menjelajahi hutan tropis dan melihat satwa liar seperti orangutan di habitat aslinya.",
        category: "alam",
        image: "image/palung.jpg",
        province: "Kalimantan Barat",
        date: "09 Des 2025",
        views: 1600
    },
    {
        id: 4,
        title: "Pegunungan Meratus, Kalsel: Trekking dan Budaya Suku Dayak",
        description: "Petualangan menarik di Kalimantan Selatan dengan eksplorasi alam liar dan budaya lokal.",
        category: "alam",
        image: "image/meratus.jpg",
        province: "Kalimantan Selatan",
        date: "07 Des 2025",
        views: 1300
    },
    {
        id: 5,
        title: "Pantai Beras Basah, Bontang, Kaltim",
        description: "Pantai dengan pasir lembut di gerbang laut Kalimantan Timur.",
        category: "alam",
        image: "image/berasbasah.jpg",
        province: "Kalimantan Timur",
        date: "05 Des 2025",
        views: 1100
    },
    {
        id: 6,
        title: "Danau Tahai, Cermin Merah Hutan Gambut Kalteng",
        description: "Danau cantik yang terletak di tengah hutan gambut Kalimantan Tengah.",
        category: "alam",
        image: "image/tahai.jpg",
        province: "Kalimantan Tengah",
        date: "03 Des 2025",
        views: 1500
    },
    {
        id: 7,
        title: "Pulau Lemukutan, Bengkayang, Kalbar",
        description: "Pesona bahari eksotis di ujung Kalimantan Barat.",
        category: "alam",
        image: "image/lemukutan.jpg",
        province: "Kalimantan Barat",
        date: "01 Des 2025",
        views: 1250
    },
    {
        id: 8,
        title: "Loksado, Kalsel: Gerbang Petualangan Bamboo Rafting",
        description: "Nikmati petualangan seru bamboo rafting di Sungai Amandit dan jelajahi Hutan Meratus.",
        category: "alam",
        image: "image/loksado.jpg",
        province: "Kalimantan Selatan",
        date: "29 Nov 2025",
        views: 1350
    },
    {
        id: 9,
        title: "Museum Wasaka, Banjarmasin, Kalsel",
        description: "Jejak perjuangan Banua di rumah bubungan tinggi tepi sungai Banjarmasin.",
        category: "budaya",
        image: "image/wasaka.jpg",
        province: "Kalimantan Selatan",
        date: "27 Nov 2025",
        views: 1000
    },
    {
        id: 10,
        title: "Sungai Mahakam, Kaltim: Rumah Air, Pesut, dan Budaya Suku Dayak & Kutai",
        description: "Menyusuri sungai utama Kalimantan Timur, melihat satwa langka dan mempelajari budaya lokal.",
        category: "budaya",
        image: "image/mahakam.jpg",
        province: "Kalimantan Timur",
        date: "25 Nov 2025",
        views: 1700
    },
    {
        id: 11,
        title: "Tanjung Puting National Park, Kalteng",
        description: "Pusat rehabilitasi orangutan yang terkenal di Kalimantan Tengah.",
        category: "alam",
        image: "image/tanjungputing.jpg",
        province: "Kalimantan Tengah",
        date: "23 Nov 2025",
        views: 1800
    },
    {
        id: 12,
        title: "Rungan River, Kalteng",
        description: "Perjalanan menyusuri sungai di jantung Kalimantan dengan pemandangan hutan rawa.",
        category: "alam",
        image: "image/rungan.jpg",
        province: "Kalimantan Tengah",
        date: "21 Nov 2025",
        views: 1150
    },
    {
        id: 13,
        title: "Pantai Mangkalihat, Kaltim",
        description: "Pantai indah di Kalimantan Timur yang cocok untuk bersantai dan berenang.",
        category: "alam",
        image: "image/mangkalihat.jpg",
        province: "Kalimantan Timur",
        date: "19 Nov 2025",
        views: 950
    },
    {
        id: 14,
        title: "Desa Wisata Buntu Batu, Kalsel",
        description: "Desa wisata di Kalimantan Selatan dengan pemandangan menakjubkan dari atas bukit.",
        category: "alam",
        image: "image/buntubatu.jpg",
        province: "Kalimantan Selatan",
        date: "17 Nov 2025",
        views: 1050
    },
    {
        id: 15,
        title: "Rumah Panjang di Kapuas Hulu, Kalbar",
        description: "Menginap dan belajar budaya suku Dayak di rumah panjang tradisional.",
        category: "budaya",
        image: "image/kapuas.jpg",
        province: "Kalimantan Barat",
        date: "15 Nov 2025",
        views: 1650
    },
    {
        id: 16,
        title: "Kampung Wisata Jelapat, Kaltim",
        description: "Pengalaman budaya lokal di Kalimantan Timur dengan aktifitas seperti jalan-jalan di hutan dan melihat satwa.",
        category: "budaya",
        image: "image/jelapat.jpg",
        province: "Kalimantan Timur",
        date: "13 Nov 2025",
        views: 900
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
        // Ini adalah filter tipe:nilai, misalnya "province:Kalimantan Tengah" atau "category:alam"
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

    // Redirect to sumatera.html when clicking on the Sumatera nav link (in this case, from Kalimantan page)
    const sumateraNavLink = document.getElementById('nav-sumatera-kt');
    if (sumateraNavLink) {
        sumateraNavLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior
            window.location.href = 'sumatera.html'; // Redirect to sumatera.html
        });
    }

    // Redirect to jawa.html when clicking on the Jawa nav link (in this case, from Kalimantan page)
    const jawaNavLink = document.getElementById('nav-jawa-kt');
    if (jawaNavLink) {
        jawaNavLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior
            window.location.href = 'jawa.html'; // Redirect to jawa.html
        });
    }

    // Redirect to sulawesi.html when clicking on the Sulawesi nav link (in this case, from Kalimantan page)
    const sulawesiNavLink = document.getElementById('nav-sulawesi-kt');
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