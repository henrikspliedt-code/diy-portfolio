document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.querySelector(".topbar__toggle");
  const nav = document.querySelector(".topbar__nav");
  const closeBtn = document.querySelector(".topbar__close");
  const body = document.body;

  function openMenu() {
    if (!nav || !toggle) return;
    nav.classList.add("is-open");
    nav.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    body.classList.add("menu-open");
  }

  function closeMenu() {
    if (!nav || !toggle) return;
    nav.classList.remove("is-open");
    nav.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    body.classList.remove("menu-open");
  }

  if (toggle) {
    toggle.addEventListener("click", openMenu);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeMenu);
  }

  const links = document.querySelectorAll(".topbar__nav a");
  links.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav && nav.classList.contains("is-open")) {
      closeMenu();
    }
  });

});
