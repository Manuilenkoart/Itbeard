const router = require("express").Router();

const { userRegistrationControllerPost } = require("../../controllers/");

router.post("/", userRegistrationControllerPost);

module.exports = router;
