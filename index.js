const express = require("express");

const PORT = process.env.PORT || 4000;

const app = express();
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
