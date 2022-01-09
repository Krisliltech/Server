"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_http_proxy_1 = __importDefault(require("express-http-proxy"));
const envConfig_1 = __importDefault(require("./config/envConfig"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.post(/inbound[\/].*/i, (0, express_http_proxy_1.default)(envConfig_1.default.INBOUND_URL));
app.post(/outbound[\/].*/i, (0, express_http_proxy_1.default)(envConfig_1.default.OUTBOUND_URL));
app.use('*', (request, response, next) => {
    response.status(405).json({
        message: "",
        error: "Invalid route.",
    });
});
app.use((error, request, response, next) => {
    response.status(500).json({
        message: '',
        error: 'Server currently unable to service request, try again later.'
    });
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server now running on port ${PORT}`);
});
