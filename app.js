const express = require('express');
const mongoose = require('mongoose')

const app = express();

const connectDB = require('./config/db');

// Connect to MongoDB database using Mongoose
mongoose.connect("mongodb://localhost:3000/myapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));



// Connect to MongoDB database
connectDB();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});