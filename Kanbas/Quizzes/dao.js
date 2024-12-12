import model from "./model.js";
import { ObjectId } from "mongodb";

export function createQuiz(quiz) {
    delete quiz._id;
    return model.create(quiz);
}
export function updateQuiz(quizId, quizUpdates) {
    return model.updateOne({ _id: quizId }, quizUpdates);
}
export function deleteQuiz(quizId) {
    return model.deleteOne({ _id: quizId });
}
export function findQuizzesForCourse(courseId) {
    return model.find({ course: new ObjectId(courseId) });
}
export function findPublishedQuizzesForCourse(courseId) {
    return model.find({ course: courseId, published: true });
}
