/**
 * Router.js
 * 
 * Responsible for managing the express application
 */
const fs = require('fs');
const express = require('express');
const env = process.env;

exports.start = () => {
    // App
    const app = express();

    // Middlewares
    // TODO: Put something here

    // Add routes
    // Routes must include: exports.path (path of the router) and exports.router (the actual express router)
    const path = require('path').dirname(require.main.filename)
    fs.readdirSync(path + "/router/routes/").forEach((file) => {
        const route = require(path + "/router/routes/" + file);
        app.use(route.path, route.router);
    });

    // Start listening
    var PORT = env.PORT;
    if(env.SSL_CRT){
        const https = require('https');

        https.createServer({
            key: fs.readFileSync(env.SSL_KEY),
            cert: fs.readFileSync(env.SSL_CRT)
        }, app).listen(PORT);
    } else {
        app.listen(PORT);
    }
}