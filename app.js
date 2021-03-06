const express = require('express');
const PORT= 3000;
const app = express();
const db = require('./config/database');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());

app.use(cors({
    origin: ['http://local:4200'],
    methods: ["GET","POST","PUT","DELETE"],
    allowedHeaders: ["Content-Type","Authorization"]
}));

db.authenticate()
    .then(() => console.log('Database connected... '))
    .catch(err => console.log('Errir:' + err))

app.set("json spaces", 4);

const index = require('./routes/index');
const clientes = require('./routes/clientes');

app.use('/', index);
app.use('/clientes', clientes);

app.listen(PORT, () => console.log("escutando na porta " + PORT));