"use strict";
const themeToggle = document.getElementById("theme-toggle");
const syncThemeToggle = () =>
  themeToggle.setAttribute(
    "aria-pressed",
    String(document.documentElement.classList.contains("dark")),
  );
syncThemeToggle();
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  syncThemeToggle();
  try {
    localStorage.setItem(
      "weibo-theme",
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
  } catch (_) {
    /* Theme still works. */
  }
});
