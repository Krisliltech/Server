import {config} from "dotenv"
config(); // activate access to environment variables.
const env = {
    REDIS_HOST: process.env.REDIS_HOST,
    RESIS_PORT: process.env.REDIS_PORT,
    INBOUND_URL: process.env.INBOUND_URL,
    OUTBOUND_URL: process.env.OUTBOUND_URL
}

export default env