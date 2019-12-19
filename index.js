const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv/config');
//body-parser
app.use(express.json());

//middleware
app.use(morgan('dev'));

//Router
const PersonRouter = require('./PersonsRoute');
app.use('/persons',PersonRouter);

//listen
app.listen(2000, () =>{console.log("server is running at 2000")});

//db connection server
mongoose.set('useNewUrlParser',true);
mongoose.set('useUnifiedTopology',true);
mongoose.set("useCreateIndex", true);
mongoose.connect(process.env.DbName, err => {
  if (err) {
    console.log("db UnConnect");
  } else {
    console.log("db connect");
  }
});
