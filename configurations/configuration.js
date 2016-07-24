/**
 * @description The configurations file allows us to setup any third party
 * libraries that we may use in this project. It also acts a middleground for
 * any other configuration files that we have defined
 * @author Dacotah Harvey
 * @author John-Curtis Mcdonald
 * @requires request.js
 *           @see https://github.com/request/request
 * @requires Extend util
 *           @see https://www.npmjs.com/package/util-extend
 */
// Load our packages that we require
var request     = require("request");
var constants   = require("./constants");
var extend      = require('util')._extend;

// Export the server
module.exports = {
    client: request,
    base_url: constants.base_url,
    headers: constants.headers,
    extend: extend,
};
