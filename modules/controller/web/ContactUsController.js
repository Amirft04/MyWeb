const Axios = require("axios");
const ContactUs = require("../../models/contactUs");

exports.storeNewContact = async (req) => {
  try {
    const body = req.body;
    console.log(body);
    const newData = new ContactUs({
      name: body.name,
      email: body.email,
      message: body.message,
    });
    let savedData = await newData.save();
    if (!savedData) {
      return {
        message: "Send Failed",
        code: 501,
        success: false,
      };
    }
    return {
      code: 200,
      message: "Your Request Done",
      success: true,
    };
  } catch (err) {
    return {
      message: "Send Failed",
      code: 501,
      success: false,
    };
  }
};
