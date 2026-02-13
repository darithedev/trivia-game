# Trivia Game with API integration

This project demonstrates a Trivia Quiz Game Web App connecting a React + Vite frontend and Express + Node.js backend. This project has 3 routes that retrieves category data and trivia questions from opentdb, and calculates the score to return a result. 

<img width="515" height="414" alt="Screenshot 2026-02-13 at 13 47 11" src="https://github.com/user-attachments/assets/30a35a98-1010-4736-aac8-44b68cafd6e3" />
<img width="494" height="565" alt="Screenshot 2026-02-13 at 13 47 24" src="https://github.com/user-attachments/assets/26405e04-828b-4453-95db-5c66c6004f87" />

## How to run

1. Clone [trivia-game](https://github.com/darithedev/trivia-game)

### Backend

2. Run command ```cd backend```
3. Run command ```npm install```
4. Run command ```npm run dev``` to run your backend server
7. On your browser, go to ```localhost:8080/``` 

### Frontend

2. Run command ```cd frontend```
3. Run command ```npm install```
4. Run command ```npm run dev``` to run your frontend server
5. On your browser, go to ```localhost:5173/``` 

Congratulations your servers are now running

## API Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/` | Get healthy message | `{"message":"Server is healthy."}` |
| GET | `/api/category` | Get trivia categories  | ``{ ... }`` |
| GET | `/api/trivia/:amount` | Get a trivia quiz with specified amount of questions | `{ ... }` |
| POST | `/api/result` | Calculate trivia quiz result and return score | `{ ... }` |

## Testing

### Using [Postman](https://learning.postman.com/docs/getting-started/overview/)

1. **Current trivia categories**
   - Method: `GET`
   - URL: `http://localhost:8080/api/category`

3. **Trivia Quiz with 10 Questions (Max 50 questions)**
   - Method: `GET`
   - URL: `http://localhost:8080/api/trivia/10`

3. **Calculate Score of Trivia Quiz with Three Questions**
   - Method: `POST`
   - URL: `http://localhost:8080/api/result`
   - body -> raw:
```
{
  "user_answer": {
    "0": "Google",
    "1": "Mescaline",
    "2": "Estelle",
  },
  "questions": [
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Entertainment: Video Games",
      "question": "Which company did Gabe Newell work at before founding Valve Corporation?",
      "correct_answer": "Microsoft",
      "incorrect_answers": ["Apple", "Google", "Yahoo"]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "General Knowledge",
      "question": "Which of the following chemicals are found in eggplant seeds?",
      "correct_answer": "Nicotine",
      "incorrect_answers": ["Mescaline", "Cyanide", "Psilocybin"]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "Entertainment: Film",
      "question": "What is the name of the villian in the 2015 Russian-American Sci-Fi Movie \"Hardcore Henry\"?",
      "correct_answer": "Akan",
      "incorrect_answers": ["Estelle", "Jimmy", "Henry"]
    }
  ]
}
```

#### Using cURL (add `|  jq` at the end to make json "prettier")

1. **Current weather forecast in Boston**
   - `curl http://localhost:8080/api/category`

2. **Trivia Quiz with 10 Questions**
   - `curl http://localhost:8080/api/trivia/10`

3. **Trivia Quiz with 5 Questions in General Knowlege Category, and Hard Difficulty**
   - `curl http://localhost:8080/api/trivia/5?category=9&difficulty=hard`

4. **Calculate Result of Trivia Quiz with Three Questions - Result: won, Score: 100**
```
curl -X POST http://localhost:8080/api/result \
  -H "Content-Type: application/json" \
  -d '{
    "user_answer": {
      "0": "Microsoft",
      "1": "Nicotine",
      "2": "Akan"
    },
    "questions": [
      {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Video Games",
        "question": "Which company did Gabe Newell work at before founding Valve Corporation?",
        "correct_answer": "Microsoft",
        "incorrect_answers": ["Apple", "Google", "Yahoo"]
      },
      {
        "type": "multiple",
        "difficulty": "hard",
        "category": "General Knowledge",
        "question": "Which of the following chemicals are found in eggplant seeds?",
        "correct_answer": "Nicotine",
        "incorrect_answers": ["Mescaline", "Cyanide", "Psilocybin"]
      },
      {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Film",
        "question": "What is the name of the villian in the 2015 Russian-American Sci-Fi Movie \"Hardcore Henry\"?",
        "correct_answer": "Akan",
        "incorrect_answers": ["Estelle", "Jimmy", "Henry"]
      }
    ]
  }'
```

### Secondary / Strech Goals

- [ ] Add a Techtonica category so that it can be included (questions would come from a local database)

