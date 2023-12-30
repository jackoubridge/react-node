const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('react-app/build'));


const port = process.env.PORT || 8080;
const mc_ip = "mc.jiggz.net";

async function fetchdata() {
    const response = await fetch("https://mcapi.us/server/status?ip=" + mc_ip);
    const data = response.json();
    return data;
}

app.post('/fetchdata', (req, res) => {

    fetchdata().then(data => {
        res.send({ ip: mc_ip, online: data.online, pCurr: data.players.now });
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});