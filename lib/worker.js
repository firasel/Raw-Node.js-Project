// dependencies
const data = require("./data");

// worker object - module scaffolding
const worker = {};

// lookup all the checks
worker.gatherAllChecks = () => {
  // get all the checks
};

// timer to execute the worker process once per minute
worker.loop = () => {
  setInterval(() => {
    worker.gatherAllChecks();
  }, 1000 * 60);
};

// start the workers
worker.init = () => {
  // execute all the checks
  worker.gatherAllChecks();

  // call the loop so that checks continue
  worker.loop();

  console.log("Workers started");
};

// export
module.exports = worker;
