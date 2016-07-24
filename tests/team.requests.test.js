/**
 * @description Generic test file for the Team Requests module. This will run
 * all functions that exist in the module and output any errors that are
 * returned in doing so
 * @author Dacotah Harvey
 * @author John-Curtis Mcdonald
 * @requires team.requests.js
 */

var teamRequests = require('../modules/team.requests');

/*--------------------------------------------------------------------------
-----------------------------Team Request Test------------------------------
--------------------------------------------------------------------------*/

/**
 * @description Runs a test to ensure that all endpoints in the team.requests.js
 * section are functioning properly. If there are any functions that are returning
 * an error then the error will be provided
 */
var teamRequestTest = {};

/**
 * @description Defines the run method that allows us to test all endpoints
 * @return {String} returns the error for any calls if there is one
 */
teamRequestTest.run = function() {

    teamRequests.getTeams({page_num: 1}, function(error, response, body) {
        if (error !== null) {
            console.log("-------------ERROR in the getTeams function-------------");
            console.log(error);
        }
    });

    var team = teamRequests.getTeam({team_key: 'frc254'}, function(error, response, body) {
        if (error !== null) {
            console.log("-------------ERROR in the getTeam function-------------");
            console.log(error);
        }
    });

    teamRequests.getTeamEvents({team_key: 'frc254'}, function(error, response, body) {
        if (error !== null) {
            console.log("-------------ERROR in the getTeamEvents function-------------");
            console.log(error);
        }
    });

    teamRequests.getTeamEventAwards({team_key: 'frc254', event_key: '2014casj'}, function(error, response, body) {
        if (error !== null) {
            console.log("-------------ERROR in the getTeamEventAwards function-------------");
            console.log(error);
        }
    });

    teamRequests.getTeamEventMatches({team_key: 'frc254', event_key: '2014casj'}, function(error, response, body) {
        if (error !== null) {
            console.log("-------------ERROR in the getTeamEventMatches function-------------");
            console.log(error);
        }
    });

    teamRequests.getTeamYearsParticipated({team_key: 'frc254'}, function(error, response, body) {
        if (error !== null) {
            console.log("-------------ERROR in the getTeamYearsParticipated function-------------");
            console.log(error);
        }
    });

    teamRequests.getTeamMedia({team_key: 'frc254', year: 2014}, function(error, response, body) {
        if (error !== null) {
            console.log("-------------ERROR in the getTeamMedia function-------------");
            console.log(error);
        }
    });

    teamRequests.getTeamEventHistory({team_key: 'frc254'}, function(error, response, body) {
        if (error !== null) {
            console.log("-------------ERROR in the getTeamEventHistory function-------------");
            console.log(error);
        }
    });

    var team = teamRequests.getTeamAwardHistory({team_key: 'frc254'}, function(error, response, body) {
        if (error !== null) {
            console.log("-------------ERROR in the getTeamAwardHistory function-------------");
            console.log(error);
        }
    });

    var team = teamRequests.getTeamRobotHistory({team_key: 'frc254'}, function(error, response, body) {
        if (error !== null) {
            console.log("-------------ERROR in the getTeamRobotHistory function-------------");
            console.log(error);
        }
    });

    teamRequests.getTeamDistricHistory({team_key: 'frc254'}, function(error, response, body) {
        if (error !== null) {
            console.log("-------------ERROR in the getTeamDistricHistory function-------------");
            console.log(error);
        }
    });
}

// Execute the test
//teamRequestTest.run();
