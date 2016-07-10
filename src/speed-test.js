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
      const speed = results.speeds;
      let output = `here are the speed test results:\n`;
      output += `**speeds**\n----------\n`;
      output += `DOWNLOAD: ${speed.download} Mbps\n`;
      output += `UPLOAD:   ${speed.upload} Mbps`;

      msg.reply(output);
    });

    test.on('error', error => {
      msg.reply('There was an error running the speed test:\n', error);
    });
  });
};

