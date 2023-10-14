const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./api/routes/userRoutes');
const authRouter = require("./api/routes/auth.route")
// const userRouter = require('./api/routes/userRoutes'); 

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error(err);
  });

app.get('/', (req, res) => {
  res.send("Hello World");
});

// Routes
app.use("/api/user", router); 
app.use("/api/auth", authRouter); 

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running on port", port);
});
