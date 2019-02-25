const userCtrl = require('../controllers/user.ctrl.js')
const express = require('express')
const router = express.Router()

/** Get User by name */

/**
 * @api {get} api/user/:filter Request User information
 * @apiVersion 1.0.0
 * @apiName GetUserDetail
 * @apiGroup User
 * @apiDescription Returns an Object with the filtered user
 * It can retrieve the user by name or by ID, this means that 
 * you can send User ID or User Name as parameter.
 *
 * @apiParam {String} :filter User Id or User name.
 * @apiSuccess {Object} User filtered data. 
 */
router.get('/:filter', async(req, res) => {
    const filter = req.params.filter;
    let result = await userCtrl.findUser({ 'filter': filter });
    // console.log(result);
    res.send(result);
});

module.exports = router