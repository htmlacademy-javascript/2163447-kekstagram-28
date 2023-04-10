import { openBigPicture } from './big-picture.js';
import { getData } from './api.js';
import { initFilter } from './filter.js';

const GET_URL = 'https://28.javascript.pages.academy/kekstagram/data';
const ERROR_TIMEOUT = 7000;
const thumbnailRendering = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');
const ERROR_TEXT = 'Ошибка загрузки';

const createThumbnail = (data) => {
  const thumbnail = thumbnailRendering.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = data.url;
  thumbnail.querySelector('.picture__likes').textContent = data.likes;
  thumbnail.querySelector('.picture__comments').textContent = data.comments.length;
  thumbnail.addEventListener('click', (evt) => {
    evt.preventDefault();
    openBigPicture(data);
  });
  return thumbnail;
};

const renderThumbnails = (data) => data.forEach((item) => container.append(createThumbnail(item)));

const onGetSuccess = (data) => {
  renderThumbnails(data);
  initFilter(data);
};

const onGetFail = () => {
  const errorBlock = document.createElement('div');
  errorBlock.style.position = 'fixed';
  errorBlock.style.top = '30';
  errorBlock.style.left = '20';
  errorBlock.style.width = '100%';
  errorBlock.style.height = '40px';
  errorBlock.style.color = 'tomato';
  errorBlock.style.textAlign = 'center';
  errorBlock.style.padding = '40px';
  errorBlock.textContent = ERROR_TEXT;
  document.body.append(errorBlock);

  setTimeout(() => {
    errorBlock.remove();
  }, ERROR_TIMEOUT);
};

const getPicturesData = () => getData(GET_URL, onGetSuccess, onGetFail);

export { getPicturesData, renderThumbnails };
