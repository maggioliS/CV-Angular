import { OnGet, Request, Route } from '@hapiness/core';
import { LoggerService } from '@hapiness/logger';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Cv } from '../../../interfaces';
import { CvsService } from '../../../services';
import {CV_RESPONSE} from '../../../schemas';

@Route({
    path: '/api/cvs',
    method: 'GET',
    config: {
        response: {
            status: {
                200: CV_RESPONSE
            }
        },
        description: 'Get all cv',
        notes: 'Returns an array of cv or 204',
        tags: [ 'api', 'cv' ]
    }
})
export class GetAllCvsRoute implements OnGet {
    /**
     * Class constructor
     * @param _peopleService
     * @param _logger
     */
    constructor(private _cvsService: CvsService, private _logger: LoggerService) {
    }

    /**
     * OnGet implementation
     * @param request
     */
    onGet(request: Request): Observable<Cv[] | void> {
        return this._cvsService.listAll()
            .pipe(
                tap(_ => this._logger.info(_))
            );
    }
}
