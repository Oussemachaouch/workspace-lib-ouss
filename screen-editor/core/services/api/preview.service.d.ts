import { HttpClient } from '@angular/common/http';
import { IdeMessageService } from '@palmyra-devkit/core-api/client/messages';
import { PreviewStore } from '../../store';
import { PreviewerLoadingService } from '../../loading/services/previewer-loading.service';
export declare class PreviewService {
    private http;
    private previewStore;
    private slidingMessageService;
    private previewerLodingService;
    private init$;
    constructor(http: HttpClient, previewStore: PreviewStore, slidingMessageService: IdeMessageService, previewerLodingService: PreviewerLoadingService);
}
export interface View {
    html?: string;
    componentsLibraryModules?: any;
    error?: string;
}
