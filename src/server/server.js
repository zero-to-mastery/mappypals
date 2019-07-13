// Setup server and router
const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));

// use default middle-wares
const middlewares = jsonServer.defaults();
server.use(middlewares);

// Use body-parser to handle POST, PUT and PATCH (json-server's body-parser)
server.use(jsonServer.bodyParser);

// Simulate one second delay in all requests
server.use((req, res, next) => {
    setTimeout(next, 1000);
});

// Add customs routes here. Always before json-server router!!!
// Example
// server.post('/signup/', (req, res, next) => {
//     // custom logic
// });

// json-server router (default)
server.use(router);

// Server start
const port = 3002;
server.listen(port, () =>
    console.log(`json-server is running on port ${port}`)
);

// Create a friendly URL slug. This could be moved to another file
// also we can create son validation functions for post requests
const friendlySlug = value =>
    value
        .replace(/[^a-z0-9_]+/gi, '-')
        .replace(/^-|-$/g, '')
        .toLowerCase();
