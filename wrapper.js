/**
 * @description The main hub that allows us to run all of our tests. To run a test
 * simply go to the module and uncomment out the last line. This will cause the
 * run @method in that specific file to be executed.
 * @author Dacotah Harvey
 * @author John-Curtis Mcdonald
 *
 */

/**
 * @description Our test functions should we ever need to test anything
 * throught the API.
 */
// var districtRequestTest = require('./tests/district.requests.test');
// var eventRequestTest    = require('./tests/event.requests.test');
// var matchRequestTest    = require('./tests/match.requests.test');
// var teamRequestTest     = require('./tests/team.requests.test');

/**
 * @description Builds and exports the modules that we have provided for
 * easy use
 */
var districtRequest = require('./modules/district.requests');
var eventRequest    = require('./modules/event.requests');
var matchRequest    = require('./modules/match.requests');
var teamRequest     = require('./modules/team.requests');

module.exports = {
    districtWrapper:    districtRequest,
    eventWrapper:       eventRequest,
    matchWrapper:       matchRequest,
    teamWrapper:        teamRequest,
};
