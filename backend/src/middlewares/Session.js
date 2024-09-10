import session from 'express-session'

const genId = () => {
}

const initSessionStorage = async (req, res, next) => {
    req.session.user = {};
    req.session.verifyCode = {};
}

const initSession = async (app) => {
    await app.use(session({
        secret: 'keyboard cat',
        cookie: { maxAge: 24 * 60 * 60 * 1000, secure: false, httpOnly: true },
        resave: false,
        saveUninitialized: true,
    }));
    
    
}

module.exports = { initSession, initSessionStorage }