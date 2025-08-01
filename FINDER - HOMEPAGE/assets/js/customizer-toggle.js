document.addEventListener('DOMContentLoaded', function () {
    const customizeBtn = document.getElementById('customize-btn');
    const customizerMenu = document.getElementById('customizer');

    if (!customizeBtn || !customizerMenu) {
        console.warn('Customize button or customizer menu element not found');
        return;
    }

    customizeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        // Toggle visibility by toggling a class or inline style
        if (customizerMenu.style.display === 'block') {
            customizerMenu.style.display = 'none';
        } else {
            customizerMenu.style.display = 'block';
        }
    });

    // Optional: close the customizer menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!customizerMenu.contains(e.target) && e.target !== customizeBtn) {
            customizerMenu.style.display = 'none';
        }
    });
});
