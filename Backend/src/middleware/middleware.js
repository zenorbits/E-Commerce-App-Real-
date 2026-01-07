const jwt = require('jsonwebtoken');

const authMidddleWare = (req, res, next) => {
    try {
        const token = req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            return res.status(401).json({
                message: 'No token , authorization denied'
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.user = decoded;

        next();
    } catch (error) {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });

        return res.status(401).json({ message: "Invalid or expired token" });

    }


}

const requiredRole = (role) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        if (req.user.role !== role) {
            return res.status(403).json({ message: "Forbidden: insufficient privileges" });

        }
        next();
    }
}

module.exports = { authMidddleWare, requiredRole }