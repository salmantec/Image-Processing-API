// Import Core, NPM and third party packages
import express from 'express';
import path from 'path';
import fs from 'fs';

// Import local project files
import { resizeImage } from '../../utilities';

// Initialize express.Router
const app = express.Router();

// Get API - To return processed image as a response or an error
app.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    // Get filename, width, height from query param
    const fileName = req.query?.filename as string;
    const width: number = parseInt(req.query?.width as string);
    const height: number = parseInt(req.query?.height as string);

    // If any of the required parameter is missing, then should return error with 500 status code.
    if (!fileName || !width || !height) {
      res
        .status(500)
        .send(
          'filename, width and height are mandatory query parameters. Please set these 3 parameter with values and hit the api again'
        );
    } else {
      const actualImage: string = path.join(
        __dirname,
        '../../../public/fullImages',
        `${fileName}.jpg`
      );

      // Return 404 (Not found) error, If there is no such file
      if (!fs.existsSync(actualImage)) {
        res
          .status(404)
          .send(
            `${fileName} does not exist in server. Please check the file name`
          );
      } else {
        const thumbImage: string = path.join(
          __dirname,
          '../../../public/thumbImages',
          `${fileName}-${width}-${height}-thumb.jpg`
        );

        // Return thumbImage, If we already have resized image for that fileName
        if (fs.existsSync(thumbImage)) {
          res.sendFile(thumbImage);
        } else {
          // If there is no resized file for that fileName, then process the image and resize it.
          await resizeImage(fileName, width, height);

          // Send response with processed (resized) image to client.
          res.sendFile(
            path.join(
              __dirname,
              '../../../public/thumbImages',
              `${fileName}-${width}-${height}-thumb.jpg`
            )
          );
        }
      }
    }
  }
);

export default app;
