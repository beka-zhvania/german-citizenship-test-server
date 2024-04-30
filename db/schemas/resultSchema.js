import mongoose from "mongoose"
const { Schema } = mongoose;


// result schema
const resultModel = new Schema({
    username : { type : String, default : "unspecified user" },
    result : { type: Array, default : []},
    correctAnswers : { type : Number, default : 0},
    pass : { type : Boolean, default : false},
    createdAt : { type : Date, default : Date.now }
})


export const Result = mongoose.model("Result", resultModel)