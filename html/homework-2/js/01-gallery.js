import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

galleryRef.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

galleryRef.addEventListener('click', modalWindowHandler);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
    `;
    })
    .join('');
}

function modalWindowHandler(e) {
  e.preventDefault();

  const isImgEl = e.target.classList.contains('gallery__image');

  if (!isImgEl) {
    return;
  }

  const modalWindow = basicLightbox.create(
    `<img src="${e.target.dataset.source}">`,
  );

  modalWindow.show();

  document.addEventListener('keydown', e => {
    if (!modalWindow.visible()) {
      return;
    }
    if (e.code === 'Escape') {
      modalWindow.close();
    }
  });
}
