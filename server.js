// Nothing in this file will be transpiled
// Cannot use anything Node does not understand here, but
// Anything required into this file can; This module runs requires through Babel
require('babel-register');

const express = require('express');
const React = require('react');
const ReactDomServer = require('react-dom/server');
const ReactRouter = require('react-router-dom');
const _ = require('lodash');
const fs = require('fs');
const App = require('./src/App').default;

const StaticRouter = ReactRouter.StaticRouter;
const port = 8080;
const baseTemplate = fs.readFileSync('./index.html');
const template = _.template(baseTemplate);
const server = express();

server.use('/public', express.static('./public'));

server.use((req, res) => {
  const context = {};
  const body = ReactDomServer.renderToString(React.createElement(StaticRouter, { location: req.url, context }, React.createElement(App)));

  // If we had any redirects in our app
  if (context.url) {
    res.redirect(context.url);
  }

  res.write(template({ body }));
  res.end();
});

console.log(`listening on port ${port}`);
server.listen(port);

