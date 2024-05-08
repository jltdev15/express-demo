const bcrpyt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.verifyToken = async (req, res, next) => {
  try {
    const cookies = req.cookies["jwt"];
    jwt.verify(cookies, "My_Secret", (err, user) => {
      if (err) return res.sendStatus(401);
      req.user = user;
      next();
    });
  } catch (err) {
    res.status(404).json({
      content: err,
    });
  }
};
