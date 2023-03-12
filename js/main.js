import {getRandomPositiveInteger} from './util.js';
import {createMessage, createComment, createPicture} from './data.js';

const POSTED_PICTURES = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const AVATAR = 6;
const COMMENTS = 15;
const MESSAGES = [
  'Всё отлично!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
];
const DESCRIPTIONS = ['Это мой лучший кадр!', 'Я будущий популярный блогер!'];
const NAMES = ['Оксана', 'Матвей', 'Виктория', 'Тимофей', 'Юрий'];

const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const getPictures = () =>
  Array.from({ length: POSTED_PICTURES }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

getPictures();

