/**
* @description Helper functions that allow you to easily access any API requests
* offered by the Blue Alliance in the Event Requests section.
* @see For more documentation see https://www.thebluealliance.com/apidocs#event-requests
* @see For more information regarding specific event codes see https://docs.google.com/spreadsheets/d/1HqsReMjr5uBuyZjqv14t6bQF2n038GfMmWi3B6vFGiA/edit
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
    year:       2016,
    event_key:  "2014cmp"
}

/**
 * @description The base module that we build our functions into. We instantiate
 * this blank object that we then add our helper functions to. We then export
 * this @module at the end of the script to allow our functions to import it
 * and use the helper functions defined
 * @type {Object}
 */
var eventRequests = {};

/*--------------------------------------------------------------------------
-----------------------------Event Requests---------------------------------
--------------------------------------------------------------------------*/

/**
 * @function Returns all events that took place in a given year
 * @param  {[Array]}   options  - Options for the URL
 *                              @param year: Integer
 *                              A specific year you would like to grab data for
 *                              this team. Defaults to current year if not provided.
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request
 */
eventRequests.getEvents = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/events/" + base_options.year
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

/**
 * @function Returns information about a given event
 * @param  {[Array]}   options  - Options for the URL
 *                              @param event_key: String
 *                              TBA event key with the format yyyy[EVENT_CODE],
 *                              where yyyy is the year, and EVENT_CODE is the
 *                              event code of the event.
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request
 */
eventRequests.getEvent = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/event/" + base_options.event_key
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

/**
 * @function Returns a list of teams the participated at a given event
 * @param  {[Array]}   options  - Options for the URL
 *                              @param event_key: String
 *                              TBA event key with the format yyyy[EVENT_CODE],
 *                              where yyyy is the year, and EVENT_CODE is the
 *                              event code of the event.
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request
 */
eventRequests.getEventTeams = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/event/" + base_options.event_key + "/teams"
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

/**
 * @function Returns the resuls of all matches at a given event
 * @param  {[Array]}   options  - Options for the URL
 *                              @param event_key: String
 *                              TBA event key with the format yyyy[EVENT_CODE],
 *                              where yyyy is the year, and EVENT_CODE is the
 *                              event code of the event.
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request
 */
eventRequests.getEventMatches = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/event/" + base_options.event_key + "/matches"
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

/**
 * @function Returns detailed statistics for all teams at a given event
 * @param  {[Array]}   options  - Options for the URL
 *                              @param event_key: String
 *                              TBA event key with the format yyyy[EVENT_CODE],
 *                              where yyyy is the year, and EVENT_CODE is the
 *                              event code of the event.
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request
 */
eventRequests.getEventStats = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/event/" + base_options.event_key + "/status"
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

/**
 * @function Returns detailed information regarding all teams that participated
 * at a given event
 * @param  {[Array]}   options  - Options for the URL
 *                              @param event_key: String
 *                              TBA event key with the format yyyy[EVENT_CODE],
 *                              where yyyy is the year, and EVENT_CODE is the
 *                              event code of the event.
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request
 */
eventRequests.getEventRankings = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/event/" + base_options.event_key + "/rankings"
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

/**
 * @function Returns information regarding all awards awarded at a given event
 * @param  {[Array]}   options  - Options for the URL
 *                              @param event_key: String
 *                              TBA event key with the format yyyy[EVENT_CODE],
 *                              where yyyy is the year, and EVENT_CODE is the
 *                              event code of the event.
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request
 */
eventRequests.getEventAwards = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/event/" + base_options.event_key + "/awards"
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

/**
 * @function Returns informaton regarding distric points at a given event
 * @param  {[Array]}   options  - Options for the URL
 *                              @param event_key: String
 *                              TBA event key with the format yyyy[EVENT_CODE],
 *                              where yyyy is the year, and EVENT_CODE is the
 *                              event code of the event.
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request
 */
eventRequests.getEventDistricPoints = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/event/" + base_options.event_key + "/district_points"
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

// Export our base object so it can be used in other contexts
module.exports = eventRequests;
