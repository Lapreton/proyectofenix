const { Router } = require('express');
const router = Router();
const{ getNews, createNew, deleteNew, updateNew, getNew } = require('../controllers/news.controller.js');


router.route('/')
    .get(getNews)
    .post(createNew)

router.route('/:id')
    .get(getNew)
    .put(updateNew)
    .delete(deleteNew)

module.exports = router;