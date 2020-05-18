import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entity, Service, Feature, Project, Screen, Page } from '@palmyra-devkit/core-api/shared';
import { WorkspaceClientApi } from '@palmyra-devkit/core-api/client';
export declare class WorkspaceClientApiImpl extends WorkspaceClientApi {
    private http;
    private shareProjectWithReplay;
    constructor(http: HttpClient);
    getCurrentProjectInfo(): Observable<Project>;
    getServices(): Observable<Service[]>;
    getModels(): Observable<Entity[]>;
    getModel(featureName: string): Observable<Entity>;
    getAllFeatures(): Observable<Feature[]>;
    getFeature(featureName: string): Observable<Feature>;
    getAllScreens(): Observable<Screen[]>;
    getPage(name: string): Observable<Page>;
    getAllPages(): Observable<Page[]>;
}
