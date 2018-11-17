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
const people_1 = require("./people");
let PeopleService = class PeopleService {
    /**
     * Class constructor
     */
    constructor() {
        this._people = people_1.PEOPLE.map(person => Object.assign(person, {
            birthDate: this._parseDate(person.birthDate)
        }));
    }
    /**
     * Returns all existing people in the list
     *
     * @returns {Observable<Person[] | void>}
     */
    listAll() {
        return rxjs_1.of(this._people)
            .pipe(operators_1.map(_ => (!!_ && !!_.length) ? _ : undefined));
    }
    /**
     * Returns randomly one people of the list
     *
     * @returns {Observable<Person | void>}
     */
    random() {
        return rxjs_1.of(this._people[Math.round(Math.random() * this._people.length)])
            .pipe(operators_1.map(_ => !!_ ? _ : undefined));
    }
    /**
     * Returns one people of the list matching id in parameter
     *
     * @param {string} id of the people
     *
     * @returns {Observable<Person>}
     */
    one(id) {
        return rxjs_1.from(this._people)
            .pipe(operators_1.find(_ => _.id === id), operators_1.flatMap(_ => !!_ ?
            rxjs_1.of(_) :
            rxjs_1.throwError(biim_1.Biim.notFound(`People with id '${id}' not found`))));
    }
    /**
     * Check if person already exists and add it in people list
     *
     * @param person to create
     *
     * @returns {Observable<any>}
     */
    create(person) {
        return rxjs_1.from(this._people)
            .pipe(operators_1.find(_ => _.lastname.toLowerCase() === person.lastname.toLowerCase() &&
            _.firstname.toLowerCase() === person.firstname.toLowerCase()), operators_1.flatMap(_ => !!_ ?
            rxjs_1.throwError(biim_1.Biim.conflict(`People with lastname '${person.lastname}' and firstname '${person.firstname}' already exists`)) :
            this._addPerson(person)), operators_1.map(_ => ({ response: _, statusCode: 201 })));
    }
    /**
     * Update a person in people list
     *
     * @param {string} id of the person to update
     * @param person data to update
     *
     * @returns {Observable<any>}
     */
    update(id, person) {
        return this._findPeopleIndexOfList(id)
            .pipe(operators_1.tap(_ => Object.assign(this._people[_], person)), operators_1.map(_ => this._people[_]));
    }
    /**
     * Deletes one person in people list
     *
     * @param {string} id of the person to delete
     *
     * @returns {Observable<void>}
     */
    delete(id) {
        return this._findPeopleIndexOfList(id)
            .pipe(operators_1.tap(_ => this._people.splice(_, 1)), operators_1.map(() => undefined));
    }
    /**
     * Finds index of array for current person
     *
     * @param {string} id of the person to find
     *
     * @returns {Observable<number>}
     *
     * @private
     */
    _findPeopleIndexOfList(id) {
        return rxjs_1.from(this._people)
            .pipe(operators_1.findIndex(_ => _.id === id), operators_1.flatMap(_ => _ > -1 ?
            rxjs_1.of(_) :
            rxjs_1.throwError(biim_1.Biim.notFound(`People with id '${id}' not found`))));
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
    _addPerson(person) {
        return rxjs_1.of(person)
            .pipe(operators_1.map(_ => Object.assign(_, {
            id: this._createId(),
            birthDate: this._parseDate('20/10/1990')
        })), operators_1.tap(_ => this._people = this._people.concat(_)));
    }
    /**
     * Function to parse date and return timestamp
     *
     * @param {string} date to parse
     *
     * @returns {number} timestamp
     *
     * @private
     */
    _parseDate(date) {
        const dates = date.split('/');
        return (new Date(dates[2] + '/' + dates[1] + '/' + dates[0]).getTime());
    }
    /**
     * Creates a new id
     *
     * @returns {string}
     *
     * @private
     */
    _createId() {
        return `${new Date().getTime()}`;
    }
};
PeopleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], PeopleService);
exports.PeopleService = PeopleService;
//# sourceMappingURL=people.service.js.map