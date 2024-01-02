const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT || 3000;

require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, console.log("Server started on port 3000"));
  })
  .catch((err) => {
    console.log(err);
  });
