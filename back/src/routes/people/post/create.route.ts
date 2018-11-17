import { HTTPHandlerResponse, OnPost, Request, Route } from '@hapiness/core';
import { LoggerService } from '@hapiness/logger';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PERSON_PAYLOAD, PERSON_RESPONSE } from '../../../schemas';
import { PeopleService } from '../../../services';

@Route({
    path: '/api/people',
    method: 'POST',
    config: {
        validate: {
            payload: PERSON_PAYLOAD
        },
        payload: {
            output: 'data',
            allow: 'application/json',
            parse: true
        },
        response: {
            status: {
                201: PERSON_RESPONSE
            }
        },
        description: 'Create one person',
        notes: 'Create a new person and returns it',
        tags: [ 'api', 'people' ]
    }
})
export class PostCreatePersonRoute implements OnPost {
    /**
     * Class constructor
     * @param _peopleService
     * @param _logger
     */
    constructor(private _peopleService: PeopleService, private _logger: LoggerService) {
    }

    /**
     * OnPost implementation
     * @param request
     */
    onPost(request: Request): Observable<HTTPHandlerResponse> {
        return this._peopleService.create(request.payload).pipe(
            tap(_ => this._logger.info(_))
        );
    }
}
