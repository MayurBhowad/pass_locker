const router = require("express").Router();

const lockerRoutes = require("./locker.routes");

router.use("/locker", lockerRoutes);

module.exports = router;
