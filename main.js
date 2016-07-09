const fs = require('fs');
const path = require('path');

module.exports = (robot, scripts) => {
  // define path to script
  const scriptPath = path.resolve(__dirname, 'src');

  // load scripts if found
  fs.exists(scriptPath, exists => {
    if (exists) {
      fs.readdirSync(scriptPath).forEach(script => {
        if ((scripts !== undefined) && scripts.indexOf('*') < 0) {
          if (scripts.indexOf(script) >= 0) {
            robot.loadFile(scriptPath, script);
          }
        } else {
          robot.loadFile(scriptPath, script);
        }
      });
    }
  });
};
