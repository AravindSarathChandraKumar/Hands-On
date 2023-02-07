const express = require("express");
const mongoose = require("mongoose");
const app = express();
 
//middleware
app.use(express.json());
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/CRUD",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connected to MongoDB");
      }
    }
  );
 
module.exports = app;