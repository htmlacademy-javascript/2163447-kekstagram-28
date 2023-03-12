import {getRandomArrayElement} from './util.js';

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

const generateCommentId = createIdGenerator();

const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const createMessage = () =>
  Array.from({ length: getRandomPositiveInteger(1, 2) }, () =>
    getRandomArrayElement(MESSAGES)
  ).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomPositiveInteger(1, AVATAR)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(LIKES_MIN, LIKES_MAX),
  comments: Array.from(
    { length: getRandomPositiveInteger(0, COMMENTS) },
    createComment
  ),
});

export {createIdGenerator, createMessage, createComment, createPicture};
