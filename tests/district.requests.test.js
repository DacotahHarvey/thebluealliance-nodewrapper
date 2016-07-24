/**
 * @description Generic test file for the District Requests module. This will run
 * all functions that exist in the module and output any errors that are
 * returned in doing so
 * @author Dacotah Harvey
 * @author John-Curtis Mcdonald
 * @requires district.requests.js
 */

var districtRequests = require('../modules/district.requests');

/*--------------------------------------------------------------------------
-----------------------------Team Request Test------------------------------
--------------------------------------------------------------------------*/

/**
 * @description Runs a test to ensure that all endpoints in the match.requests.js
 * section are functioning properly. If there are any functions that are returning
 * an error then the error will be provided
 */
var districtRequestTest = {};

/**
 * @description Defines the run method that allows us to test all endpoints
 * @return {String} returns the error for any calls if there is one
 */
districtRequestTest.run = function() {

    districtRequests.getDistrictList({year: 2014}, function(error, response, body) {
        if (error !== null) {
            console.log("-------------ERROR in the getDistrictList function-------------");
            console.log(error);
        }
    });

    districtRequests.getDistrictEvents({district_short: "ne", year: 2014}, function(error, response, body) {
        if (error !== null) {
            console.log("-------------ERROR in the getDistrictEvents function-------------");
            console.log(error);
        }
    });

    districtRequests.getDistrictRankings({district_short: "ne", year: 2014}, function(error, response, body) {
        if (error !== null) {
            console.log("-------------ERROR in the getDistrictRankings function-------------");
            console.log(error);
        }
    });

    districtRequests.getDistrictTeams({district_short: "ne", year: 2014}, function(error, response, body) {
        if (error !== null) {
            console.log("-------------ERROR in the getDistrictTeams function-------------");
            console.log(error);
        }
    });
}

// Execute the test
districtRequestTest.run();
