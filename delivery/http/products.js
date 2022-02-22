const Router = require("express");
const router = new Router();

const response = {
  error: null,
  value: [
    {
      id: 1,
      name: "Apple",
    },
  ],
};

router.get("/", async (req, res) => {
  if (response.error) {
    res.status(500).json(response.error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(response.value);
});

module.exports = router;
