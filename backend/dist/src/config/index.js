"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwt_secret = exports.monogo_uri = exports.port = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.port = process.env.PORT || 3000;
exports.monogo_uri = process.env.MONGO_URI || 'mongodb://localhost:27017/shop';
exports.jwt_secret = process.env.JWT_SECRET;
