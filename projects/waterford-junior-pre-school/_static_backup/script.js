const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const heroSlides = Array.from(document.querySelectorAll(".hero-slide"));
let activeHeroSlide = 0;

if (heroSlides.length > 1) {
  setInterval(() => {
    heroSlides[activeHeroSlide].classList.remove("is-active");
    activeHeroSlide = (activeHeroSlide + 1) % heroSlides.length;
    heroSlides[activeHeroSlide].classList.add("is-active");
  }, 5000);
}

// ── Photo Gallery Lightbox ──
const photoItems = Array.from(document.querySelectorAll(".photo-item"));
const lightboxModal = document.getElementById("lightboxModal");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCounter = document.getElementById("lightboxCounter");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const lightboxThumbs = document.getElementById("lightboxThumbs");

if (photoItems.length > 0 && lightboxModal && lightboxImg) {
  let currentIndex = 0;
  const photos = photoItems.map((item) => {
    const img = item.querySelector("img");
    return {
      src: img ? img.getAttribute("src") : "",
      alt: img ? img.getAttribute("alt") : "",
    };
  });

  // Build thumbnails
  if (lightboxThumbs) {
    photos.forEach((photo, idx) => {
      const thumb = document.createElement("div");
      thumb.className = "lightbox-thumb";
      thumb.innerHTML = `<img src="${photo.src}" alt="">`;
      thumb.addEventListener("click", () => updateLightbox(idx));
      lightboxThumbs.appendChild(thumb);
    });
  }

  function updateLightbox(index) {
    currentIndex = (index + photos.length) % photos.length;
    lightboxImg.src = photos[currentIndex].src;
    lightboxImg.alt = photos[currentIndex].alt;
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentIndex + 1} / ${photos.length}`;
    }
    const allThumbs = document.querySelectorAll(".lightbox-thumb");
    allThumbs.forEach((t, i) => {
      t.classList.toggle("active", i === currentIndex);
    });
    if (allThumbs[currentIndex]) {
      allThumbs[currentIndex].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }

  function openLightbox(index) {
    updateLightbox(index);
    lightboxModal.classList.add("active");
    lightboxModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightboxModal.classList.remove("active");
    lightboxModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  photoItems.forEach((item, index) => {
    item.addEventListener("click", () => openLightbox(index));
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener("click", () => updateLightbox(currentIndex - 1));
  if (lightboxNext) lightboxNext.addEventListener("click", () => updateLightbox(currentIndex + 1));

  lightboxModal.addEventListener("click", (e) => {
    if (e.target === lightboxModal || e.target.classList.contains("lightbox-body")) {
      closeLightbox();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (!lightboxModal.classList.contains("active")) return;
    if (e.key === "ArrowLeft") updateLightbox(currentIndex - 1);
    else if (e.key === "ArrowRight") updateLightbox(currentIndex + 1);
    else if (e.key === "Escape") closeLightbox();
  });
}
