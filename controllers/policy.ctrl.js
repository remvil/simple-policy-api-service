const config = require('config');
const service = require('../startup/service');
const _ = require('lodash/core');

module.exports = {
    findPolicy: (req, res) => {
        const idRegExp = /[a-f\d]{8}-([a-f\d]{4}-){3}[a-f\d]{12}/;
        const filter = req.filter;
        const uObj = service.getData(config.clients_url);

        // Get filtered policy data from clients url
        let policyObj = service.getData(config.policies_url)
            .then(policies => {
                if (idRegExp.test(filter)) { // Search policy by policy ID
                    let result = _.filter(policies.policies, { id: filter });
                    return result;
                } else {
                    let policiesList = uObj.then(users => {
                        let resultUser = _.filter(users.clients, { name: filter });
                        const userID = resultUser[0].id;
                        let pList = _.filter(policies.policies, { clientId: userID })
                        return pList;
                    })
                    return policiesList;
                }
            });
        return policyObj
    }
}