const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryElement = document.querySelector('ul.gallery')
const itemAtribute = ` class=gallery-item`;
const imgAtribute = ` class=gallery-image`;
console.log(galleryElement)

const createGalleryElementMarkupFromObject = ({url, alt}) => `
  <li${itemAtribute || ""}>
    <img src="${url}" alt="${alt}"${imgAtribute || ""}>
  </li>`;

const createGalleryMarkupFromImages = images
  .map(createGalleryElementMarkupFromObject)
  .join(``);

console.log(createGalleryMarkupFromImages)

galleryElement.insertAdjacentHTML('afterbegin', createGalleryMarkupFromImages)