/**
* @description Helper functions that allow you to easily access any API requests
* offered by the Blue Alliance in the Match Requests section.
* @see For more documentation see https://www.thebluealliance.com/apidocs#match-requests
* @see For more Information on District Codes see https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/district_type.py#L38
* @author Dacotah Harvey
* @author John-Curtis Mcdonald
* @requires configuration.js
*/

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
    year:           2016,
    district_short: "ne"
}

/**
 * @description The base module that we build our functions into. We instantiate
 * this blank object that we then add our helper functions to. We then export
 * this @module at the end of the script to allow our functions to import it
 * and use the helper functions defined
 * @type {Object}
 */
var districtRequests = {};

/**
 * @function Returns a list of all Districts and where they take place in a given
 * year
 * @param  {[Array]}   options  - Options for the URL
 *                              @param year: Integer
 *                              A specific year you would like to grab data for
 *                              this team. Defaults to current year if not provided.
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request
 */
districtRequests.getDistrictList = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/districts/" + base_options.year
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

/**
 * @function Returns detailed information about all the district events
 * in a given district (defined by the short code) in a given year
 * @see For more Information on District Codes see https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/district_type.py#L38
 * @param  {[Array]}   options  - Options for the URL
 *                              @param district_short: String
 *                              The district abbreviation you want data for.
 *                              See above for more information on District Codes
 *                              @param year: Integer
 *                              A specific year you would like to grab data for
 *                              this team. Defaults to current year if not provided.
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request
 */
districtRequests.getDistrictEvents = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/district/" + base_options.district_short + "/" + base_options.year + "/events"
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

/**
 * @function Returns ranking information  for a given district event (defined
 * by the short code) in a given year
 * @see For more Information on District Codes see https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/district_type.py#L38
 * @param  {[Array]}   options  - Options for the URL
 *                              @param district_short: String
 *                              The district abbreviation you want data for.
 *                              See above for more information on District Codes
 *                              @param year: Integer
 *                              A specific year you would like to grab data for
 *                              this team. Defaults to current year if not provided.
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request
 */
districtRequests.getDistrictRankings = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/district/" + base_options.district_short + "/" + base_options.year + "/rankings"
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

/**
 * @function Returns information about all teams competing at a given district event
 * (defined by the short code) in a given year
 * @see For more Information on District Codes see https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/district_type.py#L38
 * @param  {[Array]}   options  - Options for the URL
 *                              @param district_short: String
 *                              The district abbreviation you want data for.
 *                              See above for more information on District Codes
 *                              @param year: Integer
 *                              A specific year you would like to grab data for
 *                              this team. Defaults to current year if not provided.
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request
 */
districtRequests.getDistrictTeams = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/district/" + base_options.district_short + "/" + base_options.year + "/teams"
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

// Export our base object so it can be used in other contexts
module.exports = districtRequests;
