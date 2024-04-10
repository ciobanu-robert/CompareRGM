const express = require('express');
const fs = require('fs');
const path = require('path');
const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');

const api = require('./routes/api')

const staticRoot = __dirname + '/../public/browser/';

const app = express();
app.use(express.json());

app.use(compression());
app.use(cors({
    origin: 'http://localhost:4200',
}));
app.use(morgan('combined'));

app.use('/api', api);

app.use((req, res, next) => {
    const accept = req.accepts('html', 'json', 'xml');
    if (accept !== 'html') {
        return next();
    }
    const ext = path.extname(req.path);
    if (ext !== '') {
        return next();
    }

    fs.createReadStream(staticRoot + 'index.html').pipe(res);
});

app.use(express.static(staticRoot));


module.exports = app;