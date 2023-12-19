const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.static('react-app/build'));
app.use(cors());

const port = process.env.PORT || 8080;

app.post('/fetchdata', (req, res) => {
    res.send({ip: 'mc.jiggz.net', pMax: 50, pCurr: 10, status: "Offline"});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});