"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)(); // activate access to environment variables.
const env = {
    INBOUND_URL: process.env.INBOUND_URL,
    OUTBOUND_URL: process.env.OUTBOUND_URL
};
exports.default = env;
