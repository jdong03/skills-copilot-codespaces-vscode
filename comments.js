// Create web server
// Usage: node comments.js

var http = require('http');
var url = require('url');
var qs = require('querystring');
var items = [];

var server = http.createServer(function (req, res) {
    switch (req.method) {
        case 'POST':
            add(req, res);
            break;
        case 'GET':
            show(res);
            break;
        default
    }
});