const mongoose = require('mongoose');
const app = require('./app');
const PORT = process.env.PORT || 3000;

require('dotenv').config();

mongoose
  // .connect(process.env.MONGODB_URI)
  .connect('mongodb://localhost:27017/pokemonCatcher')
  .then(() => {
    app.listen(PORT, console.log('Server started on port 3000'));
  })
  .catch(err => {
    console.log(err);
  });
