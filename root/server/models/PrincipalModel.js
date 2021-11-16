const mongoose = require("mongoose");

const principalSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userRole: {
    type: String,
    required: true,
    default: "Admin",
  },
});

module.exports = PrincipalModel = mongoose.model("principals", principalSchema);
