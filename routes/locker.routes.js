const router = require("express").Router();
const LockerService = require("../services/locker.service");

const lockerService = new LockerService();

router.get("/test", (req, res) => {
  try {
    res.status(200).json({ success: true });
  } catch (error) {
    res.send({ error: error });
  }
});

router.post("/encrypt", (req, res) => {
  try {
    const reqBody = req.body;
    const encrypted_text = lockerService.encrypt(reqBody.text);
    res.send(encrypted_text);
  } catch (error) {
    console.log("err: ", error);
  }
});

router.post("/decrypt", (req, res) => {
  try {
    const reqBody = req.body;
    const decrypted_text = lockerService.decrypt(reqBody.encrypted_text);
    res.send(decrypted_text);
  } catch (error) {
    console.log("err: ", error);
  }
});

module.exports = router;
