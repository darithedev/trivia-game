const calculateScore = (userAnswers, questions) => {
    let correct = 0;
    questions.forEach((question, index) => {
        if (question.correct_answer === userAnswers[index]) {
            correct++;
        }
    });

    const total = (correct / questions.length) * 100
    console.log(total)
    return total;
}

export default calculateScore;
