"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs-compat");
const config_1 = require("@hapiness/config");
const core_1 = require("@hapiness/core");
const logger_1 = require("@hapiness/logger");
const bunyan_1 = require("bunyan");
const nwt_school_front_server_module_1 = require("./nwt-school-front-server.module");
core_1.Hapiness.bootstrap(nwt_school_front_server_module_1.NwtSchoolFrontServerModule, [
    core_1.HttpServerExt.setConfig(config_1.Config.get('server')),
    logger_1.LoggerExt.setConfig({ logger: bunyan_1.createLogger(config_1.Config.get('logger')) })
]).catch(err => console.error(err));
//# sourceMappingURL=index.js.map