// start server
require('dotenv').config();
const app = require('./src/app');
const connectToDB = require('./src/db/db');


// connect to database
connectToDB();

// listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});