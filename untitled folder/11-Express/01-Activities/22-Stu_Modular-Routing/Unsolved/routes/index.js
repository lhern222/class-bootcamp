//* It's done when the routes in `server.js` are broken into modules based on different endpoints.

//* It's done when I have created a `routes` directory to hold my route files.

//* It's done when I have created a `tipsRouter.js` file that uses express.Router.

//* It's done when I have created a `feedbackRouter.js` file that also uses express.Router.

//* It's done when I have created an `index.js` file that imports all my router files.

//* It's done when I have required my `routes.js` file inside my `server.js` file.

const express = require('express');
const tipsRouter= require('./tipsRouter');
const feedbackRouter = require('./feedbackRouter');

const app = express();

app.use('/tips', tipsRouter);
app.use('./feedback', feedbackRouter);

module.exports=app; 