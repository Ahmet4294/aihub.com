const sideBar = document.getElementById("sideBar");
const nav = document.querySelector("header nav");
const links = document.querySelectorAll("header nav ul li a");
const sections = document.querySelectorAll("section");
const form = document.querySelector(".form-bg form");
const overlay = document.querySelector(".overlay");
const body = document.body.style;

function sideBAR() {
  sideBar.classList.toggle("active");
  nav.classList.toggle("active");
}

sideBar.addEventListener("click", sideBAR);

for (const link of links) {
  link.addEventListener("click", () => {
    for (const l of links) {
      l.classList.remove("active");
    }
    link.classList.add("active");
  });
}

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  for (const link of links) {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  }
});

function get() {
  form.classList.add("active");
  overlay.classList.add("active");
  body.overflow = "hidden";
}

overlay.addEventListener("click", remove);

function remove() {
  form.classList.remove("active");
  overlay.classList.remove("active");
  body.overflow = "auto";
}

function Times() {
  remove();
}
