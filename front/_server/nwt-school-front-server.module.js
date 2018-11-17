"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@hapiness/config");
const core_1 = require("@hapiness/core");
const logger_1 = require("@hapiness/logger");
const swag_1 = require("@hapiness/swag");
const routes_1 = require("./routes");
const services_1 = require("./services");
let NwtSchoolFrontServerModule = class NwtSchoolFrontServerModule {
    /**
     * Class constructor
     * @param _httpServer wrapper for instance of original Hapi server
     * @param _logger service
     */
    constructor(_httpServer, _logger) {
        this._httpServer = _httpServer;
        this._logger = _logger;
    }
    /**
     * onError process
     */
    onError(error, data) {
        this._logger.error(error);
    }
    /**
     * onStart process
     */
    onStart() {
        this._logger.info(`< Application.bootstrap > Server started at: ${this._httpServer.instance().info.uri}`);
    }
};
NwtSchoolFrontServerModule = __decorate([
    core_1.HapinessModule({
        version: '1.0.0',
        imports: [
            logger_1.LoggerModule,
            swag_1.SwagModule.setConfig(config_1.Config.get('swag'))
        ],
        declarations: [
            routes_1.GetOnePersonRoute,
            routes_1.GetAllPeopleRoute,
            routes_1.GetRandomPersonRoute,
            routes_1.DeleteOnePersonRoute,
            routes_1.PostCreatePersonRoute,
            routes_1.PutUpdatePersonRoute
        ],
        providers: [
            services_1.PeopleService,
            core_1.HttpServerService
        ]
    }),
    __metadata("design:paramtypes", [core_1.HttpServerService, logger_1.LoggerService])
], NwtSchoolFrontServerModule);
exports.NwtSchoolFrontServerModule = NwtSchoolFrontServerModule;
//# sourceMappingURL=nwt-school-front-server.module.js.map