const express = require('express');
const dotenv = require('dotenv')

dotenv.config({path: '.env-local'})

const PORT = process.env.PORT || '3000';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

/**
 * Routes
 */
app.get('/', (request, response) => {
    response.status(200).json({name:'Welcome on bord !'})
})

const userRouter = require('./routes/user');

app.use('/user', userRouter);

app.listen(PORT, ()=> {
    console.log(`Serveur en cours sur le port ${PORT}`)
})