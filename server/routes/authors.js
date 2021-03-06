'use strict';

const express = require('express');
const controller = require('../controllers/authorsController');
const router = express.Router();

router.route('/').get(controller.getAuthors);

router.get('/:id', controller.getAuthorById);

router.put('/:id', controller.updateAuthor);

router.patch('/:id', controller.editAuthor);

router.post('/', controller.addAuthor);

router.delete('/:id', controller.removeAuthor);

module.exports = router;