const express = require("express");
const router = express.Router();
const { checkTicketStatus } = require("../controller/ticketController");

router.get("/check-ticket", checkTicketStatus);


module.exports = router;
