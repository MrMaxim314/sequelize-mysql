const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const WorkerRouter = require('./routers/WorkerRouter');
const JobRouter = require('./routers/JobRouter')

const PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', WorkerRouter);
app.use('/', JobRouter);

app.listen(PORT, () => console.log('Server is working'));