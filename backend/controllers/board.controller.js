var moment = require("moment");

const Board = require("../models/board.model");

exports.create = (req, res) => {
  var newDate = moment().format("YYYY-MM-DD HH:mm:ss");
  console.log(newDate);

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const board = new Board({
    title: req.body.title,
    writer: req.body.writer,
    contents: req.body.contents,
    writeDate: newDate,
    updateDate: newDate,
  });

  Board.create(board, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Board.",
      });
    } else {
      res.send(data);
    }
  });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  const offset = req.query.page;
  const limit = req.query.size;
  let page = 0;
  let count = 0;

  Board.totalCount((err, data) => {
    if (err) {
      console.log(err);
    }
    count = data.totalCount;
  });

  Board.findAll(title, offset, limit, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Boards.",
      });
    } else {
      res.send({
        message: "get boardList success",
        totalCount: count,
        data: data,
      });
    }
  });
};

exports.findById = (req, res) => {
  Board.findById(req.query.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Board with id ${req.query.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Board with id " + req.query.id,
        });
      }
    } else {
      if (data.title == "" || data.writer == "") {
        res.status(400).send({
          message: "제목이나 작성자가 빈 값입니다.",
        });
      } else {
        res.send({ message: "get board success", data: data });
      }
      id;
    }
  });
};

exports.updateById = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const board = new Board({
    title: req.body.title,
    writer: req.body.writer,
    contents: req.body.contents,
    writeDate: null,
    updateDate: null,
  });

  Board.updateById(req.query.idx, board, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Board with id ${req.query.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error Updating Board with id " + req.query.id,
        });
      }
    } else {
      if (data.title == "" || data.writer == "") {
        res.status(400).send({
          message: "제목이나 작성자가 빈 값입니다.",
        });
      } else {
        res.send({ message: "update board success", data: data });
      }
    }
  });
};

exports.deleteById = (req, res) => {
  Board.removeById(req.query.idx, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Board with id ${req.query.idx}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Board with id " + req.query.idx,
        });
      }
    } else {
      res.send({ message: "delete board success", data: data });
    }
  });
};
