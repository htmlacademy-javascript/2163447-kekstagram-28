import {createIdGenerator, createMessage, createComment, createPicture} from './data.js';

const getPictures = () =>
  Array.from({ length: POSTED_PICTURES }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

getPictures();

