const JWT_SECRET = process.env.JWT_SECRET || "NOTIFICATION_API";

const jwtLib = require("jsonwebtoken");

const sign = (values = {}) => {
  console.log("sign");
  return jwtLib.sign(values, JWT_SECRET, {
    algorithm: "HS256",
    expiresIn: "365d",
  });
};

const verify = (token) => {
  console.log("Verifying");
  try {
    const res = jwtLib.verify(token, JWT_SECRET);
    console.log("Verified");
    return res;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const jwt = {};
jwt.sign = sign;
jwt.verify = verify;

module.exports = jwt;
