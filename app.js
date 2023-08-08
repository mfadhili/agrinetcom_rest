const express = require('express')

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Agri netcom listening at http://localhost:${port}`);
})