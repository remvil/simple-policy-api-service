const userCtrl = require('../controllers/user.ctrl.js')
const express = require('express')
const router = express.Router()

/**
 * @api {get} api/auth - Authentication
 * @apiVersion 1.0.0
 * @apiName login
 * @apiGroup Auth
 * @apiDescription When called if user name is present in users list, it returns the authentication token.

 * @apiParam {String} username.
 * @apiSuccess {String} token, Returns an access token
 */
router.post('/',
    (req, res, next) => {
        let result = userCtrl.findUser({ 'filter': req.body.name })
            .then(result => {
                const user = result[0];
                if (typeof(user) == "undefined") {
                    res.status(401).send("401 Unauthorized");
                } else {
                    user.token = userCtrl.generateAuthToken(user.id, user.role);
                    res.json(user)
                }
            })
            .catch(err => next(err));
        return result;
    });

module.exports = router