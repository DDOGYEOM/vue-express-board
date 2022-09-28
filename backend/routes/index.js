var express = require("express");
var router = express.Router();

const { upload } = require("../utils/multer");

/* GET home page. */
router.get("/", (req, res) => {
  res.json({ msg: "This is CORS-enabled for all origins!" });
  // res.render('index', { title: 'Express' });
});

router.post("/upload", upload.single("img"), async (req, res) => {
  const imgfile = req.file;
  console.log(imgfile);
  res.json({
    msg: "image upload success!",
    data: imgfile.filename,
  });
});

module.exports = router;
