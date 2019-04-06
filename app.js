

const uuid = require('uuid');
const fs = require('fs');
const http = require('http');
const path = require('path');
const os = require('os');
const url = require('url');
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/' || req.url === '/index.html' || req.url === '/home') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });

    } else if (req.url === '/main.js') {
        fs.readFile(path.join(__dirname, 'main.js'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        });
    } else if (req.url === '/media/myprofile1.jpg') {
        fs.readFile(path.join(__dirname, 'public', 'media', 'myprofile1.jpg'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        });
    } else if (req.url === '/media/IMG_6849.jpg') {
        fs.readFile(path.join(__dirname, 'public', 'media', 'IMG_6849.jpg'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        });
    } else if (req.url === '/media/IMG_8130.jpg') {
        fs.readFile(path.join(__dirname, 'public', 'media', 'IMG_8130.jpg'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        });
    } else if (req.url === '/media/IMG_8380.jpg') {
        fs.readFile(path.join(__dirname, 'public', 'media', 'IMG_8380.jpg'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        });
    } else if (req.url === '/media/IMG_2326.jpg') {
        fs.readFile(path.join(__dirname, 'public', 'media', 'IMG_2326.jpg'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        });
    } else if (req.url === '/media/IMG_1062.jpg') {
        fs.readFile(path.join(__dirname, 'public', 'media', 'IMG_1062.jpg'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        });
    } else if (req.url === '/media/IMG_4916.jpg') {
        fs.readFile(path.join(__dirname, 'public', 'media', 'IMG_4916.jpg'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        });
    } else if (req.url === '/media/IMG_2688-Edit.jpg') {
        fs.readFile(path.join(__dirname, 'public', 'media', 'IMG_2688-Edit.jpg'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        });
    } else if (req.url === '/media/HMG_9978.jpg') {
        fs.readFile(path.join(__dirname, 'public', 'media', 'HMG_9978.jpg'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpg' });
            res.end(content);
        });
    } else if (req.url === '/css/bootstrap.css') {
        fs.readFile(path.join(__dirname, 'public', 'css', 'bootstrap.css'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        });
    }
    else if (req.url === '/gallery' || req.url === '/index2.html') {
        fs.readFile(path.join(__dirname, 'public', 'index2.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });

    } else if (req.url === '/contact' || req.url === '/index3.html') {
        fs.readFile(path.join(__dirname, 'public', 'index3.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });

    }
    // else if (req.url.match("\.css")) {
    //     var cssPath = path.join(__dirname, 'public', req.url);
    //     var fileStream = fs.createReadStream(cssPath, "UTF-8");
    //     res.writeHead(200, { 'content-type': 'text/css' });
    //     fileStream.pipe(res);
    // } else if (req.url.match("\.jpg")) {
    //     var imagePath = path.join(__dirname, 'public', req.url);
    //     var fileStream = fs.createReadStream(imagePath);
    //     res.writeHead(200, { 'content-type': 'image/jpg' });
    //     fileStream.pipe(res);
    // }
    else {
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(404, { 'content-type': 'text/html' });
            res.end(content);
        });
    }
});

const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
});
