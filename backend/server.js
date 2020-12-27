const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const userRouter = require('./routes/user');
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);


app.use(bodyParser.json());
// DB Config

// Connect to MongoDB
mongoose
  .connect(
    'mongodb+srv://sarang:gtIm7455A6VT2Rpe@test.9qdgh.mongodb.net/project?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.use('/user',userRouter);
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));