import test from 'ava';
import { rotate } from './rotate.js';

const mockPicture = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
]

const pictureRotatedLeft = rotate(mockPicture, 'left');
const pictureRotatedRight = rotate(mockPicture, 'right');

test('Left Rotation', t => {
  t.is(pictureRotatedLeft[0][0], 5);
  t.is(pictureRotatedLeft[4][3], 16);
});

test('Right Rotation', t => {
  t.is(pictureRotatedRight[0][0], 16);
  t.is(pictureRotatedRight[4][3], 5);
});
