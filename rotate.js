function rotate(picture, direction) {
  const dir = direction === 'left'; // choose direction of rotation
  const rows = picture.length;      // the count in the first dimension of the array of pixels
  const cols = picture[0].length;   // the count in the second dimension of the array of pixels
  const newPicture = [];            // define base of the new picture
  let newPictureRows = cols;        // set counter for generating the new rows
  while (newPictureRows--) { newPicture.push([]) }
  // new picture defined

  const reversedPositions = [];         // flip the direction of the indexes to use for replacement
  let revPosCount = dir ? cols : rows;  // choose which indexes to use depending on the direction of rotation
  while (revPosCount--) reversedPositions.push(revPosCount);

  picture.forEach((row, y) => { // first dimension  (rows)
    row.forEach((pixel, x) => { // second dimension (pixels)
      // depending on the direction of rotation, x or y to be our flipped positions
      if (dir) newPicture[reversedPositions[x]][y] = pixel;
      else newPicture[x][reversedPositions[y]] = pixel;
    });
  });
  return newPicture;
}

export { rotate };