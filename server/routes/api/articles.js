const express = require("express");
const article = require("../../models/article");
const router = express.Router();

const Article = require("../../models/article");

// @route GET api/articles/test
// @description tests books route
// @access Public
router.get("/test", (req, res) => res.send("article route testing!"));

// @route GET api/articles
// @description Get all books
// @access Public
router.get('/', (req, res) => {
  Article.find()
    .then((articles) => res.json(articles))
    .catch((err) => res.status(404).json({ norecordfound: "No Article found" }));
});

// @route GET api/articles 
// @description add/article
// @access Public
router.post('/', (req, res) => {
  Article.create(req.body)
    .then(article => res.json({ msg: 'Article added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this article' }));
});


module.exports = router;