const express = require("express");
const router = express.Router();


router.route('/auth')
    .get((req, res, next) => {
        res.send("Authentication page")
    });

module.exports = router;