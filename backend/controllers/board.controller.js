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
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Boards."
            });
        }else {
            res.send({message: 'get boardList success', body: data});
        }
    });
};


exports.findById = (req, res) =>  {
    Board.findById(req.query.idx, (err, data) => {
        if(err){
            if(err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Board with id ${req.query.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Board with id " + req.query.id
                  });
            }
        }else {
            if(data.title == '' || data.writer == '') {
                res.status(400).send({
                    message: "제목이나 작성자가 빈 값입니다."
                })
            }else {
                res.send({message: 'get board success', body: data});
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
    Board.updateById(req.query.idx, board, (err,data) => {
        if(err){
            if(err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Board with id ${req.query.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error Updating Board with id " + req.query.id
                  });
            }
        }else {
            if(data.title == '' || data.writer == '') {
                res.status(400).send({
                    message: "제목이나 작성자가 빈 값입니다."
                })
            }else {
                res.send({message: 'update board success', body: data});
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
                    message: "Could not delete Board with id " + req.query.id
                  });
            }
        }else {
            res.send({message: 'delete board success', body: data});
        }
    })
}

