const express = require("express");
const Form = require("../models/Form");
const router = express.Router();

// Submit Form
router.post("/", async (req, res) => {
  try {
    if (!req.body.enquiryType) {
      return res.status(400).json({ success: false, message: "enquiryType is required!" });
    }

    const newForm = new Form(req.body);
    await newForm.save();
    res.status(201).json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Form submission error:", error);
    res.status(500).json({ success: false, message: "Server Error", error });
  }
});



module.exports = router;


