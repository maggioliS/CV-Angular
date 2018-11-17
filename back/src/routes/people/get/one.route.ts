import { OnGet, Request, Route } from '@hapiness/core';
import { LoggerService } from '@hapiness/logger';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Person } from '../../../interfaces';
import { ID_PARAMETER, PERSON_RESPONSE } from '../../../schemas';
import { PeopleService } from '../../../services';

@Route({
    path: '/api/people/{id}',
    method: 'GET',
    config: {
        validate: {
            params: {
                id: ID_PARAMETER
            }
        },
        response: {
            status: {
                200: PERSON_RESPONSE
            }
        },
        description: 'Get one person',
        notes: 'Returns one person for the given id in path parameter',
        tags: [ 'api', 'people' ]
    }
})
export class GetOnePersonRoute implements OnGet {
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
    onGet(request: Request): Observable<Person> {
        return this._peopleService.one(request.params.id)
            .pipe(
                tap(_ => this._logger.info(_))
            );
    }
}
