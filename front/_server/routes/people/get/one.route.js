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
const entities_1 = require("../../../entities");
const services_1 = require("../../../services");
let GetOnePersonRoute = class GetOnePersonRoute {
    /**
     * Class constructor
     * @param _peopleService
     */
    constructor(_peopleService, _logger) {
        this._peopleService = _peopleService;
        this._logger = _logger;
    }
    /**
     * OnGet implementation
     * @param request
     */
    onGet(request) {
        return this._peopleService.one(request.params.id)
            .pipe(operators_1.tap(_ => this._logger.info(_)));
    }
};
GetOnePersonRoute = __decorate([
    core_1.Route({
        path: '/api/people/{id}',
        method: 'GET',
        config: {
            validate: {
                params: entities_1.IdEntity.schema()
            },
            response: {
                status: {
                    200: entities_1.PersonEntity.schema()
                }
            },
            description: 'Get one person',
            notes: 'Returns one person from the people array for the given id in path parameter',
            tags: ['api', 'people']
        }
    }),
    __metadata("design:paramtypes", [services_1.PeopleService, logger_1.LoggerService])
], GetOnePersonRoute);
exports.GetOnePersonRoute = GetOnePersonRoute;
//# sourceMappingURL=one.route.js.map