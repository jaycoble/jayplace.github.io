if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const path = require('path')
const session = require('express-session');
const ExpressError = require('./utilities/ExpressError');
const ejsMate = require('ejs-mate');

const cloudinary = require('cloudinary');
const helmet = require('helmet');

const app = express();

app.engine('ejs', ejsMate);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.set('public', path.join(__dirname, 'public'));

app.use(helmet());
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")));

const secret = process.env.SECRET;

app.get('/', (req, res) => {
    res.render('index.html')
})

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
    console.log('Press Ctrl+C to quit.');
});