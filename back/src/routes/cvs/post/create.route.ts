import { HTTPHandlerResponse, OnPost, Request, Route } from '@hapiness/core';
import { LoggerService } from '@hapiness/logger';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CvsService } from '../../../services';
import {CV_RESPONSE} from '../../../schemas';

@Route({
    path: '/api/cvs',
    method: 'POST',
    config: {
        payload: {
            output: 'data',
            allow: 'application/json',
            parse: true
        },
        response: {
            status: {
                201: CV_RESPONSE
            }
        },
        description: 'Create one cv',
        notes: 'Create a new cv and returns it',
        tags: [ 'api', 'cv' ]
    }
})
export class PostCreateCvRoute implements OnPost {
    /**
     * Class constructor
     * @param _peopleService
     * @param _logger
     */
    constructor(private _cvsService: CvsService, private _logger: LoggerService) {
    }

    /**
     * OnPost implementation
     * @param request
     */
    onPost(request: Request): Observable<HTTPHandlerResponse> {
        return this._cvsService.create(request.payload).pipe(
            tap(_ => this._logger.info(_))
        );
    }
}
