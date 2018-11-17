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
const entityts_1 = require("@juneil/entityts");
const operators_1 = require("rxjs/operators");
const entities_1 = require("../../../entities");
const services_1 = require("../../../services");
let PutUpdatePersonRoute = class PutUpdatePersonRoute {
    /**
     * Class constructor
     * @param _peopleService
     */
    constructor(_peopleService, _logger) {
        this._peopleService = _peopleService;
        this._logger = _logger;
    }
    /**
     * OnPut implementation
     * @param request
     */
    onPut(request) {
        return this._peopleService.update(request.params.id, request.payload).pipe(operators_1.tap(_ => this._logger.info(_)));
    }
};
PutUpdatePersonRoute = __decorate([
    core_1.Route({
        path: '/api/people/{id}',
        method: 'PUT',
        config: {
            validate: {
                params: entities_1.IdEntity.schema(),
                payload: entities_1.PersonEntity.schema(entityts_1.Entity.Mode.UPDATE)
            },
            payload: {
                output: 'data',
                allow: 'application/json',
                parse: true
            },
            response: {
                status: {
                    200: entities_1.PersonEntity.schema()
                }
            },
            description: 'Update one person',
            notes: 'Update the person into the people array for the given id in path parameter and return it',
            tags: ['api', 'people']
        }
    }),
    __metadata("design:paramtypes", [services_1.PeopleService, logger_1.LoggerService])
], PutUpdatePersonRoute);
exports.PutUpdatePersonRoute = PutUpdatePersonRoute;
//# sourceMappingURL=update.route.js.map