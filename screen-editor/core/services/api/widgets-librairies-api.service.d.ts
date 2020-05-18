import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WidgetsLibraryModel } from '../../../models/widgets-library/model';
export declare class WidgetsLibrairiesAPIService {
    private http;
    private api;
    constructor(http: HttpClient, api: string);
    /**
     * Get the component library
     * return a multi casting Replay subject
     */
    getAllWidgetsLibraries(): Observable<Array<WidgetsLibraryModel>>;
}
