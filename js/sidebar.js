const sidebarCollapse = document.querySelector('.menu-btn');
sidebarCollapse.addEventListener('click', function () {
    console.log('click!');
    const sidebar = document.querySelector('#sidebar');
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    } else {
        sidebar.classList.add('active');
    }
});