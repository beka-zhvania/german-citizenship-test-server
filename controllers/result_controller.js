import { Result } from "../db/schemas/resultSchema.js"

// get all test results
export async function getResult(req, res) {
    try {
        const result = await Result.find()
        res.json(result)
    } catch (err) {
        res.json({err})
    }
}


// insert result data obtained from the user
export async function insertResult(req, res) {
    try {
        const { username, result, correctAnswers, pass } = req.body;
        // Ensure both username and result are provided
        if (!result) { // add '|| !username' once username is required
            // If no username or result provided, respond with a 400 Bad Request
            return res.status(400).json({ message: 'Username and result data are required.' });
        }

        console.log("req.body ", req.body); //TODO:DELETE
        console.log("correctAnswers", correctAnswers)
        // Create a new document based on the provided data
        const savedResult = await Result.create({ username, result, correctAnswers, pass });
        console.log("savedResult",savedResult)
        res.status(201).json(savedResult); // Send back the saved result with a 201 Created status
    } catch (err) {
        // Respond with a 500 Internal Server Error and a meaningful message
        res.status(500).json({ error: err.message });
    }
}


// delete all results
export async function deleteResult(req, res) {
    try {
        const deleteResult = await Result.deleteMany({}); // Deletes all documents in the results collection
        console.log('Results deleted successfully:', deleteResult);
        // Send back a response indicating the operation was successful
        // deleteResult contains information about the operation, including the number of documents deleted
        res.status(200).json({
            message: "All results deleted successfully",
            details: deleteResult
        });
    } catch (err) {
        console.error('Error deleting results:', err);
        res.status(500).json({ error: err.message });
    }
}