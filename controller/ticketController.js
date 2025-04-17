const checkTicketStatus = (req, res) => {
    console.log("Incoming request:");
    console.log(JSON.stringify(req.body, null, 2));
  
    const ticketNumber = req.body?.message?.toolCallList?.[0]?.arguments?.ticketNumber;
  
    if (ticketNumber === "1") {
      return res.json({ result: "Yes" });
    } else if (ticketNumber === "0") {
      return res.json({ result: "No" });
    } else {
      return res.status(400).json({ result: "Invalid ticket number" });
    }
  };
  
  module.exports = { checkTicketStatus };
  