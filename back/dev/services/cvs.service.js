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
const biim_1 = require("@hapiness/biim");
const core_1 = require("@hapiness/core");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const cvs_document_service_1 = require("./cvs-document.service");
let CvsService = class CvsService {
    /**
     * Class constructor
     */
    constructor(_cvsDocumentService) {
        this._cvsDocumentService = _cvsDocumentService;
    }
    /**
     * Returns all existing people in the list
     *
     * @returns {Observable<Person[] | void>}
     */
    listAll() {
        return this._cvsDocumentService.find();
    }
    /**
     * Returns randomly one people of the list
     *
     * @returns {Observable<Person | void>}
     */
    random() {
        return this.listAll()
            .pipe(operators_1.map(_ => (!!_ && _.length > 0) ? _[Math.round(Math.random() * _.length)] : undefined));
    }
    /**
     * Returns one people of the list matching id in parameter
     *
     * @param {string} id of the people
     *
     * @returns {Observable<Person>}
     */
    one(titre) {
        return this._cvsDocumentService.findByTitre(titre)
            .pipe(operators_1.catchError(e => rxjs_1.throwError(biim_1.Biim.preconditionFailed(e.message))), operators_1.flatMap(_ => !!_ ?
            rxjs_1.of(_) :
            rxjs_1.throwError(biim_1.Biim.notFound(`CV with id '${titre} not found`))));
    }
    /**
     * Check if person already exists and add it in people list
     *
     * @param person to create
     *
     * @returns {Observable<HTTPHandlerResponse>}
     */
    create(cv) {
        return this._addCv(cv)
            .pipe(operators_1.flatMap(_ => this._cvsDocumentService.create(_)), operators_1.catchError(e => e.code = 11000 ?
            rxjs_1.throwError(biim_1.Biim.conflict(`CV with titre'${cv.titre} already exists`)) :
            rxjs_1.throwError(biim_1.Biim.preconditionFailed(e.message))), operators_1.map(_ => ({ response: _, statusCode: 201 })));
    }
    /**
     * Update a person in people list
     *
     * @param {string} id of the person to update
     * @param {Person} person data to update
     *
     * @returns {Observable<Person>}
     */
    update(titre, cv) {
        return this._cvsDocumentService.findByTitreAndUpdate(titre, cv)
            .pipe(operators_1.catchError(e => e.code = 11000 ?
            rxjs_1.throwError(biim_1.Biim.conflict(`cv with title'${cv.titre}' already exists`)) :
            rxjs_1.throwError(biim_1.Biim.preconditionFailed(e.message))), operators_1.flatMap(_ => !!_ ?
            rxjs_1.of(_) :
            rxjs_1.throwError(biim_1.Biim.notFound(`cv with title '${titre}' not found`))));
    }
    /**
     * Deletes one person in people list
     *
     * @param {string} id of the person to delete
     *
     * @returns {Observable<void>}
     */
    delete(titre) {
        return this._cvsDocumentService.findByTitreAndRemove(titre)
            .pipe(operators_1.catchError(e => rxjs_1.throwError(biim_1.Biim.preconditionFailed(e.message))), operators_1.flatMap(_ => !!_ ?
            rxjs_1.of(undefined) :
            rxjs_1.throwError(biim_1.Biim.notFound(`Cv with title '${titre}' not found`))));
    }
    /**
     * Add person with good data in people list
     *
     * @param person to add
     *
     * @returns {Observable<any>}
     *
     * @private
     */
    _addCv(cv) {
        return rxjs_1.of(cv)
            .pipe(operators_1.map(_ => Object.assign(_)));
    }
};
CvsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cvs_document_service_1.CvsDocumentService])
], CvsService);
exports.CvsService = CvsService;
//# sourceMappingURL=cvs.service.js.map