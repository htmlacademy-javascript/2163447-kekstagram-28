import { getPictures } from './data.js';

const thumbnailRendering = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const container = document.querySelector('.pictures');
const data = getPictures();

const createThumbnail = (item) => {
  const thumbnail = thumbnailRendering.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = item.url;
  thumbnail.querySelector('.picture__likes').textContent = item.likes;
  thumbnail.querySelector('.picture__comments').textContent = item.comments.length;
  return thumbnail;
};

const renderThumbnails = () =>  data.forEach((item) => container.append(createThumbnail(item)));

export { renderThumbnails };
