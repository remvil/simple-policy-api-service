define({ "api": [  {    "type": "get",    "url": "api/auth",    "title": "- Authentication",    "version": "1.0.0",    "name": "login",    "group": "Auth",    "description": "<p>When called if user name is present in users list, it returns the authentication token.</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "username.",            "description": ""          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>, Returns an access token</p>"          }        ]      }    },    "filename": "./routes/authenticate.js",    "groupTitle": "Auth"  },  {    "type": "get",    "url": "api/policy/:filter",    "title": "Request Policies information",    "version": "1.0.0",    "name": "GetUserPOlicyDetail",    "group": "Policy",    "description": "<p>Returns an Object with the policies filtered by ID or User name.</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": ":filter",            "description": "<p>User Id or User name.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "User",            "description": "<p>filtered data.</p>"          }        ]      }    },    "filename": "./routes/policies.js",    "groupTitle": "Policy"  },  {    "type": "get",    "url": "api/user/:filter",    "title": "Request User information",    "version": "1.0.0",    "name": "GetUserDetail",    "group": "User",    "description": "<p>Returns an Object with the filtered user It can retrieve the user by name or by ID, this means that you can send User ID or User Name as parameter.</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": ":filter",            "description": "<p>User Id or User name.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "User",            "description": "<p>filtered data.</p>"          }        ]      }    },    "filename": "./routes/users.js",    "groupTitle": "User"  },  {    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "varname1",            "description": "<p>No type.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "varname2",            "description": "<p>With type.</p>"          }        ]      }    },    "type": "",    "url": "",    "version": "0.0.0",    "filename": "./doc/main.js",    "group": "_Users_remi_develop_jobs_apply_test_simple_policy_api_service_doc_main_js",    "groupTitle": "_Users_remi_develop_jobs_apply_test_simple_policy_api_service_doc_main_js",    "name": ""  }] });
