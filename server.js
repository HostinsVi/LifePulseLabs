const http = require('http');  // Import the HTTP module
const fs = require('fs');      // File system module to read files
const path = require('path');  // Path module to manage file paths
const port = 3000;             // Port number where the server listens

const server = http.createServer(function (req, res) {
    // Create the full file path to serve files from the /coding/public directory
    let filePath = path.join(__dirname, 'public', req.url);

    // If the root URL is requested, default to 'index.html'
    if (filePath == path.join(__dirname, 'public', '/')) {
        filePath = path.join(__dirname, 'public', 'index.html');
    }

    // Determine the content type (HTML, CSS, JS, etc.) based on the file extension
    let extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'application/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.jpeg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
    }

    // Read the requested file and serve it
    fs.readFile(filePath, function (error, data) {
        if (error) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('Error: File Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.write(data);
        }
        res.end();
    });
});

// Start the server on port 3000
server.listen(port, function (error) {
    if (error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port ' + port);
    }
});