const express = require('express');
const { createTask, getTasks, getTaskById } = require('../controllers/task.controller');
const router = express.Router();

router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getTaskById);

module.exports = router;
