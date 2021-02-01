const dotenv = require("dotenv");

dotenv.config();

const audience = "https://express.eye-site";
const domain = "dev-lukn5ug2.us.auth0.com";
const serverPort = process.env.PORT;
const clientOriginUrl = "https://eyesite.club";

if (!audience) {
  throw new Error(
    ".env is missing the definition of an AUTH0_AUDIENCE environmental variable"
  );
}

if (!domain) {
  throw new Error(
    ".env is missing the definition of an AUTH0_DOMAIN environmental variable"
  );
}

if (!serverPort) {
  throw new Error(
    ".env is missing the definition of a API_PORT environmental variable"
  );
}

if (!clientOriginUrl) {
  throw new Error(
    ".env is missing the definition of a APP_ORIGIN environmental variable"
  );
}

const clientOrigins = ["https://eyesite.club"];

module.exports = {
  audience,
  domain,
  serverPort,
  clientOriginUrl,
  clientOrigins,
};
