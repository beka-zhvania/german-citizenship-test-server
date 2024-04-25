import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config as dotenvConfig } from 'dotenv'; // load .env variables
import router from './router/routes.js';
import connect from './db/connection.js';



// initialize 
const app = express();

// middlewares
app.use(morgan('tiny')); // log requests to terminal
app.use(cors());
app.use(express.json());
dotenvConfig(); // initialize app with dotenv



// routes
app.use('/api', router);

const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
    try {
        res.json({ message: 'Hello, world!' });
    } catch (err) {
        res.json(err);
    }
});


// connect to database and if successful, then connect to the server
connect()
    .then(() => {
        try {
            app.listen(port, () => {
                console.log(`Server is connected to port ${port}`);
            })
        } catch (err) {
            console.log("Connecting to the server failed!")
        }
    })
    .catch(err => {
        console.log("Database connection failed!"
    )})


