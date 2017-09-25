var axios = require("axios");

function callAPI(message, data) {
  axios.post("http://localhost:3000/messages", {
    message: message,
    data: data
  });
}

export function logIt(message, data) {
  callAPI(message, data);
}
