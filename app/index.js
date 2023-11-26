const express = require('express');
const connect = require('./config/db');
const dotenv = require('dotenv').lib()
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 6000

connect()


const app = express();
app.use(express.urlencoded({extended: false}));

app.use(bodyParser.json())
// app.use('/api/userList', require('./route/route'))

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});
