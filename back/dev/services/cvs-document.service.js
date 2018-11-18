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
const mongo_1 = require("@hapiness/mongo");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const cvs_1 = require("../models/cvs");
let CvsDocumentService = class CvsDocumentService {
    /**
     * Class constructor
     *
     * @param {MongoClientService} _mongoClientService
     */
    constructor(_mongoClientService) {
        this._mongoClientService = _mongoClientService;
        this._document = this._mongoClientService.getModel({ adapter: 'mongoose' }, cvs_1.CvModel);
    }
    /**
     * Call mongoose method, call toJSON on each result and returns Person[] or undefined
     *
     * @return {Observable<Person[] | void>}
     */
    find() {
        return rxjs_1.from(this._document.find({}))
            .pipe(operators_1.map((docs) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined));
    }
    /**
     * Returns one person of the list matching id in parameter
     *
     * @param {string} id of the person in the db
     *
     * @return {Observable<Person | void>}
     */
    findByTitre(titre) {
        return rxjs_1.from(this._document.findById(titre))
            .pipe(operators_1.map((doc) => !!doc ? doc.toJSON() : undefined));
    }
    /**
     * Check if person already exists with index and add it in people list
     *
     * @param {Person} person to create
     *
     * @return {Observable<Person>}
     */
    create(cv) {
        return rxjs_1.from(this._document.create(cv))
            .pipe(operators_1.map((doc) => doc.toJSON()));
    }
    /**
     * Update a person in people list
     *
     * @param {string} id
     * @param {Person} person
     *
     * @return {Observable<Person | void>}
     */
    findByTitreAndUpdate(titre, cv) {
        return rxjs_1.from(this._document.findByIdAndUpdate(titre, cv, { new: true }))
            .pipe(operators_1.map((doc) => !!doc ? doc.toJSON() : undefined));
    }
    /**
     * Delete a person in people list
     *
     * @param {string} id
     *
     * @return {Observable<Person | void>}
     */
    findByTitreAndRemove(titre) {
        return rxjs_1.from(this._document.findByIdAndRemove(titre))
            .pipe(operators_1.map((doc) => !!doc ? doc.toJSON() : undefined));
    }
};
CvsDocumentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [mongo_1.MongoClientService])
], CvsDocumentService);
exports.CvsDocumentService = CvsDocumentService;
//# sourceMappingURL=cvs-document.service.js.map