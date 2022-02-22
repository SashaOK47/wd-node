const app = require("./delivery/index.js");

const PORT = process.env.PORT || 4000;

const appStart = async () => {
  await app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
};

appStart();
