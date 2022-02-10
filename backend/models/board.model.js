const sql = require("./db.connect");

const Board = function(board) {
    this.title = board.title;
    this.writer = board.writer;
    this.contents = board.contents;
    this.writeDate = board.writeDate;
    this.updateDate = board.updateDate;
};

Board.create = (newBoard, result) => {
    sql.query("INSERT INTO board(title,writer,contents,write_date) values(?, ?, ?, ?);", 
    [newBoard.title, newBoard.writer, newBoard.contents, newBoard.writeDate], (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created boards: ", { idx: res.insertId, ...newBoard });
        result(null, { idx: res.insertId, ...newBoard });
    })
};

Board.findById = (idx, result) => {
    sql.query(`SELECT * FROM board WHERE idx=${idx}`, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found board: ", res[0]);
            result(null, res[0]);
            return;
          }

          // not found Tutorial with the id
          result({ kind: "not_found" }, null);
        });
}

Board.findAll = (title, result) => {
    let query = "SELECT * FROM board";
    if (title) {
        query += `WHERE title LIKE '%${title}%'`;
    }

    sql.query(query, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("board: ", res);
        result(null, res);
        });
};

Board.updateById = (idx, board, result) => {
    sql.query("UPDATE board SET title = ?, writer = ?, contents = ?, update_date = now() WHERE idx = ?", 
        [board.title, board.writer, board.contents, idx],
        (err, res)=> {
            if(err) {
                console.log("싸발 에러입니다.");
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if(res.affectedRows == 0) {
                result({kind: "not_found"}, null);
                return;
            }
            
            console.log("updated board: ",{idx: idx, ...board})
            result(null, { idx: idx, ...board });
        })
};

Board.removeById = (idx, result) => {
    sql.query("DELETE FROM board WHERE idx = ?", idx, (err,res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if(res.affectedRows == 0) {
            result({kind: "not_found"}, null);
            return;
        }
        
        console.log("delete board with idx: ", idx)
        result(null, res);
    })
};

module.exports = Board;