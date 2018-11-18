import { OnGet, Request, Route } from '@hapiness/core';
import { LoggerService } from '@hapiness/logger';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Cv } from '../../../interfaces';
import { CvsService } from '../../../services';
import {CV_RESPONSE} from '../../../schemas';

@Route({
    path: '/api/cvs/{titre}',
    method: 'GET',
    config: {
        response: {
            status: {
                200: CV_RESPONSE
            }
        },
        description: 'Get one cv',
        notes: 'Returns one cv for the given title in path parameter',
        tags: [ 'api', 'cv' ]
    }
})
export class GetOneCvRoute implements OnGet {

    constructor(private _cvsService: CvsService, private _logger: LoggerService) {
    }

    /**
     * OnGet implementation
     * @param request
     */
    onGet(request: Request): Observable<Cv> {
        return this._cvsService.one(request.params.titre)
            .pipe(
                tap(_ => this._logger.info(_))
            );
    }
}
