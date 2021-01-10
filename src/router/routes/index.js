const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send({
        message: "👋"
    });
});

exports.path = "/";
exports.router = router;