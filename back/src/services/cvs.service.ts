import { Biim } from '@hapiness/biim';
import { HTTPHandlerResponse, Injectable } from '@hapiness/core';

import { Observable, of, throwError } from 'rxjs';
import { catchError, flatMap, map } from 'rxjs/operators';
import { Cv } from '../interfaces';
import { CvsDocumentService } from './cvs-document.service';

@Injectable()
export class CvsService {
    /**
     * Class constructor
     */
    constructor(private _cvsDocumentService: CvsDocumentService) {
    }

    /**
     * Returns all existing people in the list
     *
     * @returns {Observable<Person[] | void>}
     */
    listAll(): Observable<Cv[] | void> {
        return this._cvsDocumentService.find();
    }

    /**
     * Returns randomly one people of the list
     *
     * @returns {Observable<Person | void>}
     */
    random(): Observable<Cv | void> {
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
    one(titre: string): Observable<Cv> {
        return this._cvsDocumentService.findByTitre(titre)
            .pipe(
                catchError(e => throwError(Biim.preconditionFailed(e.message))),
                flatMap(_ =>
                    !!_ ?
                        of(_) :
                        throwError(Biim.notFound(`CV with id '${titre} not found`))
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
    create(cv: Cv): Observable<HTTPHandlerResponse> {
        return this._addCv(cv)
            .pipe(
                flatMap(_ => this._cvsDocumentService.create(_)),
                catchError(e =>
                    e.code = 11000 ?
                        throwError(
                            Biim.conflict(`CV with titre'${cv.titre} already exists`)
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
    update(titre: string, cv: Cv): Observable<Cv> {
        return this._cvsDocumentService.findByTitreAndUpdate(titre, cv)
            .pipe(
                catchError(e =>
                    e.code = 11000 ?
                        throwError(
                            Biim.conflict(`cv with title'${cv.titre}' already exists`)
                        ) :
                        throwError(Biim.preconditionFailed(e.message))
                ),
                flatMap(_ =>
                    !!_ ?
                        of(_) :
                        throwError(Biim.notFound(`cv with title '${titre}' not found`))
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
    delete(titre: string): Observable<void> {
        return this._cvsDocumentService.findByTitreAndRemove(titre)
            .pipe(
                catchError(e => throwError(Biim.preconditionFailed(e.message))),
                flatMap(_ =>
                    !!_ ?
                        of(undefined) :
                        throwError(Biim.notFound(`Cv with title '${titre}' not found`))
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
    private _addCv(cv: Cv): Observable<any> {
        return of(cv)
            .pipe(
                map(_ =>
                    Object.assign(
                        _
                    )
                )
            );
    }
}
