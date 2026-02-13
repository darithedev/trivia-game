const categories = [
    {
        "id": 9,
        "name": "General Knowledge"
    },
    {
        "id": 10,
        "name": "Entertainment: Books"
    },
    {
        "id": 11,
        "name": "Entertainment: Film"
    },
    {
        "id": 12,
        "name": "Entertainment: Music"
    },
    {
        "id": 13,
        "name": "Entertainment: Musicals & Theatres"
    },
    {
        "id": 14,
        "name": "Entertainment: Television"
    },
    {
        "id": 15,
        "name": "Entertainment: Video Games"
    },
    {
        "id": 16,
        "name": "Entertainment: Board Games"
    },
    {
        "id": 17,
        "name": "Science & Nature"
    },
    {
        "id": 18,
        "name": "Science: Computers"
    },
    {
        "id": 19,
        "name": "Science: Mathematics"
    },
    {
        "id": 20,
        "name": "Mythology"
    },
    {
        "id": 21,
        "name": "Sports"
    },
    {
        "id": 22,
        "name": "Geography"
    },
    {
        "id": 23,
        "name": "History"
    },
    {
        "id": 24,
        "name": "Politics"
    },
    {
        "id": 25,
        "name": "Art"
    },
    {
        "id": 26,
        "name": "Celebrities"
    },
    {
        "id": 27,
        "name": "Animals"
    },
    {
        "id": 28,
        "name": "Vehicles"
    },
    {
        "id": 29,
        "name": "Entertainment: Comics"
    },
    {
        "id": 30,
        "name": "Science: Gadgets"
    },
    {
        "id": 31,
        "name": "Entertainment: Japanese Anime & Manga"
    },
    {
        "id": 32,
        "name": "Entertainment: Cartoon & Animations"
    }
]

const responseMock = {
    "response_code": 0,
    "results": [
        {
            "type": "boolean",
            "difficulty": "easy",
            "category": "Geography",
            "question": "There is a city called Rome in every continent on Earth.",
            "correct_answer": "False",
            "incorrect_answers": [
                "True"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "Entertainment: Video Games",
            "question": "The mobile game &quot;Jetpack Joyride&quot; was released in what year? ",
            "correct_answer": "2011",
            "incorrect_answers": [
                "2012",
                "2009",
                "2014"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "hard",
            "category": "History",
            "question": "How many women joined the United States Armed Services during World War II?",
            "correct_answer": "350,000",
            "incorrect_answers": [
                "225,000",
                "100,000",
                "500,000"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "Entertainment: Video Games",
            "question": "Who is the half-demon character in Divinity: Original Sin 2 who you talk to to transition between acts?",
            "correct_answer": "Malady",
            "incorrect_answers": [
                "Meister Siva",
                "Gawin",
                "Exter"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "Entertainment: Video Games",
            "question": "In Forza Motorsport 6, which of these track-exclusive cars was NOT featured in the game, either originally with the game or added as DLC?",
            "correct_answer": "Aston Martin Vulcan",
            "incorrect_answers": [
                "Ferrari FXX-K",
                "McLaren P1 GTR",
                "Lotus E23"
            ]
        }
    ]
}

const results = [
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "Where is the train station &quot;Llanfair&shy;pwllgwyngyll&shy;gogery&shy;chwyrn&shy;drobwll&shy;llan&shy;tysilio&shy;gogo&shy;goch&quot;?",
        "correct_answer": "Wales",
        "incorrect_answers": [
            "Moldova",
            "Czech Republic",
            "Denmark"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What is the shape of the toy invented by Hungarian professor Ernő Rubik?",
        "correct_answer": "Cube",
        "incorrect_answers": [
            "Sphere",
            "Cylinder",
            "Pyramid"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What company developed the vocaloid Hatsune Miku?",
        "correct_answer": "Crypton Future Media",
        "incorrect_answers": [
            "Sega",
            "Sony",
            "Yamaha Corporation"
        ]
    },
    {
        "type": "boolean",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "Video streaming website YouTube was purchased in it&#039;s entirety by Facebook for US$1.65 billion in stock.",
        "correct_answer": "False",
        "incorrect_answers": [
            "True"
        ]
    },
    {
        "type": "boolean",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "Is a dog a mammal?",
        "correct_answer": "True",
        "incorrect_answers": [
            "False"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
        "correct_answer": "Key",
        "incorrect_answers": [
            "Sword",
            "Pen",
            "Cellphone"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "When was the Playstation 3 released?",
        "correct_answer": "November 11, 2006",
        "incorrect_answers": [
            "January 8, 2007",
            "December 25, 2007",
            "July 16, 2006"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "Terry Gilliam was an animator that worked with which British comedy group?",
        "correct_answer": "Monty Python",
        "incorrect_answers": [
            "The Goodies&lrm;",
            "The League of Gentlemen&lrm;",
            "The Penny Dreadfuls"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What style of beer will typically have a higher than average hop content?",
        "correct_answer": "India Pale Ale",
        "incorrect_answers": [
            "Stout",
            "Extra Special Bitter",
            "Scotch Ale"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "The Quran is the holy book of which Abrahamic religion?",
        "correct_answer": "Islam",
        "incorrect_answers": [
            "Christianity",
            "Judaism",
            "Rastafarianism"
        ]
    }
]

const calculate = {
  "user_answer": {
    "0": "Google",
    "1": "Mescaline",
    "2": "Estelle",
    "3": "John Abbott",
    "4": "\"...and the silent mouse remained thereat.\""
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
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "History",
      "question": "Who was the first prime minister of Canada?",
      "correct_answer": "John Macdonald",
      "incorrect_answers": ["John Abbott", "Alexander Mackenzie", "Robert Borden"]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "General Knowledge",
      "question": "The lesser-known continuation of the saying \"Curiosity killed the cat...\" is:",
      "correct_answer": "\"...but satisfaction brought it back.\"",
      "incorrect_answers": [
        "\"...and the silent mouse remained thereat.\"",
        "\"...which taught it not to do that.\"",
        "\"...but death by the truth is better than ignorance.\""
      ]
    }
  ]
}

export { categories, responseMock, calculate }