const express = require('express');
const cors = require('cors');

const app = express();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

app.use(cors());
app.get('/nodes/:pageNo', (req, res) => {
    fetch(`https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${req.params.pageNo}`).then(r => r.json()).then((d) => {
        res.send(JSON.stringify(d));
    }).catch((err) => {
        console.log(err);
    })
});
  
app.listen(5000, () => console.log('Example app is listening on port 5000.'));