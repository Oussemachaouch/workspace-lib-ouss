import { Observable } from 'rxjs';
/**
 * Singleton Loader Service used to change the state of the loader Subject
 */
export declare class PreviewerLoadingService {
    private loaderSubject;
    constructor();
    show(): void;
    hide(): void;
    getLoaderState(): Observable<boolean>;
}
