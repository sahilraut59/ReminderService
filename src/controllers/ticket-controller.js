const TicketService = require("../services/email-service");

const create = async (req, res) => {
  try {
    const response = await TicketService.createNotification(req.body);
    return res.status(201).json({
      success: true,
      data: response,
      err: {},
      message: "Successfully registered an email reminder",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      err: error,
      message: "Unable to registere an email reminder",
      data: {},
    });
  }
};

module.exports = {
  create,
};
