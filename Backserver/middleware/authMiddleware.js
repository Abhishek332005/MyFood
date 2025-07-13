// import jwt from "jsonwebtoken";

// const authMiddleware = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];

//   if (!token) return res.status(401).json({ error: "Unauthorized" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     res.status(401).json({ error: "Invalid token" });
//   }
// };

// export default authMiddleware;
import jwt from "jsonwebtoken";  // 🔐 JWT module import kar rahe hain (token verify karne ke liye)

const authMiddleware = (req, res, next) => {
  // ✅ Request ke headers se token nikaal rahe hain ("Bearer token" format hota hai, isliye split kiya)
  const token = req.headers.authorization?.split(" ")[1];

  // ❌ Agar token nahi mila to Unauthorized response bhej rahe hain
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    // ✅ Token verify kar rahe hain, agar valid hai to decoded object milta hai (user ka data)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Decoded user object ko req ke sath attach kar rahe hain taaki agle middleware ya controller use kar sake
    req.user = decoded;

    // ✅ Next middleware ya route handler ko call kar rahe hain
    next();
  } catch (err) {
    // ❌ Agar token invalid hai ya verify nahi ho raha to 401 error bhej rahe hain
    res.status(401).json({ error: "Invalid token" });
  }
};

export default authMiddleware;  // ✅ Middleware ko export kar rahe hain taaki routes me use kar sake
