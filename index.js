const { sequelize } = require("./models");
const app = require("./delivery/index.js");

const PORT = process.env.PORT || 4000;

// app.listen(PORT, async () => {
//   console.log(`Сервер запущен на порту ${PORT}`);
//   await sequelize.authenticate();
//   console.log("Database connected!");
// });

const main = async () => {
  await sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
  await sequelize.sync();
  await app.listen(PORT, () => {
    console.log("Server has been started on port ${PORT}...");
  });
};

main();
