const express = require('express');
const app = express();

const productPath = require('./routes/Products.js');
const userPath = require('./routes/User.js');

const port = 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) =>{
    res.status(200).send('Running optimally')
});

app.use('/products', productPath);

app.use('/user', userPath);


app.listen(5000, () => console.log('Example app is listening on port 5000.'));