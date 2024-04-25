import mongoose from "mongoose"
const { Schema } = mongoose;

// question schema
const questionSchema = new Schema({
    questions : { type : Array, default : [] },
    answers : { type : Array, default : [] },
    state : { type : String, default : "Common"},
    createdAt : { type : Date, default : Date.now }
})

export const Questions = mongoose.model("Questions", questionSchema)