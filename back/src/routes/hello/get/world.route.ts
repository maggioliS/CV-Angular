import { OnGet, Request, Route } from '@hapiness/core';
import { Observable, of } from 'rxjs';
import { HELLO_NAME_PARAMETER, HELLO_NAME_RESPONSE } from '../../../schemas';

@Route({
    path: '/api/hello/{name}',
    method: 'GET',
    config: {
        validate: {
            params: {
                name: HELLO_NAME_PARAMETER
            }
        },
        response: {
            status: {
                200: HELLO_NAME_RESPONSE
            }
        },
        description: 'Say Hello',
        notes: 'Say Hello to the `name` passes in parameter',
        tags: [ 'api', 'hello' ]
    }
})
export class GetHelloWorldRoute implements OnGet {
    /**
     * OnGet implementation
     *
     * @param {Request} request
     *
     * @return {Observable<string>}
     */
    onGet(request: Request): Observable<string> {
        return of(`Hello ${request.params.name}!`);
    }
}
