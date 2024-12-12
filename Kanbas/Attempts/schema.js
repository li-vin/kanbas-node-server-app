import mongoose from "mongoose";

const attemptsSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
        quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
        answers: [
            {
                question: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "QuestionModel",
                },
                answerString: String,
                answerBool: Boolean,
            },
        ],
    },
    { collection: "attempts" }
);
export default attemptsSchema;
