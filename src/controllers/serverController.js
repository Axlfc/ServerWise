const { exec } = require('child_process');

const getServerStatus = (serverName) => {
  return new Promise((resolve, reject) => {
    exec(`systemctl status ${serverName}`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
};

const startServer = (serverName) => {
  return new Promise((resolve, reject) => {
    exec(`systemctl start ${serverName}`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
};

const stopServer = (serverName) => {
  return new Promise((resolve, reject) => {
    exec(`systemctl stop ${serverName}`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
};

const restartServer = (serverName) => {
  return new Promise((resolve, reject) => {
    exec(`systemctl restart ${serverName}`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
};

const enableServer = (serverName) => {
  return new Promise((resolve, reject) => {
    exec(`systemctl enable ${serverName}`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
};

const disableServer = (serverName) => {
  return new Promise((resolve, reject) => {
    exec(`systemctl disable ${serverName}`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
};

module.exports = {
  getServerStatus,
  startServer,
  stopServer,
  restartServer,
  enableServer,
  disableServer,
};