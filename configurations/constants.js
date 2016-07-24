/**
 * @description This constants file contains variable that map to variables
 * that we use over and over again. Having this file allows us to easily
 * make a change that will affect the entire Wrapper such as changing from V2
 * to V3 (if and when V3 comes out)
 * @author Dacotah Harvey
 * @author John-Curtis Mcdonald
 */

var api_version = 'v2';
var base_url    = "http://thebluealliance.com/api/" + api_version;
var headers     = {
    "X-TBA-App-Id": "dacotah_harvey:api_wrapper:1"
};

// Export the constants that we have made available
module.exports = {
    api_version:    api_version,
    base_url:       base_url,
    headers:        headers
};
