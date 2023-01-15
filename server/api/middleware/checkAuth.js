const jwt = require("jsonwebtoken");


const checkAuth = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    } else {
        try {
            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // Get admin by id
            req.user = decoded;
            return res.status(201).json({ message: "authorized" });
        }
        catch (error) {
            if (error.name === "TokenExpiredError") {
                return res.status(401).json({ message: "Token expired" });
            } else {
                return res.status(401).json({ message: "Unauthorized" });
            }
        }
    }
};

module.exports = { checkAuth }; 