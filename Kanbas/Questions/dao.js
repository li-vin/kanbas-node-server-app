import model from "./model.js";

export function createQuestion(question) {
    delete question._id;
    return model.create(question);
}
export function updateQuestion(questionId, questionUpdates) {
    return model.updateOne({ _id: questionId }, questionUpdates);
}
export function deleteQuestion(questionId) {
    return model.deleteOne({ _id: questionId });
}
export function findQuestionsForQuiz(quizId) {
    return model.find({ quiz: quizId });
}
export function findQuestion(questionId) {
    return model.findOne({ _id: questionId });
}