const express = require('express');
const app = express();
const cors=require('cors');

app.use(cors());

require('dotenv').config();
const PORT = 4000 || process.env.PORT;

app.get('/', (req, res) => {
    res.json({ msg: "Backend connected successfully with Express" });
})


app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
})