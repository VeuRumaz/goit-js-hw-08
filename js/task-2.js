const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
];

const gallOfImg = document.querySelector('.gallery');

const gallOfImgItems = images
  .map(({ url, alt }) => {
    return `
    <li>
      <img src="${url}" alt="${alt}" width="300" height="300">
    </li>
  `;
  })
  .join('');

gallOfImg.insertAdjacentHTML('beforeend', gallOfImgItems);

const imgStyle = document.createElement('style');
imgStyle.textContent = `
  .gallery {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0 auto;
    gap: 48px 24px;
    max-width: 1128px;
    justify-content: center; 
  }
  .gallery li {
    flex: 0 1 300px; 
  }
  .gallery img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    display: block;
  }
`;

document.head.appendChild(imgStyle);
