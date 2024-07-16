const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    res.status(201).send({ message: "user registered successfully!1!!" });

});

module.exports = router;