// Only presentation preferences live in localStorage; credentials stay in HttpOnly cookies.
try {
  const saved = localStorage.getItem("weibo-theme");
  document.documentElement.classList.toggle(
    "dark",
    saved === "dark" ||
      (!saved && matchMedia("(prefers-color-scheme: dark)").matches),
  );
} catch (_) {
  /* System defaults remain usable when browser storage is disabled. */
}

try {
  document.documentElement.classList.toggle(
    "sidebar-collapsed",
    localStorage.getItem("weibo-sidebar-collapsed") === "true",
  );
} catch (_) {
  /* The expanded sidebar remains usable. */
}
