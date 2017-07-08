const express = require('express')
const next = require('next')
const path = require('path');
const fs = require('fs');
var fileUpload  = require('express-fileupload');


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();
  server.use(fileUpload());

  server.get('/api/getposts', (req, res) => {
    let jsondb = path.join(__dirname, '/mock-db.json');

    var readable = fs.createReadStream(jsondb);
    readable.pipe(res);
  });

  server.post('/api/makepost', (req, res) => { 
    console.log(__dirname + '/mock-db.json'); 

    new BbPromise((resolve, reject) => {
      fs.readFile(__dirname + '/mock-db.json', (err, data) => {
        if (err) reject(err);

        let olddata = JSON.parse(data);

        olddata.posts.push(req.body);

        fs.writeFile(__dirname + '/mock-db.json', JSON.stringify(olddata), 'utf8', (err) => {
          if (err) reject(err);
        });
      });
    });
  });

  server.post('/api/uploadimage', (req, res) => {

    let file = req.files.file;

    if(file){
      let filename = file.name.replace(/(?!\.jpg)(?!\.png)(?!\.gif)[^a-z,0-9]+/gi, '');

      if (filename.length < 4){
        res.send("Invalid filename.");
        return console.log("Invalid filename. Length < 4 when non-alphanumerics replaced. (no filename or just extension)");
      }
      else{
        if(file.mimetype === "image/png" || "image/jpeg" || "image/gif"){

          fs.writeFile(__dirname + "/static/images/"+  filename, file.data, 'binary', function(err) {
              if(err) {
                  return console.log(err);
            }
            else{
              res.send("/images/"+  filename);
            }
          });
        }
        else{
          res.send("Invalid file. Is it a JPG/PNG/GIF image?");
        }
      }
    }
    else{
      res.send("Error: invalid file.");
    }
  });

  server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
  });
  
  server.get('*', (req, res) => {
    return handle(req, res)
  });

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  });
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
});