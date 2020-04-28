const express = require('express');
const router = express.Router();
const todoModel = require('../models/todo.model');
/* GET home page. */

router.get('/', async (req, res, next) => {
    try {
        let result = await todoModel.find();
        res.send(result);
    } catch (e) {
        res.send(e);
    }
});

module.exports = router;
