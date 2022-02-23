const { sequelize } = require("./models");
const app = require("./delivery/index.js");

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  console.log(`Сервер запущен на порту ${PORT}`);
  await sequelize.authenticate();
  console.log("Database connected!");
});
