import { OnGet, Request, Route } from '@hapiness/core';
import { LoggerService } from '@hapiness/logger';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Person } from '../../../interfaces';
import { PEOPLE_RESPONSE } from '../../../schemas';
import { PeopleService } from '../../../services';

@Route({
    path: '/api/people',
    method: 'GET',
    config: {
        response: {
            status: {
                200: PEOPLE_RESPONSE
            }
        },
        description: 'Get all people',
        notes: 'Returns an array of people or 204',
        tags: [ 'api', 'people' ]
    }
})
export class GetAllPeopleRoute implements OnGet {
    /**
     * Class constructor
     * @param _peopleService
     * @param _logger
     */
    constructor(private _peopleService: PeopleService, private _logger: LoggerService) {
    }

    /**
     * OnGet implementation
     * @param request
     */
    onGet(request: Request): Observable<Person[] | void> {
        return this._peopleService.listAll()
            .pipe(
                tap(_ => this._logger.info(_))
            );
    }
}
