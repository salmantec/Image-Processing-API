// Import Core, NPM and third party packages
import express from 'express';
import routes from './routes/index';

// Initialize express app
const app = express();
// Set PORT
const port = 5000;

// Master route to set the routes folder
app.use('/api', routes);

// Server listening...
app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
