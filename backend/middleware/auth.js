import jwt from "jsonwebtoken"

const authMiddleware = (req,res,next)=>{
    let token = req.headers.token || req.headers.authorization;
    if (!token) {
        return res.status(401).json({ success:false, message:"Not Authorized. Login Again" });
    }
    if (token.startsWith("Bearer ")) {
        token = token.split(" ")[1];
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: token_decode.id };
        req.userId = token_decode.id;
        next();
    } catch(error) {
        console.log(error);
        return res.status(401).json({ success:false, message:"Invalid token" });
    }
}

export default authMiddleware;