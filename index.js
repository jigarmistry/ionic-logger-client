var axios = require("axios");
var ip = require("ip");
var localForage = require("localforage");

// Get the IP Address of the system
var gHost = "localhost";
var ipAddress = ip.address();
if (ipAddress) {
  gHost = ipAddress;
}

/*
  Call the API to send the log
*/
function callAPI(message, data, host) {
  axios.post(`http://${host}:4567/messages`, {
    message: message,
    data: data
  });
}

/*
  Setup the config
  host & devMode
*/
export function setupLog(data) {
  localForage.setItem("config", JSON.stringify(data));
}

/*
  Function to check for log
*/
export function logIt(message, data) {
  localForage.getItem("config", function(err, value) {
    if (value) {
      var config = JSON.parse(value);
      var host = config.host ? config.host : gHost;
      var devMode = config.devMode ? config.devMode : "0";
      if (devMode == "1") {
        callAPI(message, data, host);
      }
    }
  });
}
