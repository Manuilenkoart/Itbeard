const router = require("express").Router();

const userRegistrationRoute = require("./userRegistrationRoute");

router.use("/registration", userRegistrationRoute);

module.exports = router;
