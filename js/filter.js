import { renderThumbnails } from './thumbnail.js';
import { shuffleArray, debounce } from './util.js';

const RANDOM_COMMENTS_COUNT = 10;
const RERENDER_DELAY = 500;
const DISCUSSED_ID = 'filter-discussed';
const RANDOM_ID = 'filter-random';

const imgFilters = document.querySelector('.img-filters');

const removeElements = (elements) => {
  elements.forEach((element) => element.remove());
};

const rerenderThumbnails = (data, id) => {
  const dataCopy = data.slice();
  let sortArray = dataCopy;
  removeElements(document.querySelectorAll('.picture'));
  if (id === DISCUSSED_ID) {
    sortArray = dataCopy.sort((a, b) => b.comments.length - a.comments.length);
  }
  if (id === RANDOM_ID) {
    sortArray = shuffleArray(dataCopy).slice(0, RANDOM_COMMENTS_COUNT);
  }
  renderThumbnails(sortArray);
};

const rerenderTimeout = debounce((data, id) => rerenderThumbnails(data, id), RERENDER_DELAY);

const onImageFiltersClick = (evt, data) => {
  if (evt.target.closest('.img-filters__button') && !evt.target.closest('.img-filters__button--active')) {
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    const id = evt.target.id;
    rerenderTimeout(data, id);
  }
};

const initFilter = (data) => {
  imgFilters.classList.remove('img-filters--inactive');
  imgFilters.addEventListener('click', (evt) => {
    onImageFiltersClick(evt, data);
  });
};

export { initFilter };
