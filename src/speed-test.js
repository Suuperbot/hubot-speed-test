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

module.exports = function (robot) {
  robot.respond(/run speedtest/i, msg => {
    msg.reply('results of the speedtest: ...');
  });
};

