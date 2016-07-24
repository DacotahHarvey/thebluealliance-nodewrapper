/**
 * @description Generic test file for the Event Requests module. This will run
 * all functions that exist in the module and output any errors that are
 * returned in doing so
 * @author Dacotah Harvey
 * @author John-Curtis Mcdonald
 * @requires event.requests.js
 */
var eventRequests = require('../modules/event.requests');

/*--------------------------------------------------------------------------
----------------------------Event Request Test------------------------------
--------------------------------------------------------------------------*/

/**
 * @description Runs a test to ensure that all endpoints in the event.requests.js
 * section are functioning properly. If there are any functions that are returning
 * an error then the error will be provided
 */
var eventRequestTest = {};

/**
 * @description Defines the run method that allows us to test all endpoints
 * @return {String} returns the error for any calls if there is one
 */
eventRequestTest.run = function() {

    eventRequests.getEvents({year: 2010}, function(error, response, body) {
        if (error !== null) {
            console.log("-------------ERROR in the getEvents function-------------");
            console.log(error);
        }
    });

    eventRequests.getEvent({event_key: "2010sc"}, function(error, response, body) {
        if (error !== null) {
            console.log("-------------ERROR in the getEvent function-------------");
            console.log(error);
        }
    });

    eventRequests.getEventTeams({event_key: "2010sc"}, function(error, response, body) {
        if (error !== null) {
            console.log("-------------ERROR in the getEventTeams function-------------");
            console.log(error);
        }
    });

    eventRequests.getEventStats({event_key: "2010sc"}, function(error, response, body) {
        if (error !== null) {
            console.log("-------------ERROR in the getEventStats function-------------");
            console.log(error);
        }
    });

    eventRequests.getEventRankings({event_key: "2010sc"}, function(error, response, body) {
        if (error !== null) {
            console.log("-------------ERROR in the getEventRankings function-------------");
            console.log(error);
        }
    });

    eventRequests.getEventAwards({event_key: "2010sc"}, function(error, response, body) {
        if (error !== null) {
            console.log("-------------ERROR in the getEventAwards function-------------");
            console.log(error);
        }
    });

    eventRequests.getEventDistricPoints({event_key: "2014cthar"}, function(error, response, body) {
        if (error !== null) {
            console.log("-------------ERROR in the getEventDistricPoints function-------------");
            console.log(error);
        }
    });
}

// Execute the test
//eventRequestTest.run();
