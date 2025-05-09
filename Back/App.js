require('dotenv').config();
require('./models/Index');

const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const cors = require('cors');

const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT || 5432}/${process.env.DB_NAME}`);
sequelize.authenticate().then(() => {
    console.log('Connection to the database has been established successfully.');
});

const app = express();

// Configure CORS
const corsOptions = {
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
const allRoutes = require('./routes');
app.use('/', allRoutes); 

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});