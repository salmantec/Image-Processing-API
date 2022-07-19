// Import Core, NPM and third party packages
import express from 'express';

// Import local project files
import imageProcessor from './api/imageProcessor';

// Initialize express.Router
const routes = express.Router();

// Master (Mock) route to check the express application
routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Main api route');
});

// Actual Image processing routes
routes.use('/images', imageProcessor);

export default routes;
