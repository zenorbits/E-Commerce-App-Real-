const express = require('express');
const app = express();
const cookieParser = require('cookie-parser'); // corrected module name
const dotenv = require('dotenv');
dotenv.config();
const middleWare  = require('./middleware/middleware');
const authRoute = require('./routes/auth.routes');
const getUserInfo = require('./routes/userInfo.route');

const cors = require('cors');
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST",],
    credentials: true

}));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); // added express. before urlencoded

app.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-store");
    next();
});

//Auth Route

app.use('/api/auth',authRoute);

app.get('/admin/dashboard',middleWare.authMidddleWare,middleWare.requiredRole('admin'),(req,res)=>{
    res.send('Welcome Admin')
});

//Get Users Route

app.use('/api/get',getUserInfo);


module.exports = app;