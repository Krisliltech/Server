import {config} from "dotenv"
config(); // activate access to environment variables.
const env = {
    INBOUND_URL: process.env.INBOUND_URL,
    OUTBOUND_URL: process.env.OUTBOUND_URL
}

export default env