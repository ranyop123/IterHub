// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Semester Tabs functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const semesterPanels = document.querySelectorAll('.semester-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            semesterPanels.forEach(panel => panel.classList.remove('active'));

            // Add 'active' class to the clicked button and its corresponding panel
            const semesterNumber = button.getAttribute('data-semester');
            const targetPanel = document.getElementById(`semester-${semesterNumber}`);
            
            button.classList.add('active');
            targetPanel.classList.add('active');
        });
    });
});