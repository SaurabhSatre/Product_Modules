const express = require('express')
const app = express()
const port=5000
const mongodb = require("./db")
mongodb();
const routes = require('./routes');


app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });