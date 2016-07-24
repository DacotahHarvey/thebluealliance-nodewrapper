/**
 * @description Generic test file for the Match Requests module. This will run
 * all functions that exist in the module and output any errors that are
 * returned in doing so
 * @author Dacotah Harvey
 * @author John-Curtis Mcdonald
 * @requires match.requests.js
 */

var matchRequests = require('../modules/match.requests');

/*--------------------------------------------------------------------------
-----------------------------Team Request Test------------------------------
--------------------------------------------------------------------------*/

/**
 * @description Runs a test to ensure that all endpoints in the match.requests.js
 * section are functioning properly. If there are any functions that are returning
 * an error then the error will be provided
 */
var matchRequestTest = {};

/**
 * @description Defines the run method that allows us to test all endpoints
 * @return {String} returns the error for any calls if there is one
 */
matchRequestTest.run = function() {

    matchRequests.getSingleMatch({match_key: '2014cmp_f1m1'}, function(error, response, body) {
        if (error !== null) {
            console.log("-------------ERROR in the getSingleMatch function-------------");
            console.log(error);
        }
    });
}

// Execute the test
matchRequestTest.run();
