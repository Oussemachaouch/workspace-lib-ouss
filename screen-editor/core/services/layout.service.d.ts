import { Observable, BehaviorSubject } from 'rxjs';
export declare class LayoutService {
    useCasePolicyMode$: BehaviorSubject<boolean>;
    constructor();
    enableUcPolicyMode(): void;
    disableUcPolicyMode(): void;
    isUcPolicyModeActive(): Observable<boolean>;
}
