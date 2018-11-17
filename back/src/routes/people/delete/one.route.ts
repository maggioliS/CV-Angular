import { OnDelete, Request, Route } from '@hapiness/core';
import { Observable } from 'rxjs';
import { ID_PARAMETER } from '../../../schemas';
import { PeopleService } from '../../../services';

@Route({
    path: '/api/people/{id}',
    method: 'DELETE',
    config: {
        validate: {
            params: {
                id: ID_PARAMETER
            }
        },
        description: 'Delete one person',
        notes: 'Delete one person for the given id in path parameter and returns 204',
        tags: [ 'api', 'people' ]
    }
})
export class DeleteOnePersonRoute implements OnDelete {
    /**
     * Class constructor
     * @param _peopleService
     */
    constructor(private _peopleService: PeopleService) {
    }

    /**
     * OnDelete implementation
     * @param request
     */
    onDelete(request: Request): Observable<void> {
        return this._peopleService.delete(request.params.id);
    }
}
