import { View } from '../services/api';
import { Observer, Observable } from 'rxjs';
import { OnDestroy } from '@angular/core';
export declare class PreviewStore implements Observer<View>, OnDestroy {
    private shareWithBehavior$;
    next(view: View): void;
    select(): Observable<View>;
    error(err: any): void;
    complete(): void;
    ngOnDestroy(): void;
}
