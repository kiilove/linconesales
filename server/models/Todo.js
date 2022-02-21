const mongoose = require("mongoose");
require("moment-timezone");
const moment = require("moment");
moment.tz.setDefault("Asia/Seoul");

const TodoSchema = new mongoose.Schema(
  {
    todoTitle: {
      type: String,
      required: true,
    },
    todoStartDate: {
      type: Date,
      required: false,
    },
    todoEndDate: {
      type: String,
      required: false,
    },
    todoIsEnd: {
      type: Boolean,
      required: true,
      default: false,
    },
    todoOwner: {
      type: String,
      required: false,
    },
    todoShare: {
      type: Array,
      required: false,
    },
    todoRefId: {
      type: String,
      required: false,
    },
    todoSource: {
      type: String,
      required: true,
      default: "todo",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", TodoSchema);
