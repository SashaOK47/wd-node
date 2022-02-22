const app = require("./delivery/index.js");

const PORT = process.env.PORT || 4000;

const appStart = async () => {
  try {
    await app.listen(PORT, () =>
      console.log(`Сервер запущен на порту ${PORT}`)
    );
  } catch (e) {
    console.log(e);
  }
};

appStart();
