## Image Processing App - Backend (API)

### Pre-reqs
- Install [Node.js](https://nodejs.org/en/)

### Run on your local
- Clone the repository ```git clone https://github.com/salmantec/Image-Processing-API.git```
- Install dependencies ```cd Image-Processing-API``` and ```npm install```
- Run ```npm run start```
- Navigate to `http://localhost:5000/api` to check express server is working or not. 
- You'll see the following message as a response ```Main api route```

### To run test cases
- Run ```npm run test```

### Build the project
- Run ```npm run build```
- Once build is done, to start the app run ```node dist/index.js```

### Prettier and lint
- Run ```npm run lint``` - to check the linting errors
- Run ```npm run prettier``` - It'll automatically prettify the codes.

### To test the application
- Add few images (in .jpg format) under `public/fullImages`
- Start the application
- Hit the `localhost:5000/api/images?filename=fjord&width=200&height=200` URL from your browser. Here `filename`, `width` and `height` are mandatory query parameters
- You will get the resized image based on the width and height that you've added in the url.
- You can see that resized images under `public/thumbImages`.
- If you pass the same image name with same width and height, server will serve the images from `public/thumbImages` instead of resizing the images every time.
