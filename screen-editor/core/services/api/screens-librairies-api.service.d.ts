import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScreensLibraryModel } from '../../../models/screens-library/model';
export declare class ScreensLibrairiesAPIService {
    private http;
    private api;
    constructor(http: HttpClient, api: string);
    /**
     * Get the template library
     * return a multi casting Replay subject
     */
    getAllScreensLibrairies(): Observable<Array<ScreensLibraryModel>>;
}
