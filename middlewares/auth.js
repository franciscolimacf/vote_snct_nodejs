const jwt = require("../jwt");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).send({ error: "No token provided" });

  const parts = authHeader.split(" ");

  if (!parts.length === 2)
    return res.status(401).send({ error: "Token error" });

  const [scheme, token] = parts;

  // await jwt.sign(token);

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ error: "Token malformatted" });

  const userInfo = jwt.verify(token);
  if (!userInfo) {
    return res.status(401).send({ error: "Token invalid" });
  }

  req.userInfo = userInfo;

  return next();
};

module.exports = authMiddleware;
