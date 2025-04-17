const express = require("express");
const router = express.Router();
const { checkTicketStatus } = require("../controller/ticketController");

router.post("/check-ticket", checkTicketStatus);


module.exports = router;
