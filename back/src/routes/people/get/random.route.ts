import { OnGet, Request, Route } from '@hapiness/core';
import { LoggerService } from '@hapiness/logger';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Person } from '../../../interfaces';
import { PERSON_RESPONSE } from '../../../schemas';
import { PeopleService } from '../../../services';

@Route({
    path: '/api/people/random',
    method: 'GET',
    config: {
        response: {
            status: {
                200: PERSON_RESPONSE
            }
        },
        description: 'Get one person randomly',
        notes: 'Returns one person randomly or 204',
        tags: [ 'api', 'people' ]
    }
})
export class GetRandomPersonRoute implements OnGet {
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
    onGet(request: Request): Observable<Person | void> {
        return this._peopleService.random()
            .pipe(
                tap(_ => this._logger.info(_))
            );
    }
}
