// Description:
//  check speed of internet connection for/via hubot
//
// Dependencies:
//   "speedtest-net": "^1.2.6"
//
// Configuration:
//   NONE YET
//
// Commands:
//   hubot run speedtest - returns internet speedtest results
//
// Notes:
//   <optional notes required for the script>
//
// Author:
//   latrokles

const speedTest = require('speedtest-net');

module.exports = function (robot) {
  robot.respond(/run speedtest/i, msg => {
    // instantiate our speedtest
    const test = speedTest({maxTime: 5000});
    test.on('data', results => {
      msg.reply(results);
    });
  });
};

