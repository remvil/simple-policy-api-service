const policyCtrl = require('../controllers/policy.ctrl.js')
const express = require('express');
const router = express.Router();

/** Get User by name */

/**
 * @api {get} api/policy/:filter Request Policies information
 * @apiVersion 1.0.0
 * @apiName GetUserPOlicyDetail
 * @apiGroup Policy
 * @apiDescription Returns an Object with the policies filtered by ID or User name.
 *
 * @apiParam {String} :filter User Id or User name.
 * @apiSuccess {Object} User filtered data.
 */
router.get('/:filter', async(req, res) => {
    const filter = req.params.filter
    var result = await policyCtrl.findPolicy({ 'filter': filter })
    res.send(result);
});

module.exports = router