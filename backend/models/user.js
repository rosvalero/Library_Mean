const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: Date,
    default: Date.now,
  },
});

userSchema.method.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
    },
    "secretKey"
  );
};

const User = mongoose.model("user", userSchema);

module.exports.User = User;
module.exports.userSchema = userSchema
