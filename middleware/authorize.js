module.exports = function(req, res, next) {
    // 401 Unauthorized
    if (req.user.isAdmin !== "admin") return res.status(401).send('401 Unauthorized.');
    next();
}