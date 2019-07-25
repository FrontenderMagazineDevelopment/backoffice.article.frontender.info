const jwt = require('express-jwt');
const express = require('express');
const next = require('next');
const dotenv = require('dotenv');

dotenv.config({
  allowEmptyValues: false,
});

const { PORT, JWT_SECRET, NODE_ENV } = process.env;

const port = parseInt(PORT, 10) || 3000;
const dev = NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const jwtOptions = {
  secret: JWT_SECRET,
  getToken: req => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
    }
    if (req.query && req.query.token) {
      return req.query.token;
    }
    if (req.cookies && req.cookies.token) {
      return req.cookies.token;
    }
    return null;
  }
};

app.prepare().then(() => {
  const server = express();

  if (!dev) {
    server.use(
      jwt(jwtOptions).unless({
        method: 'OPTIONS',
      }),
    );
  }

  server.use(function (err, req, res, next) {
    console.log('check: ', err)
    if (err.name === 'UnauthorizedError') {
      res.redirect(302, 'http://token.frontender.info/?to=http://localhost:3000');
    }
  });

  server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Access-Control-Request-Method, X-Requested-With, Content-Type, Authorization',
    );
    res.setHeader('Access-Control-Allow-Credentials', true);
    return next();
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
})