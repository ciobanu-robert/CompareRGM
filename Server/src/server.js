const http = require('http');
const mongoose = require('mongoose');

require('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT || 8000;

const MONG_URL = process.env.MONGO;

const server = http.createServer(app) ;

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function startServer() {
    await mongoose.connect(MONG_URL);


    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}

startServer()
