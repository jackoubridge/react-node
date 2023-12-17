const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.static('react-app/build'));
app.use(cors());

const port = process.env.PORT || 8080;

app.post('/ip', (req, res) => {
    res.send({data: 'mc.jiggz.net'});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});