// Fungsi untuk menampilkan menu
function showMenu() {
   document.getElementById('navlinks').style.right = '0';
}

// Fungsi untuk menyembunyikan menu
function hideMenu() {
   document.getElementById('navlinks').style.right = '-200px';
}

// Menambahkan event listener pada ikon menu
document.querySelector('.fa-bars').addEventListener('click', showMenu);

// Menambahkan event listener pada ikon close (x) di menu
document.querySelector('.fa-times').addEventListener('click', hideMenu);

function showDescription(descriptionId) {
   $('.description').hide();  
   $('#' + descriptionId).show();
}