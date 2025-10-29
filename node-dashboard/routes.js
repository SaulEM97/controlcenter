const express = require('express');
const router = express.Router();

// credenciales fijas
const USER = "admin";
const PASS = "1234";

// Middleware para proteger el dashboard
function authMiddleware(req, res, next) {
    if (req.session && req.session.authenticated) {
        return next();
    }
    res.redirect('/login');
}

router.get('/', (req, res) => {
    res.redirect('/login');
});

router.get('/login', (req, res) => {
    res.render('login', { error: null });
});

router.post('/login', (req, res) => {
    const { user, pass } = req.body;

    if (user === USER && pass === PASS) {
        req.session.authenticated = true;
        return res.redirect('/dashboard');
    }

    res.render('login', { error: "Credenciales incorrectas" });
});

router.get('/dashboard', authMiddleware, (req, res) => {
    res.render('dashboard');
});

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
});

module.exports = router;
