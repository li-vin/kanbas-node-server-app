import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        availableDate: Date,
        untilDate: Date,
        due: Date,
        points: Number,
        type: String,
        group: String,
        attempts: Number,
        showCorrectAnswers: Date,
        accessCode: String,
        oneQuestionAtATime: Boolean,
        webcamRequired: Boolean,
        lockQuestions: Boolean,
        published: Boolean,
        timeMin: Number,
        shuffle: Boolean,
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    },
    { collection: "quizzes" }
);
export default quizSchema;
