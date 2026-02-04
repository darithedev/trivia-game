import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get('/', async(req,res) => {
    res.json({ message: "Express server is healthy."});
});

app.get('/api/trivia/:amount/:category/:difficulty/:quizType', async(req, res) => {
    
});

app.listen(PORT, '127.0.0.1', () => {
    console.log(`Express server is running on port ${PORT}`)
});