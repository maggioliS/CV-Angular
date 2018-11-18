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
const core_1 = require("@hapiness/core");
const logger_1 = require("@hapiness/logger");
const operators_1 = require("rxjs/operators");
const services_1 = require("../../../services");
const schemas_1 = require("../../../schemas");
let GetOneCvRoute = class GetOneCvRoute {
    constructor(_cvsService, _logger) {
        this._cvsService = _cvsService;
        this._logger = _logger;
    }
    /**
     * OnGet implementation
     * @param request
     */
    onGet(request) {
        return this._cvsService.one(request.params.titre)
            .pipe(operators_1.tap(_ => this._logger.info(_)));
    }
};
GetOneCvRoute = __decorate([
    core_1.Route({
        path: '/api/cvs/{titre}',
        method: 'GET',
        config: {
            response: {
                status: {
                    200: schemas_1.CV_RESPONSE
                }
            },
            description: 'Get one cv',
            notes: 'Returns one cv for the given title in path parameter',
            tags: ['api', 'cv']
        }
    }),
    __metadata("design:paramtypes", [services_1.CvsService, logger_1.LoggerService])
], GetOneCvRoute);
exports.GetOneCvRoute = GetOneCvRoute;
//# sourceMappingURL=one.route.js.map