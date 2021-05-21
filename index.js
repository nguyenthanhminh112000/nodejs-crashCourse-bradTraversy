const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // console.log(req.url);
  // if (req.url === '/' || req.url === '/home') {
  //   fs.readFile(
  //     path.join(__dirname, 'public', 'index.html'),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.end(content);
  //     }
  //   );
  // }
  // if (req.url === '/about') {
  //   fs.readFile(
  //     path.join(__dirname, 'public', 'about.html'),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.end(content);
  //     }
  //   );
  // }
  // if (req.url === '/api/users') {
  //   const users = [
  //     { name: 'Dinh', age: 61 },
  //     { name: 'Minh', age: 21 },
  //   ];
  //   res.writeHead(200, { 'Content-Type': 'application/json' });
  //   res.end(JSON.stringify(users));
  // }

  /////////////////////// CREATE SERVE SERVER FILE (ONLY SERVE FILE)
  //create file path
  console.log(req.url);
  const filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  //find the extension name
  let extname = path.extname(filePath);

  //decide the contentType base on extname
  let contentType = 'text/html';
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'img/png';
      break;
    case '.jpg':
      contentType = 'img/jpg';
      break;
  }
  //serve file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      //page not found
      if (err.code == 'ENOENT') {
        const file404 = path.join(__dirname, 'public', '404.html');
        fs.readFile(file404, (err, errorContent) => {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(errorContent);
        });
      }
    } else {
      //success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

const PORT = process.env.PORT | 5000;
server.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server is running on Port: ${PORT}`);
});
