import { OnPut, Request, Route } from '@hapiness/core';
import { LoggerService } from '@hapiness/logger';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {Cv} from '../../../interfaces';
import {CvsService} from '../../../services';
import {CV_RESPONSE} from '../../../schemas';

@Route({
    path: '/api/cvs/{titre}',
    method: 'PUT',
    config: {
        payload: {
            output: 'data',
            allow: 'application/json',
            parse: true
        },
        response: {
            status: {
                200: CV_RESPONSE
            }
        },
        description: 'Update one cv',
        notes: 'Update the cv for the given id in path parameter and returns it',
        tags: [ 'api', 'cv' ]
    }
})
export class PutUpdateCvRoute implements OnPut {
    /**
     * Class constructor
     * @param _peopleService
     * @param _logger
     */
    constructor(private _cvsService: CvsService, private _logger: LoggerService) {
    }

    /**
     * OnPut implementation
     * @param request
     */
    onPut(request: Request): Observable<Cv> {
        return this._cvsService.update(request.params.titre, request.payload).pipe(
            tap(_ => this._logger.info(_))
        );
    }
}
