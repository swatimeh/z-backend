const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./Router/index');

const app = express();

const port = process.env.PORT||2302;
const hostname = '0.0.0.0';

const localDB = 'mongodb://127.0.0.1:27017/zomato_27';
const serverDB ='mongodb+srv://z_db_27:24092011jigu@cluster0.ek2nm.mongodb.net/z_27?retryWrites=true&w=majority'
// 'mongodb+srv://z_db_27:24092011jigu@cluster0.ek2nm.mongodb.net/z_27?retryWrites=true&w=majority';
//mongodb+srv://z_db_27:<password>@cluster0.ek2nm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


app.use(cors());
app.use(express.json());
app.use('/', router);

mongoose.connect(serverDB,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        app.listen(port, hostname, () => {
            console.log(`Server is running at ${hostname}:${port}`);
        })
    })
    .catch(err => console.log(err));

