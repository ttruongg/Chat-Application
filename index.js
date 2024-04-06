import express from 'express';
import { createServer } from 'node:http';

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
    res.send('<h1>Hello word </h1>');
});


server.listen(3000, () => {
    console.log('server is running');
});