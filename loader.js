// Show loader for a few seconds, then fade into main content
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const main = document.getElementById("main-content");

  setTimeout(() => {
    loader.classList.add("loader-hidden");
    main.classList.remove("opacity-0");
  }, 2500); // transition duration
});
