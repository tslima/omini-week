const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path')

const app = express();


mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
app.use(cors())
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname,'..','uploads')))
app.use(routes);

app.listen(3333);