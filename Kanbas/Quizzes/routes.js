import * as quizzesDao from "./dao.js";
import * as questionsDao from "../Questions/dao.js";
import * as attemptsDao from "../Attempts/dao.js";

export default function QuizzesRoutes(app) {
    app.put("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quizUpdates = req.body;
        const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
        res.json(status);
    });
    app.delete("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const status = await quizzesDao.deleteQuiz(quizId);
        res.json(status);
    });

    // Questions
    app.get("/api/quizzes/:quizId/questions", async (req, res) => {
        const { quizId } = req.params;
        const questions = await questionsDao.findQuestionsForQuiz(quizId);
        res.json(questions);
    });
    app.post("/api/quizzes/:quizId/questions", async (req, res) => {
        const { quizId } = req.params;
        const question = {
            ...req.body,
            quiz: quizId,
        };
        const newQuestion = await questionsDao.createQuestion(question);
        res.send(newQuestion);
    });

    // Attempts
    app.post("/api/quizzes/:quizId/:userId/attempts", async (req, res) => {
        const { quizId, userId } = req.params;
        const answers = req.body;
        const newAttempt = await attemptsDao.submitAttempt(
            userId,
            quizId,
            answers
        );
        res.json(newAttempt);
    });
    app.get("/api/quizzes/:quizId/:userId/attempts", async (req, res) => {
        const { quizId, userId } = req.params;
        const numAttempts = await attemptsDao.getAttempts(userId, quizId);
        res.json(numAttempts);
    });
    app.get("/api/quizzes/:quizId/:userId/score", async (req, res) => {
        const { quizId, userId } = req.params;
        const attempt = await attemptsDao.getAttempt(userId, quizId);
        const questions = await questionsDao.findQuestionsForQuiz(quizId);
        console.log(attempt);
        const answeredQuestions = questions.filter((question) => {
            for (const answer of attempt.answers) {
                if (answer.question === question._id) return true;
            }
            return false;
        });
        const score = answeredQuestions.reduce(
            (score, question) => score + question.points,
            0
        );
        res.json(score);
    });
}
