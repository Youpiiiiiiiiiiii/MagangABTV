const menuToggle = document.getElementById('menu-toggle');
const menuItems = document.querySelectorAll('.menu a');

// Tambahkan event listener untuk setiap item menu
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Tutup menu saat item menu diklik
    menuToggle.checked = false;
  });
});