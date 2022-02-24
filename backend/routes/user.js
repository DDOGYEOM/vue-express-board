const { createUser, getUserByUserID, getUsers, updateUser, login } = require("../controllers/user.controller");
const router = require("express").Router();
const { checkToken } = require("../auth/token_validation");

router.post("/", createUser);
router.get("/", getUsers);
router.get("/info", checkToken, getUserByUserID);
router.patch("/", checkToken, updateUser);
router.post("/login", login);


module.exports = router;
