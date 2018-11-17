import { OnPut, Request, Route } from '@hapiness/core';
import { LoggerService } from '@hapiness/logger';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Person } from '../../../interfaces';
import { ID_PARAMETER, PERSON_PAYLOAD, PERSON_RESPONSE } from '../../../schemas';
import { PeopleService } from '../../../services';

@Route({
    path: '/api/people/{id}',
    method: 'PUT',
    config: {
        validate: {
            params: {
                id: ID_PARAMETER
            },
            payload: PERSON_PAYLOAD
        },
        payload: {
            output: 'data',
            allow: 'application/json',
            parse: true
        },
        response: {
            status: {
                200: PERSON_RESPONSE
            }
        },
        description: 'Update one person',
        notes: 'Update the person for the given id in path parameter and returns it',
        tags: [ 'api', 'people' ]
    }
})
export class PutUpdatePersonRoute implements OnPut {
    /**
     * Class constructor
     * @param _peopleService
     * @param _logger
     */
    constructor(private _peopleService: PeopleService, private _logger: LoggerService) {
    }

    /**
     * OnPut implementation
     * @param request
     */
    onPut(request: Request): Observable<Person> {
        return this._peopleService.update(request.params.id, request.payload).pipe(
            tap(_ => this._logger.info(_))
        );
    }
}
