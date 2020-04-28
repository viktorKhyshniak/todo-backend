const express = require('express');
const router = express.Router();
const todoModel = require('../models/todo.model');
/* GET home page. */

router.get('/', async (req, res, next) => {
    try {
        let result = await todoModel.find({userId: undefined});
        res.send(result);
    } catch (e) {
        res.send(e);
    }
});

router.get('/:id', async (req, res, next) => {
    if (req.params.id) {
        let id = req.params.id;
        todoModel.find({userId: id})
            .then(doc => {
                if (!doc) {
                    return res.status(500);
                }
                res.status(201).send(doc);
            })
            .catch(err => {
                res.status(500).json(err)
            });
    }
});

router.post('/', async (req, res, next) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing')
    }
    let model = new todoModel(req.body);
    model.save()
        .then(doc => {
            if (!doc) {
                return res.status(500)
            }
            res.status(201).send(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

router.put('/:id', async (req, res, next) => {
    if (req.params.id) {
        let id = req.params.id;
        let updateBody = req.body;
        todoModel.findOneAndUpdate({_id: id},{$set: updateBody}, {new: true})
            .then((doc) => {
                if (!doc) {
                    return res.status(500);
                }
                res.status(201).send(doc);
            })
            .catch((err) => res.status(500).json(err))

    }
});

router.delete('/:id', async (req, res, next) => {
    if (req.params.id) {
        let id = req.params.id;
        todoModel.findOneAndDelete({_id: id})
            .then((doc) => res.status(201).send(doc))
            .catch((err) => res.status(500).json(err))
    }
});

module.exports = router;
