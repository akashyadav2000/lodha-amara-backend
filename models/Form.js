const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  popupType: { type: String, required: true }, // 🚨 Required field!
  submittedAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model("Form", formSchema);
