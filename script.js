// Mengambil semua kelas nav-link
const navLinks = document.querySelectorAll(".nav-link");

// Mengambil semua kelas page
const pages = document.querySelectorAll(".page");

// Variable to keep track of the current active page
let currentPage = "home";

const contactMenu = document.getElementsByClassName("contact")[0];

// Menambahkan event listener pada tiap link
navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        // Mendapatkan target page dari atribut data-target
        const targetPage = this.getAttribute("data-target");

        // Mencegah default behavior dari anchor (scroll ke ID)
        event.preventDefault();

        // Jika targetPage sama dengan currentPage, reload halaman
        if (targetPage === currentPage) {
            location.href = "index.html#" + targetPage;
            if (contactMenu.classList.contains("show")) {
                contactMenu.classList.remove("show");
            }
        } else {
            // Perbarui currentPage dengan targetPage
            currentPage = targetPage;

            // Sembunyikan semua halaman
            pages.forEach((page) => {
                page.style.display = "none";
                page.style.color = "white";
            });

            window.scrollTo(0, 0); // Mengatur posisi scroll ke atas

            // Tampilkan halaman target
            if (targetPage == "home") {
                document.getElementById(targetPage).style.display = "flex";
            } else if (targetPage == "about") {
                document.getElementById(targetPage).style.display = "block";
            } else if (targetPage == "project") {
                document.getElementById(targetPage).style.display = "inline";
            }
            // Perbarui URL hash tanpa reload halaman
            window.location.hash = targetPage;
        }
    });
});

pages.forEach((page) => {
    page.style.display = "none";
});
// Tampilkan halaman 'home' secara default saat halaman dimuat
document.getElementById("home").style.display = "flex";

window.scrollTo(0, 0);
function ContactMenu(event) {
    // Toggle dropdown saat tombol diklik
    contactMenu.classList.toggle("show");
    event.stopPropagation(); // Mencegah event bubble agar klik di tombol tidak dianggap klik di luar dropdown
}

// Menutup dropdown saat klik di luar dropdown
window.addEventListener("click", function () {
    if (contactMenu.classList.contains("show")) {
        contactMenu.classList.remove("show");
    }
});
