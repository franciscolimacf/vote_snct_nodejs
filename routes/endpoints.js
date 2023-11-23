const express = require("express");
const app_code = require("../services/functions");

const router = express.Router();

const authMiddleware = require("../middlewares/auth");
const validateResponserMiddleware = require("../middlewares/validateResponse");

router.use(authMiddleware);
router.use(validateResponserMiddleware);

router.get("/", async (req, res, next) => {
  console.log('enter get')
  try {
    res.json(await app_code.getAll(req.query.page));
  } catch (err) {
    console.error(`Error while getting data `, err.message);
    next(err);
  }
});

router.patch("/Votar/:id/", async (req, res) => {
  const id = req.params.id;
  try {
    res.json(await app_code.vote(id));
  } catch (err) {
    console.error(`Error while getting data `, err.message);
    next(err);
  }
});

module.exports = router;
