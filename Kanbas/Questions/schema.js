import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
    {
        title: String,
        type: String,
        points: Number,
        questionText: String,
        choices: [String],
        correctChoice: String,
        correctTrueFalse: Boolean,
        correctShortAnswers: [String],
        quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
    },
    { collection: "questions" }
);
export default questionSchema;
