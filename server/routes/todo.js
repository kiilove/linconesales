const router = require("express").Router();
const Todo = require("../models/Todo");

require("moment-timezone");
const moment = require("moment");
moment.tz.setDefault("Asia/Seoul");

//일반 등록
router.get("/time", (req, res) => {
  console.log(moment());
});

router.post("/new", async (req, res) => {
  const todoObject = req.body;

  try {
    const savedTodo = await Todo.create(todoObject);
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

//mk에서 등록

router.post("/mknew", async (req, res) => {
  const todoObject = req.body;

  try {
    const savedTodo = await Todo.create({ ...todoObject, todoSource: "mk" });
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

//mk에서 불러오기
router.get("/mkfind/:id", async (req, res) => {
  try {
    const client = await Todo.find({
      todoRefId: req.params.id,
      todoSource: "mk",
    })
      .limit(1)
      .sort({ _id: -1 });
    console.log(client);
    res.status(200).json(client);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
