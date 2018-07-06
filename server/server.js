const path = require('path');
const express = require('express');
const app = express();  //creates express app
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath)); //tells express app to use the public directory

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {          //heroku environment variable
  console.log('Server is up');
});
