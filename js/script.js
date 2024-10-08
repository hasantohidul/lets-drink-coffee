// Select the toggle button and icons
const toggleDarkMode = document.getElementById("dark-mode-toggle");
const sunIcon = toggleDarkMode.querySelector(".sun");
const moonIcon = toggleDarkMode.querySelector(".moon");

/**
 * Set the theme based on provided parameter
 * @param {string} theme - The theme to set ('dark' or 'light'),
 */

const setTheme = (theme) => {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    sunIcon.style.opacity = "1";
    moonIcon.style.opacity = "0";
    toggleDarkMode.setAttribute("aria-pressed", "true");
  } else {
    document.body.classList.remove("dark-mode");
    sunIcon.style.opacity = "0";
    moonIcon.style.opacity = "1";
    toggleDarkMode.setAttribute("aria-pressed", "false");
  }
};

// Initialize theme based on saved preference or system preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  setTheme(savedTheme);
} else {
  const prefersDarkScheme = window.matchMedia(
    "prefers-color-scheme: dark"
  ).matches;
  setTheme(prefersDarkScheme ? "dark" : "light");
}

// Event listener for the toggle button
toggleDarkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDarkMode = document.body.classList.contains("dark-mode");
  if (isDarkMode) {
    setTheme("dark");
    localStorage.setItem("theme", "dark");
  } else {
    setTheme("light");
    localStorage.setItem("theme", "light");
  }
});
