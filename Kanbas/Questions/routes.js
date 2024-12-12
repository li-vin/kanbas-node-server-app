import * as questionsDao from "./dao.js";

export default function QuestionsRoutes(app) {
    app.put("/api/questions/:questionId", async (req, res) => {
        const { questionId } = req.params;
        const questionUpdates = req.body;
        const status = await questionsDao.updateQuestion(
            questionId,
            questionUpdates
        );
        res.json(status);
    });
    app.delete("/api/questions/:questionId", async (req, res) => {
        const { questionId } = req.params;
        const status = await questionsDao.deleteQuestion(questionId);
        res.json(status);
    });
    app.get("/api/questions/:questionId", async (req, res) => {
        const { questionId } = req.params;
        const question = await questionsDao.findQuestion(questionId);
        res.json(question);
    });
}
