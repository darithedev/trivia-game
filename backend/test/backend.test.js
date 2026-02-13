import { describe, it, expect, beforeAll } from 'vitest'
import { categories, calculate } from '../MockData.js'

describe('Check the health of backend server', () => {
    let response, data;

    beforeAll(async () => {
        response = await fetch('http://localhost:8080/');
        data = await response.json();
    });

    it('Returns a response code of 200', () => {
        expect(response.status).toBe(200);
    });

    it('Returns a message for healthy server', async () => {
        expect(data).toStrictEqual({
            message: "Express server is healthy."
        })
    })

    it('Return message is an obj', () => {
        expect(data).toBeTypeOf('object');
    })
});

describe('Categories route returns categories', () => {
    let response, data;

    beforeAll(async () => {
        response = await fetch(`http://localhost:8080/api/category`);
        data = await response.json();
    })

    it('Response code is 200 when fetching category first time', () => {
        expect(response.status).toBe(200);
    });

    it('Response code is 304 after (fetching cached categories)', async () => {
        response = await fetch(`http://localhost:8080/api/category`);

        expect(response.status).toBe(304);
    });

    it('Fetched the categories', () => {
        expect(data).toStrictEqual(categories)
    });

    it('Return message is an obj', () => {
        expect(data).toBeTypeOf('object');
    })
})

describe('Trivia route returns a Trivia quiz with five questions', () => {
    let response, data;

    beforeAll(async () => {
        response = await fetch(`http://localhost:8080/api/trivia/5`);
        data = await response.json();
    })

    it('Response code is 200 when fetching trivia quiz', () => {
        expect(response.status).toBe(200);
    });

    it('Questions object returned has a length of 5', () => {
        expect(data.results.length).toBe(5);
    });

    it('Return message is an obj', () => {
        expect(data).toBeTypeOf('object');
    });
})

describe('Result reoute returns a score', (categories) => {
    let response, data;

    beforeAll(async () => {

        response = await fetch('http://localhost:8080/api/result', {
            method: "POST", 
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({ 
                user_answer: calculate.user_answer,
                questions: calculate.questions
            })
        })
        data = await response.json();
    });

    it('Response code is 201 when fetching result', () => {
        expect(response.status).toBe(201);
    });

    it('Score is a number', () => {
        expect(data.score).toBeTypeOf('number');
    })
});