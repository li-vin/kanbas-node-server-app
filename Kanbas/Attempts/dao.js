import model from "./model.js";

export function submitAttempt(user, quiz, answers) {
    return model.create({ user, quiz, answers });
}
export async function getAttempts(user, quiz) {
    const attempts = await model.find({ user, quiz });
    return attempts.length;
}
export async function getAttempt(user, quiz) {
    const attempt = await model.findOne({ user, quiz });
    return attempt;
}
