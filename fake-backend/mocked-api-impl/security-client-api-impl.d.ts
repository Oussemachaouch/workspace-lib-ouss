import { SecurityClientApi } from '@palmyra-devkit/core-api/client';
import { Observable } from 'rxjs';
import { Role } from '@palmyra-devkit/core-api/shared';
export declare class SecurityClientApiImpl implements SecurityClientApi {
    getRoles(): Observable<Role[]>;
}
