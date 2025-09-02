// Open Lightbox
const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

galleryItems.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

// Close Lightbox
function closeLightbox() {
  lightbox.style.display = "none";
}

// Filter Images
function filterImages(category) {
  const items = document.querySelectorAll(".gallery-item");

  items.forEach(item => {
    if (category === "all" || item.dataset.category === category) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
