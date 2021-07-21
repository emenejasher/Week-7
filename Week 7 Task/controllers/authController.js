const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.signup = async (req, res, next) => {
  try {
    let { id, firstName, lastName, email, password } = req.body;
    // hash incoming password from req.body
    password = await bcrypt.hash(password, 12);

    // sign jwt token with user id as payload
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    const newUser = { id, firstName, lastName, email, password };
    User.push(newUser);
    // push new user to dummy database

    res.status(201).json({
      status: "success",
      token,
      User,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err,
    });
    console.log(`Error 💥: ${err}`);
  }

  next();
};

exports.getAllUser = (req, res, next) => {
  try {
    // const user = User.find();

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {}
  next();
};