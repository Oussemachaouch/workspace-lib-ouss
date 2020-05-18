import { Observer, Observable } from 'rxjs';
import { ValidationInfo } from '../../core/services';
export declare class ValidationStore implements Observer<ValidationInfo[]> {
    private shareWithBehaviour$;
    select(): Observable<ValidationInfo[]>;
    next(value: ValidationInfo[]): void;
    error(err: any): void;
    complete(): void;
}
