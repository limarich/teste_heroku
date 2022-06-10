const express = require('express');
const router = express.Router();

// exemplo de get
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    res.send(`buscando o user ${id}`);
})

// exemplo de post
router.get('/users/create', (req, res) => {
    // res.render();
})
router.post('/users/register', (req, res) => {
    const { name } = req.body;
    res.send(`seu nome é ${name}`);
})

module.exports = router;