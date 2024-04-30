import { Questions } from "../db/schemas/questionSchema.js"



// get test questions based on federal state
export async function getQuestions(req, res) {
    try {
        const state = req.query.state || "Common"; // Extract federal state from query parameters

        // Query for state-specific questions if a state is provided
        const stateSpecificQuestions = state ? 
            await Questions.find({ state: state }) : 
            [];
            
        res.json(stateSpecificQuestions);
    } catch (err) {
        res.status(500).json({err: "An error occurred while fetching questions"});
    }
}


// insert questions
export async function insertQuestions(req, res) {
    const questionsData = { //TODO:DELETE
        questions : req.body.questions,
        answers : req.body.answers,
        state : req.body.state
    }
    //const questionsData = req.body; 
    try {
        const savedQuestions = await Questions.insertMany(questionsData);
        console.log('Questions added successfully:', savedQuestions);
        res.status(201).json(savedQuestions); // Send back the saved questions with a 201 Created status
    } catch (err) {
        console.error('Error adding questions:', err);
        // Send back a meaningful error message with appropriate status code
        res.status(500).json({ error: err.message });
    }
}




// delete all questions
export async function deleteQuestions(req, res) {
    try {
        const deleteResult = await Questions.deleteMany({}); // Deletes all documents
        console.log('Questions deleted successfully:', deleteResult);
        // Send back a response indicating the operation was successful
        // deleteResult contains information about the operation, including the number of documents deleted
        res.status(200).json({
            message: "All questions deleted successfully",
            details: deleteResult
        });
    } catch (err) {
        console.error('Error deleting questions:', err);
        res.status(500).json({ error: err.message });
    }
}
