/**
* @description Helper functions that allow you to easily access any API requests
* offered by the Blue Alliance in the Match Requests section.
* @see For more documentation see https://www.thebluealliance.com/apidocs#match-requests
* @author Dacotah Harvey
* @author John-Curtis Mcdonald
* @requires configuration.js
*/

/*--------------------------------------------------------------------------
-------------------------------Module Setup---------------------------------
--------------------------------------------------------------------------*/

// Load our base configuration file
var configuration = require('../configurations/configuration.js');

// Quick references for some of the options we offer in the configuration file
var client = configuration.client;
var extend = configuration.extend;
var headers = configuration.headers;

/**
 * @description Define the base Options that this API section accepts.
 * This contains all of the base options that we need. It allows the user to
 * override them as they need.
 * These also act as the default values. If not overriden on function call
 * these will be set as the default @param
 */
var __base_options = {
    match_key: "2014cmp_f1m1"
}

/**
 * @description The base module that we build our functions into. We instantiate
 * this blank object that we then add our helper functions to. We then export
 * this @module at the end of the script to allow our functions to import it
 * and use the helper functions defined
 * @type {Object}
 */
var matchRequests = {};

/*--------------------------------------------------------------------------
------------------------------Match Requests--------------------------------
--------------------------------------------------------------------------*/

/**
 * @function returns all information regarding a single match.
 * @param  {[Array]}   options  - Options for the URL
 *                              @param match_key: String
 *                              Key for the match you want to request data for
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request
 */
matchRequests.getSingleMatch = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/match/" + base_options.match_key
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

// Export our base object so it can be used in other contexts
module.exports = matchRequests;
