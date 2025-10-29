const express = require('express');
const path = require('path');
const session = require('express-session');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Config sesiones
app.use(session({
    secret: 'controlcenter_secret_123',
    resave: false,
    saveUninitialized: false,
}));

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
