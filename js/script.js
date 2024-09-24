const toggleDarkMode = document.getElementById('dark-mode-toggle');

toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
})