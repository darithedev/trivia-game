import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

const PORT = 8080;

app.use(express.json());
app.use(cors());

let categories = [];
let lastFetchedDate = null;

app.get('/', async(req,res) => {
    res.json({ message: "Express server is healthy."});
});

app.get('/api/category', async(req, res) => {
    try {
        const today = new Date();

        if (categories.length > 0 && lastFetchedDate === today.getDate()) {
            console.log("returned cached categories")
            return res.json(categories);
        } else console.log("fetching fresh categories");

        const url = 'https://opentdb.com/api_category.php';
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error("Error with fetching trivia game categories!");
        }

        const data = await response.json();

        categories = data.trivia_categories
        lastFetchedDate = today.getDate();
        res.status(200).json(categories);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message })
    }
});

app.get('/api/trivia/:amount', async(req, res) => {
    const { amount } = req.params; // Amount of questions requested (max 50)
    const { category, difficulty, type } = req.query; // All optional; type: t/f or multiple choice

    try {
        const params = new URLSearchParams({
            amount: amount, // number of questions
            category: category,
            difficulty: difficulty,
            type: type, // quiz type
        });

        const url = `https://opentdb.com/api.php?${params}`;

        const response = await fetch(url);

        const data = await response.json();

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ error: error.message })
    }

});

app.listen(PORT, '127.0.0.1', () => {
    console.log(`Express server is running on port ${PORT}`)
});