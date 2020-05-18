import { Observable } from 'rxjs';
import { PreviewStore } from '../../../core/store';
export declare class Navigator {
    private previwerStore;
    private view$;
    constructor(previwerStore: PreviewStore);
    view(): Observable<string>;
    goToScreenExplorer(): void;
    goToPageExplorer(): void;
    goToFeatureExplorer(): void;
}
