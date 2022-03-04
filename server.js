require('dotenv').config({ path: 'config/.env' });
const express = require('express');
require('express-async-errors');

const DBConnection = require('./config/db');
const routeNotFound = require('./middlewares/routeNotFound');
const CustomErrorHandler = require('./middlewares/errorHandler');
const mainRouter = require('./routes/main.routes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('./public'));

app.use('/api/v1/', mainRouter);
app.use(routeNotFound);
app.use(CustomErrorHandler);

const launchAPI = async () => {
    try {
        await DBConnection(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('DB connected...');
        app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
    } catch (error) {
        console.log('Error: ', error);
    }
}
launchAPI();