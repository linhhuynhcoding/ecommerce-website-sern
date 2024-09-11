import asyncHandler from "./asyncHandler.js";

const authenticate = asyncHandler(async (req, res, next) => {
  console.log(req.sessionID);
  console.log(req.session);
  const pass = req.query.middleware; //debug pass middleware
  if (pass) {
    if (pass === 'true') return next();
  }
  
  const auth = req.session.authenticated;


  if (auth) {
    return next();
  } else {
    res.status(401);
    throw new Error("Chưa xác thực");
  }
});

const authorizeAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send("Not authorized as an admin.");
  }
};

export { authenticate, authorizeAdmin };