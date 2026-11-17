"use strict";
const $ = (id) => document.getElementById(id);
$("theme-toggle").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  try {
    localStorage.setItem(
      "weibo-theme",
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
  } catch (_) {
    /* Theme still works. */
  }
});
