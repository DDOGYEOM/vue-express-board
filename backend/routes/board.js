var express = require('express');
var router = express.Router();
var boardController = require('../controllers/board.controller');

/* 게시판 리스트 화면 */
router.get('/', boardController.findAll);

/* 상세 조회 화면 */ 
router.get('/detail', boardController.findById);

/* 글 작성 */
router.post('/write', boardController.create);

/* 글 수정 */
router.put('/update', boardController.updateById);

/* 글 삭제 */
router.delete('/delete', boardController.deleteById);

module.exports = router;
