// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const textData = req.body.textData;
    res.send(`受け取ったテキストデータ: ${textData}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`サーバーがポート${PORT}で起動しました。`);
});
