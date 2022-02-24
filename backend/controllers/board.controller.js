const Board = require("../models/board.model");


exports.create = (req, res) => {
    require("date-utils");
    var newDate = new Date();
    var time = newDate.toFormat('YYYY-MM-DD HH24:MI:SS');

    if(!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const board = new Board({
        title: req.body.title,
        writer: req.body.writer,
        contents: req.body.contents,
        writeDate: time,
        updateDate: null
    });

    Board.create(board, (err, data) => {
        if(err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Board."
            });
        }else {
            res.send(data);
        }
    });
};


exports.findAll = (req, res) => {
    const title = req.query.title;

    Board.findAll(title, (err, data) => {
        if(err) {
            res.status.send({
                message: err.message || "Some error occurred while retrieving Boards."
            });
        }else {
            require("date-utils");
            var newDate = new Date();
            var time = newDate.toFormat('YYYY-MM-DD HH24:MI:SS');
            console.log(time);
            res.send(data);
        }
    });
};


exports.findById = (req, res) =>  {
    Board.findById(req.query.id, (err, data) => {
        if(err){
            if(err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Board with id ${req.query.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Baord with id " + req.query.id
                  });
            }
        }else {
            if(data.title == '' || data.writer == '') {
                res.status(400).send({
                    message: "제목이나 작성자가 빈 값입니다."
                })
            }else {
                res.send(data);
            }
        }
    });
};

exports.updateById = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const board = new Board({
        title: req.body.title,
        writer: req.body.writer,
        contents: req.body.contents,
        writeDate: null,
        updateDate: null
    });
    Board.updateById(req.query.id, board, (err,data) => {
        if(err){
            if(err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Board with id ${req.query.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error Updating Baord with id " + req.query.id
                  });
            }
        }else {
            if(data.title == '' || data.writer == '') {
                res.status(400).send({
                    message: "제목이나 작성자가 빈 값입니다."
                })
            }else {
                res.send(data);
            }
            
        }
    })
}

exports.deleteById = (req, res) => {
    Board.removeById(req.query.id, (err,data) => {
        if(err){
            if(err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Board with id ${req.query.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Baord with id " + req.query.id
                  });
            }
        }else {
            res.send(data);
        }
    })
}

