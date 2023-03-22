const thumbnailRendering = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnail = ({ url, likes, comments }) => {
  const thumbnail = thumbnailRendering.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  return thumbnail;
};

const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.appendChild(thumbnail);
  });
  container.appendChild(fragment);
};

export { renderThumbnails };
