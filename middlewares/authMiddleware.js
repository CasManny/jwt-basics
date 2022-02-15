const asyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')
const authMiddleware = asyncHandler( async (req, res, next) => {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {

      token = req.headers.authorization.split(" ")[1];
      const { id } = await jwt.verify(token, process.env.JWT_SECRET);
      req.user = id
    
    } else {
      res.status(StatusCodes.UNAUTHORIZED).json({ msg: "No token found" });
    }
    next()
})

module.exports = authMiddleware