let  express = require('express');
let app = express();
app.get('*', (req, res) => {
    console.log(req.url)
    res.end();
})
app.listen(8081);