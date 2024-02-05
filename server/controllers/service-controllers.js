const Service = require("../models/service-model");

const serviceController = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response || response.length === 0) {
      res.status(404).json({ msg: "No services found" });
      return;
    }
    res.status(200).json(response);
  } catch (error) {
    console.log(`services: ${error}`);
    res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = serviceController;
