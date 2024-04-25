import express from 'express';
import { getQuestions, insertQuestions, deleteQuestions } from '../controllers/question_controller.js'
import { deleteResult, getResult, insertResult } from '../controllers/result_controller.js';

const router = express.Router();

// question related routes
router.route('/questions')
    .get((req, res) => {
        getQuestions(req, res)
    })
    .post((req, res) => {
        insertQuestions(req, res)
    })
    .delete((req, res) => {
        deleteQuestions(req, res)
    })


// result related routes
router.route('/result')
    .get((req, res) => {
        getResult(req, res)
    })
    .post((req, res) => {
        insertResult(req, res)
    })
    .delete((req, res) => {
        deleteResult(req, res)
    })





export default router;
