/**
* @description Helper functions that allow you to easily access any API requests
* offered by the Blue Alliance in the Team Requests section.
* @see For more documentation see https://www.thebluealliance.com/apidocs#team-requests
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
    page_num:   1,
    team_key:   "frc1114",
    event_key:  "2014cmp",
    year:       2016
}

/**
 * @description The base module that we build our functions into. We instantiate
 * this blank object that we then add our helper functions to. We then export
 * this @module at the end of the script to allow our functions to import it
 * and use the helper functions defined
 * @type {Object}
 */
var teamRequests = {};

/*--------------------------------------------------------------------------
--------------------------------FRC Teams-----------------------------------
--------------------------------------------------------------------------*/

/**
 * @function Returns all teams in a pages format
 * @param  {[Array]}   options  - Options for the URL
 *                              @param page_num: Integer
 *                                     A page of teams, zero-indexed. Each page
 *                                     consists of teams whose numbers start at
 *                                     start = 500 * page_num and end at
 *                                     end = start + 499, inclusive.
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request
 */
teamRequests.getTeams = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/teams/" + base_options.page_num
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

/**
 * @function Returns all information about a given team
 * @param  {[Array]}   options  - Options for the URL
 *                              @param team_key: String
 *                              A team key name where the format is frcyyyy where
 *                              yyyy is the a valid, official team number issued
 *                              by FIRST
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request
 */
teamRequests.getTeam = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/team/" + base_options.team_key
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

/**
 * @function Returns all information regarding all events a given team attended
 * in a given year
 * @param  {[Array]}   options  - Options for the URL
 *                              @param team_key: String
 *                              A team key name where the format is frcyyyy where
 *                              yyyy is the a valid, official team number issued
 *                              by FIRST
 *                              @param year: Integer
 *                              A specific year you would like to grab data for
 *                              this team. Defaults to current year if not provided.
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request
 */
teamRequests.getTeamEvents = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/team/" + base_options.team_key + "/events"
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

/**
 * @function Returns all awards won by a given team at a given event
 * @param  {[Array]}   options  - Options for the URL
 *                              @param team_key: String
 *                              A team key name where the format is frcyyyy where
 *                              yyyy is the a valid, official team number issued
 *                              by FIRST
 *                              @param event_key: String
 *                              TBA event key with the format yyyy[EVENT_CODE],
 *                              where yyyy is the year, and EVENT_CODE is the
 *                              event code of the event.
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request

 */
teamRequests.getTeamEventAwards = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/team/" + base_options.team_key + "/event/" + base_options.event_key + "/awards"
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

/**
 * @function REturns all matches that a given team participated in at a given event
 * @param  {[Array]}   options  - Options for the URL
 *                              @param team_key: String
 *                              A team key name where the format is frcyyyy where
 *                              yyyy is the a valid, official team number issued
 *                              by FIRST
 *                              @param event_key: String
 *                              TBA event key with the format yyyy[EVENT_CODE],
 *                              where yyyy is the year, and EVENT_CODE is the
 *                              event code of the event.
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request
 */
teamRequests.getTeamEventMatches = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/team/" + base_options.team_key + "/event/" + base_options.event_key + "/matches"
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

/**
 * @function returns all the years that a given team has participated in FRC
 * @param  {[Array]}   options  - Options for the URL
 *                              @param team_key: String
 *                              A team key name where the format is frcyyyy where
 *                              yyyy is the a valid, official team number issued
 *                              by FIRST
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request
 */
teamRequests.getTeamYearsParticipated = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/team/" + base_options.team_key + "/years_participated"
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

/**
 * @function Returns any media that is stored on hand for a given team
 * (Such as a youtube channel)
 * @param  {[Array]}   options  - Options for the URL
 *                              @param team_key: String
 *                              A team key name where the format is frcyyyy where
 *                              yyyy is the a valid, official team number issued
 *                              by FIRST
 *                              @param year: Integer
 *                              A specific year you would like to grab data for
 *                              this team. Defaults to current year if not provided.
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request
 */
teamRequests.getTeamMedia = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/team/" + base_options.team_key + "/" + base_options.year + "/media"
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

/*--------------------------------------------------------------------------
-------------------------------FRC History----------------------------------
--------------------------------------------------------------------------*/

/**
 * @function Returns the outcome of a given team at every event they have competed in
 * @param  {[Array]}   options  - Options for the URL
 *                              @param team_key: String
 *                              A team key name where the format is frcyyyy where
 *                              yyyy is the a valid, official team number issued
 *                              by FIRST
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request
 */
teamRequests.getTeamEventHistory = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/team/" + base_options.team_key + "/history/events"
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

/**
 * @function Returns any awards that a given team has won at any event they have attended
 * @param  {[Array]}   options  - Options for the URL
 *                              @param team_key: String
 *                              A team key name where the format is frcyyyy where
 *                              yyyy is the a valid, official team number issued
 *                              by FIRST
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request
 */
teamRequests.getTeamAwardHistory = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/team/" + base_options.team_key + "/history/awards"
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

/**
 * @function Returns information on the Robot that a given team has used
 * in every respective year that they have competed
 * @param  {[Array]}   options  - Options for the URL
 *                              @param team_key: String
 *                              A team key name where the format is frcyyyy where
 *                              yyyy is the a valid, official team number issued
 *                              by FIRST
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request
 */
teamRequests.getTeamRobotHistory = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/team/" + base_options.team_key + "/history/robots"
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

/**
 * @function Returns information about a given team at any distric they have
 * attended
 * @param  {[Array]}   options  - Options for the URL
 *                              @param team_key: String
 *                              A team key name where the format is frcyyyy where
 *                              yyyy is the a valid, official team number issued
 *                              by FIRST
 * @param  {Function} callback - Callback function that returns the response from the request
 * @return {[JSON]}            - Error, Response, and Body from the request
 */
teamRequests.getTeamDistricHistory = function(options, callback) {

    base_options = extend(__base_options, options);

    return client.get(
        {
            headers: headers,
            url: configuration.base_url + "/team/" + base_options.team_key + "/history/districts"
        },
        function(error, response, body) {
            callback(error, response, body);
        }
    );
}

// Export our base object so it can be used in other contexts
module.exports = teamRequests;
