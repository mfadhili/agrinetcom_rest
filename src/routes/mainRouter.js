const express = require('express');
const router = express.Router();

router.post("/test", async function(req, res) {
    const output = "await services.test_db(12)";
    console.log(output);
    res.send(output);
});

module.exports = router;