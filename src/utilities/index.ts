// Import Core, NPM and third party packages
import sharp from 'sharp';
import path from 'path';

export const resizeImage = async (
  fileName: string,
  width: number,
  height: number
): Promise<void> => {
  await sharp(
    path.join(__dirname, '../../public/fullImages', `${fileName}.jpg`)
  )
    .resize(width, height)
    .toFile(
      path.join(
        __dirname,
        '../../public/thumbImages',
        `${fileName}-${width}-${height}-thumb.jpg`
      )
    );
};
