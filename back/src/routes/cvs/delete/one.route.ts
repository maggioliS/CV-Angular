import { OnDelete, Request, Route } from '@hapiness/core';
import { Observable } from 'rxjs';
import {CvsService} from '../../../services';

@Route({
    path: '/api/cvs/{titre}',
    method: 'DELETE',
    config: {
        description: 'Delete one cv',
        notes: 'Delete one cv for the given titre in path parameter and returns 204',
        tags: [ 'api', 'cvs' ]
    }
})
export class DeleteOneCvRoute implements OnDelete {
    /**
     * Class constructor
     * @param _cvService
     */
    constructor(private _cvsService: CvsService) {
    }

    /**
     * OnDelete implementation
     * @param request
     */
    onDelete(request: Request): Observable<void> {
        return this._cvsService.delete(request.params.titre);
    }
}
