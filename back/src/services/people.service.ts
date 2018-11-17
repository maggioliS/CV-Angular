import { Biim } from '@hapiness/biim';
import { HTTPHandlerResponse, Injectable } from '@hapiness/core';

import { Observable, of, throwError } from 'rxjs';
import { catchError, flatMap, map } from 'rxjs/operators';
import { Person } from '../interfaces';
import { PeopleDocumentService } from './people-document.service';

@Injectable()
export class PeopleService {
    /**
     * Class constructor
     */
    constructor(private _peopleDocumentService: PeopleDocumentService) {
    }

    /**
     * Returns all existing people in the list
     *
     * @returns {Observable<Person[] | void>}
     */
    listAll(): Observable<Person[] | void> {
        return this._peopleDocumentService.find();
    }

    /**
     * Returns randomly one people of the list
     *
     * @returns {Observable<Person | void>}
     */
    random(): Observable<Person | void> {
        return this.listAll()
            .pipe(
                map(_ => (!!_ && _.length > 0) ? _[ Math.round(Math.random() * _.length) ] : undefined)
            );
    }

    /**
     * Returns one people of the list matching id in parameter
     *
     * @param {string} id of the people
     *
     * @returns {Observable<Person>}
     */
    one(id: string): Observable<Person> {
        return this._peopleDocumentService.findById(id)
            .pipe(
                catchError(e => throwError(Biim.preconditionFailed(e.message))),
                flatMap(_ =>
                    !!_ ?
                        of(_) :
                        throwError(Biim.notFound(`People with id '${id}' not found`))
                )
            );
    }

    /**
     * Check if person already exists and add it in people list
     *
     * @param person to create
     *
     * @returns {Observable<HTTPHandlerResponse>}
     */
    create(person: Person): Observable<HTTPHandlerResponse> {
        return this._addPerson(person)
            .pipe(
                flatMap(_ => this._peopleDocumentService.create(_)),
                catchError(e =>
                    e.code = 11000 ?
                        throwError(
                            Biim.conflict(`People with lastname '${person.lastname}' and firstname '${person.firstname}' already exists`)
                        ) :
                        throwError(Biim.preconditionFailed(e.message))
                ),
                map(_ => ({ response: _, statusCode: 201 }))
            );
    }

    /**
     * Update a person in people list
     *
     * @param {string} id of the person to update
     * @param {Person} person data to update
     *
     * @returns {Observable<Person>}
     */
    update(id: string, person: Person): Observable<Person> {
        return this._peopleDocumentService.findByIdAndUpdate(id, person)
            .pipe(
                catchError(e =>
                    e.code = 11000 ?
                        throwError(
                            Biim.conflict(`People with lastname '${person.lastname}' and firstname '${person.firstname}' already exists`)
                        ) :
                        throwError(Biim.preconditionFailed(e.message))
                ),
                flatMap(_ =>
                    !!_ ?
                        of(_) :
                        throwError(Biim.notFound(`People with id '${id}' not found`))
                )
            );
    }

    /**
     * Deletes one person in people list
     *
     * @param {string} id of the person to delete
     *
     * @returns {Observable<void>}
     */
    delete(id: string): Observable<void> {
        return this._peopleDocumentService.findByIdAndRemove(id)
            .pipe(
                catchError(e => throwError(Biim.preconditionFailed(e.message))),
                flatMap(_ =>
                    !!_ ?
                        of(undefined) :
                        throwError(Biim.notFound(`People with id '${id}' not found`))
                )
            );
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
    private _addPerson(person: Person): Observable<any> {
        return of(person)
            .pipe(
                map(_ =>
                    Object.assign(
                        { birthDate: this._parseDate('20/10/1990') },
                        _
                    )
                )
            );
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
    private _parseDate(date: string): number {
        const dates = date.split('/');
        return (new Date(dates[ 2 ] + '/' + dates[ 1 ] + '/' + dates[ 0 ]).getTime());
    }
}
