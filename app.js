const express = require('express')

const aagRouter = require('./src/routes/mainRouter');

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/ag', agRouter );

app.listen(port, () => {
    console.log(`Agri netcom listening at http://localhost:${port}`);
})