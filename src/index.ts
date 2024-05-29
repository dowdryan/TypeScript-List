import { hey } from './helper.js'
// import yo from './helper.cjs'
import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const port = 8000
const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

console.log(__dirname);

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get("/", (req, res) => {
    // res.send(hey)
    res.render('index');
})

app.listen(port, () => {
    console.log(`Now listening on port ${port}, at http://localhost:${port}`)
})