const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dotEnv = require('dotenv');
const cors = require('cors');
dotEnv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT;

app.get('/', (req, res) => {
    try {
        req.on('data', async (chunk) => {
            await res.status(200).send(Buffer.from(await chunk).toString('utf8'));
            res.end();
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Error occured: ', error.message);
        res.end();
    }
})
app.post('/', async (req, res) => {
    try {
        req.on('data', async (chunk) => {
            await res.status(200).send(Buffer.from(await chunk).toString('utf8'));
            res.end();
        });
    } catch (error) {
        res.status(500).send('Error occured: ', error.message);
        res.end();
    }
});

app.listen(port, () => {
    console.log('Server running on port ' + port);
});