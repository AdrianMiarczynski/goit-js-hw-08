import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const listGallery = document.querySelector('.gallery');

galleryItems.forEach(image => {
  const imageList = document.createElement('li');
  imageList.classList.add('gallery__image');
  listGallery.append(imageList);
  imageList.insertAdjacentHTML(
    'beforeend',
    `<a class="gallery__link" href=${image.original}><img class="gallery__image" src=${image.preview} alt=${image.description}></></a>`
  );
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
console.log(listGallery);
