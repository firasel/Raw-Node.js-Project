// module scaffolding
const environments = {};

environments.staging = {
  port: 3000,
  envName: "staging",
  secretKey: "oursecret11",
  maxChecks: 5,
  twilio: {
    fromPhone: "+12399325087",
    accountSid: "AC776db14354dce975df114af0721e4d6c",
    authToken: "fe7a8b484e87c4d43ed23bbcd7f0ec51",
  },
};

environments.production = {
  port: 5000,
  envName: "production",
  secretKey: "oursecret22",
  maxChecks: 5,
  twilio: {
    fromPhone: "+12399325087",
    accountSid: "AC776db14354dce975df114af0721e4d6c",
    authToken: "fe7a8b484e87c4d43ed23bbcd7f0ec51",
  },
};

// determine which environment was passed
const currentEnvironment =
  typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

// export corresponding environment object
const environmentToExport =
  typeof environments[currentEnvironment] === "object"
    ? environments[currentEnvironment]
    : environments.staging;

// exports module
module.exports = environmentToExport;
