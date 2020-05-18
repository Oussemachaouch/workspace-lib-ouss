import { Observer, Observable } from 'rxjs';
import { Service } from '@palmyra-devkit/core-api/shared';
export declare class SwaggerServicesStore implements Observer<Service[]> {
    private shareWithBehavior$;
    private services;
    next(services: Service[]): void;
    select(): any;
    select(featureName: string): Observable<Service[]>;
    select(featureName: string, path: string): Observable<Service>;
    selectCold(): Array<Service>;
    error(err: any): void;
    complete(): void;
}
