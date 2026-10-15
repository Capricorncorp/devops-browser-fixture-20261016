'use strict';

const http = require('node:http');
const revision = 'browser-target-v0';
http.createServer((_request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
  response.end(JSON.stringify({ service: 'disposable-devops-browser-proof', revision,
    environment: process.env.ACCEPTANCE_VERSION || 'unset' }) + '\n');
}).listen(Number(process.env.PORT || 3000), '0.0.0.0');
