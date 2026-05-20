/*
 * Initializes and applies the user's preferred theme (light or dark)
 * from localStorage or system settings.
 */
const theme = (() => {
  if (
    typeof localStorage !== "undefined" &&
    localStorage.getItem("theme")
  ) {
    return localStorage.getItem("theme");
  }
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  return "dark";
})();

if (theme === "light") {
  document.documentElement.classList.add("light");
} else {
  document.documentElement.classList.remove("light");
}