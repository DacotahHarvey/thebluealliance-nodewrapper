# thebluealliance-nodewrapper
A NodeJS wrapper that assists in the use of the API provided by http://www.thebluealliance.com

### NOTE: This package is deprecated. It will not be updated to support the new V3 API and support will end January 1st 2018

# Setup

open a new terminal window and navigate to your project root. Run the following command

`npm install thebluealliance-wrapper --save-dev`

For the time being you always have to configure the header that you send to the blue alliance yourself. 

Navigate to /node_modules/thebluealliance-wrapper/configurations and open the constants.js file. Inside you will see a `headers`
variable. That variable can be set to the standards set at [The Blue Alliance](https://www.thebluealliance.com/apidocs). 
Imitate one of the examples below.

`frc281:scouting-system:v01`
`woodie_flowers:match_scraper:5`

# Usage

Import the module in your js file

`var tba = require("thebluealliance-wrapper/wrapper");`

The wrapper is broken up into 4 sub modules. They are

- Districts
- Events
- Matches
- Teams

These submodules match up to the ones found in the documentation at [The Blue Alliance](https://www.thebluealliance.com/apidocs).
Following the example above (defining the package as tbaWrapper) we can access each submodule in the following fashion

```
tba.districtWrapper
tba.eventWrapper
tba.matchWrapper
tba.teamWrapper
```

You can also alias them for easier access if you wish

```
var district        = tba.districtWrapper
var lookingAtEvents = tba.eventWrapper
var frcMatchWrapper = tba.matchWrapper
var frcteams        = tba.teamWrapper
```

The names that you apply as the alias do not matter.

Each submodule has functions that line up approximately to the names provided at [The Blue Alliance](https://www.thebluealliance.com/apidocs).
The keys that each API endpoint take are named to match the documentation exactly. 

Every function within every submodule will return the exact same three parameters: error, response, body
As an example, you can expect to make every call in the following fashion
```
tba.wrapperChoice.wrapperFunction(optionsObject, function(error, response, body) {
  console.log(error);
  console.log(response);
  console.log(body);
}
```

- Error -> Any error that was returned from the server. Often the error returned is because a header was not set
before the request was made. See the Setup step above for more help
- Response -> The full response object from the api
- Body -> The data that was returned from the API. This can also be accesed from the response however using the body
is a significantly faster way to go

Lets say for example we wanted to make a request to get the team 1114.
We can find the documentation for this function [here](https://www.thebluealliance.com/apidocs#team-request)
Using the var `tba` from above we can do the following

```
tba.teamWrapper.getTeam({team_key: 1114}, function(error, response, body) {
  console.log(body);
}
```


