const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
   res.send('<h1>Hello world</h1> Xin chao cac ban</h2>')
})

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})