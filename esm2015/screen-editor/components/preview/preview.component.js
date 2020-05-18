/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { Device } from '../../models/device';
export class PreviewComponent {
    constructor() {
        this.device = Device.DESKTOP;
        this.landscapeMode = false;
        this.desktopWidth = '100%';
        this.iframeLoaded$ = new Subject();
        this.unsubscribe = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.previewerManagement.dispatch(initPreviewer());
        /*this.previewerState$ = this.previewerManagement
          .select(getPreviewerState)
          .pipe(filter(Boolean));
    
        zip(
          this.previewerManagement
            .select(getWidgetsLibrariesModules)
            .pipe(filter(Boolean)),
          this.previewerManagement.select(getPreviewerUrl).pipe(filter(Boolean)),
          this.previewerManagement
            .select(getPreviewerThemeUrl)
            .pipe(filter(Boolean)),
          this.iframeLoaded$.asObservable()
        )
          .pipe(takeUntil(this.unsubscribe))
          .subscribe(([componentsLibraryModules, previewerUrl, themeUrl]) => {
            if (!this.iframe) {
              return;
            }
            this.previewerUrl = previewerUrl;
            this.themeUrl = themeUrl as string;
            this.widgetsModules = componentsLibraryModules as any[];
            this.iframe.nativeElement.contentWindow.postMessage(
              {
                themeUrl,
                widgetsModules: componentsLibraryModules
              },
              `${window.location.href}/${previewerUrl}`
            );
            this.setDeskTopWitdth('100%');
          });
    
        this.previewerManagement
          .select(getScreenToPreview)
          .pipe(
            withLatestFrom(this.previewerManagement.select(getPreviewerUrl)),
            takeUntil(this.unsubscribe)
          )
          .subscribe(([screenRenderResult, previewerUrl]) => {
            if (!this.iframe) {
              return;
            }
            if (screenRenderResult) {
              screenRenderResult.widgetsModules = this.widgetsModules;
              screenRenderResult.themeUrl = this.themeUrl;
              this.iframe.nativeElement.contentWindow.postMessage(
                screenRenderResult,
                `${window.location.href}/${previewerUrl}`
              );
            } else {
              this.iframe.nativeElement.contentWindow.postMessage(
                'NO_SCREEN',
                `${window.location.href}/${previewerUrl}`
              );
            }
            this.setDeskTopWitdth('1200px');
          });
    
        this.previewerManagement
          .select(getError)
          .pipe(
            filter(Boolean),
            withLatestFrom(this.previewerManagement.select(getPreviewerUrl)),
            takeUntil(this.unsubscribe)
          )
          .subscribe(([error, previewerUrl]) => {
            if (!this.iframe) {
              return;
            }
            this.iframe.nativeElement.contentWindow.postMessage(
              error,
              `${window.location.href}/${previewerUrl}`
            );
            this.setDeskTopWitdth('100%');
          });
    
        this.subscribeToHighlightComonent();
        // recieve messages from the previewer iframe
        this.registerMessageEventListener();
      }
    */
        /**
         * notify the previewer to highlight the selected
         * component
         */
        /*private subscribeToHighlightComonent() {
          this.propertiesManagement.select(getProperties).subscribe(property => {
            const componentName =
              property && property.scopeToUpdate
                ? kebabCase(property.data.name)
                : undefined;
            const parentName = property && kebabCase(property.parentName);
            if (this.iframe && this.iframe.nativeElement) {
              this.iframe.nativeElement.contentWindow.postMessage(
                { HIGHTLIGHT_COMPONENT: { name: componentName, parentName } },
                `${window.location.href}/${this.previewerUrl}`
              );
            }
          });
        }
      */
        /**
         * registers a method from the given sevice as a MessageEvent listener.
         * @param previwerService: PreviewerService
         */
        /*registerMessageEventListener(): void {
          const thisComponent = this;
          if (window.addEventListener) {
            // For standards-compliant web browsers
            window.addEventListener('message', e => {
              if (e.data && e.data.from === 'previewer') {
                if (e.data.widgetsLibrariesLoaded) {
                  thisComponent.previewerManagement.dispatch(
                    loadPreviewerLibrairiesSuccessfully()
                  );
                }
                if (e.data.renderingSuccess) {
                  thisComponent.previewerManagement.dispatch(
                    renderScreenClientSuccessfully()
                  );
                } else if (!e.data.renderingSuccess) {
                  thisComponent.previewerManagement.dispatch(
                    renderScreenClientFailed()
                  );
                }
              }
            });
          }
        }
      
        previewerFrameLoaded($event) {
          if (this.iframe) {
            this.iframeLoaded$.next();
            this.previewerManagement.dispatch(previewerLoadedSuccessfully());
          }
        }
      
        rotate() {
          this.landscapeMode = !this.landscapeMode;
        }
      
        getDeskTopWitdth() {
          return this.device === Device.DESKTOP ? this.desktopWidth : '100%';
        }
      
        setDeskTopWitdth(width) {
          this.desktopWidth = width;
        }
      
        ngOnDestroy(): void {
          if (this.unsubscribe) {
            this.unsubscribe.next();
            this.unsubscribe.complete();
          }*/
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
PreviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-preview',
                template: "<!--<div class=\"preview-screen\">\n  <div class=\"device\" [ngClass]=\"device\" [class.landscape]=\"landscapeMode\">\n    <div class=\"app-frame\">\n      <sc-previewer-loading></sc-previewer-loading>\n      <sc-status-bar *ngIf=\"device != 'desktop'\"></sc-status-bar>\n      <ng-container *ngIf=\"previewerState$ | async as previewerState\">\n        <iframe *ngIf=\"previewerState.initialized\" class=\"viewer\" #iframe cachedSrc=\"{{previewerState.routePath}}\"\n          (load)=\"previewerFrameLoaded($event)\" [style.min-width]=\"getDeskTopWitdth()\"></iframe>\n        <div *ngIf=\"!previewerState.initialized && !previewerState.loading\" class=\"viewer\">\n          <p class=\"viewer-err-msg\">\n            <i class=\"fa fa-exclamation-triangle\"> </i>Previewer is not\n            installed or can not be loaded\n          </p>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</div>-->\n<router-outlet></router-outlet>\n",
                styles: [".app-frame,.device.desktop,.no-preview,.preview-screen,.preview-screen .viewer,iframe{width:100%;height:100%;position:relative}.preview-screen .device.phone .viewer,.preview-screen .device.tablet .viewer{height:calc(100% - 20px)}.no-preview{background-color:#343a4063;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center}.devices .icon i{font-size:110px}.devices{display:-webkit-box;display:flex}.device-name{padding:5px 41px}.preview-screen .viewer{border:none}.device.phone .app-frame{height:600px;width:360px;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);-webkit-transition:.25s ease-out;transition:.25s ease-out;-webkit-transform-origin:center top 0;transform-origin:center top 0;margin-top:75px;margin-left:auto;margin-right:auto}.device.phone.landscape .app-frame{width:620px;height:355px;margin-top:16px}.device.tablet .app-frame{height:995px;width:776px;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);-webkit-transition:.25s ease-out;transition:.25s ease-out;-webkit-transform-origin:center top 0;transform-origin:center top 0;margin-top:81px;margin-left:auto;margin-right:auto}.device.tablet.landscape .app-frame{height:777px;width:1014px;margin-top:45px}.device.phone{height:770px;width:100%;overflow:hidden;-webkit-transition:.25s ease-out;transition:.25s ease-out;margin-top:30px;margin-bottom:30px;margin-left:0;background-repeat:no-repeat;background-position:50% 0;background-size:387px 765px}.device.phone.landscape{background-size:765px 387px;height:416px;min-width:863px;width:100%}.preview-screen .device.phone .viewer{border:1px solid #050405;border-radius:0 0 2px 2px;border-top:none}.device.tablet{height:1180px;width:100%;min-width:880px;overflow:hidden;-webkit-transition:ease-out;transition:ease-out;margin-top:30px;margin-bottom:30px;margin-left:0;background-repeat:no-repeat;background-position:50% 0;background-size:864px 1174px}.device.tablet.landscape{height:870px;width:1200px;background-size:1174px 864px}.preview-screen .device.tablet .viewer{border:1px solid #000;border-radius:0 0 2px 2px;border-top:none}.viewer .viewer-err-msg{text-align:center}.viewer-err-msg{color:#fb8c00;padding:10px;font-size:18px}.viewer-err-msg i{margin-right:10px}"]
            }] }
];
/** @nocollapse */
PreviewComponent.ctorParameters = () => [];
PreviewComponent.propDecorators = {
    device: [{ type: Input }],
    landscapeMode: [{ type: Input }],
    iframe: [{ type: ViewChild, args: ['iframe', { static: false },] }]
};
if (false) {
    /** @type {?} */
    PreviewComponent.prototype.device;
    /** @type {?} */
    PreviewComponent.prototype.landscapeMode;
    /** @type {?} */
    PreviewComponent.prototype.desktopWidth;
    /** @type {?} */
    PreviewComponent.prototype.iframe;
    /** @type {?} */
    PreviewComponent.prototype.previewerUrl;
    /**
     * @type {?}
     * @private
     */
    PreviewComponent.prototype.iframeLoaded$;
    /**
     * @type {?}
     * @private
     */
    PreviewComponent.prototype.unsubscribe;
    /** @type {?} */
    PreviewComponent.prototype.widgetsModules;
    /** @type {?} */
    PreviewComponent.prototype.themeUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvbXBvbmVudHMvcHJldmlldy9wcmV2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFFWCxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQWMsT0FBTyxFQUFPLE1BQU0sTUFBTSxDQUFDO0FBR2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVE3QyxNQUFNLE9BQU8sZ0JBQWdCO0lBa0IzQjtRQWhCQSxXQUFNLEdBQVcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUVoQyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixpQkFBWSxHQUFHLE1BQU0sQ0FBQztRQVFkLGtCQUFhLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDN0MsZ0JBQVcsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQU9oRCxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLHNEQUFzRDtRQUN0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFnRkY7UUFDQTs7O1dBR0c7UUFDSDs7Ozs7Ozs7Ozs7Ozs7O1FBZUE7UUFDQTs7O1dBR0c7UUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBZ0RLO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7SUFDWCxDQUFDOzs7WUEzTEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QiwrN0JBQXVDOzthQUV4Qzs7Ozs7cUJBRUUsS0FBSzs0QkFFTCxLQUFLO3FCQUlMLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBTnRDLGtDQUNnQzs7SUFDaEMseUNBQ3NCOztJQUN0Qix3Q0FBc0I7O0lBRXRCLGtDQUNtQjs7SUFHbkIsd0NBQWE7Ozs7O0lBRWIseUNBQXFEOzs7OztJQUNyRCx1Q0FBbUQ7O0lBQ25ELDBDQUFzQjs7SUFDdEIsb0NBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbCwgZmlsdGVyLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgemlwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBrZWJhYkNhc2UgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBEZXZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGV2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYy1wcmV2aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ByZXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcmV2aWV3LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcmV2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBkZXZpY2U6IERldmljZSA9IERldmljZS5ERVNLVE9QO1xuICBASW5wdXQoKVxuICBsYW5kc2NhcGVNb2RlID0gZmFsc2U7XG4gIGRlc2t0b3BXaWR0aCA9ICcxMDAlJztcblxuICBAVmlld0NoaWxkKCdpZnJhbWUnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgaWZyYW1lOiBFbGVtZW50UmVmO1xuXG4gIC8vIHByZXZpZXdlclN0YXRlJDogT2JzZXJ2YWJsZTxQcmV2aWV3ZXJTdGF0ZT47XG4gIHByZXZpZXdlclVybDtcblxuICBwcml2YXRlIGlmcmFtZUxvYWRlZCQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHVuc3Vic2NyaWJlOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcbiAgd2lkZ2V0c01vZHVsZXM6IGFueVtdO1xuICB0aGVtZVVybDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgLy8gcHJpdmF0ZSBwcm9wZXJ0aWVzTWFuYWdlbWVudDogU3RvcmU8UHJvcGVydGllc1N0YXRlPixcbiAgICAvLyBwcml2YXRlIHByZXZpZXdlck1hbmFnZW1lbnQ6IFN0b3JlPFByZXZpZXdlclN0YXRlPlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gdGhpcy5wcmV2aWV3ZXJNYW5hZ2VtZW50LmRpc3BhdGNoKGluaXRQcmV2aWV3ZXIoKSk7XG4gICAgLyp0aGlzLnByZXZpZXdlclN0YXRlJCA9IHRoaXMucHJldmlld2VyTWFuYWdlbWVudFxuICAgICAgLnNlbGVjdChnZXRQcmV2aWV3ZXJTdGF0ZSlcbiAgICAgIC5waXBlKGZpbHRlcihCb29sZWFuKSk7XG5cbiAgICB6aXAoXG4gICAgICB0aGlzLnByZXZpZXdlck1hbmFnZW1lbnRcbiAgICAgICAgLnNlbGVjdChnZXRXaWRnZXRzTGlicmFyaWVzTW9kdWxlcylcbiAgICAgICAgLnBpcGUoZmlsdGVyKEJvb2xlYW4pKSxcbiAgICAgIHRoaXMucHJldmlld2VyTWFuYWdlbWVudC5zZWxlY3QoZ2V0UHJldmlld2VyVXJsKS5waXBlKGZpbHRlcihCb29sZWFuKSksXG4gICAgICB0aGlzLnByZXZpZXdlck1hbmFnZW1lbnRcbiAgICAgICAgLnNlbGVjdChnZXRQcmV2aWV3ZXJUaGVtZVVybClcbiAgICAgICAgLnBpcGUoZmlsdGVyKEJvb2xlYW4pKSxcbiAgICAgIHRoaXMuaWZyYW1lTG9hZGVkJC5hc09ic2VydmFibGUoKVxuICAgIClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSlcbiAgICAgIC5zdWJzY3JpYmUoKFtjb21wb25lbnRzTGlicmFyeU1vZHVsZXMsIHByZXZpZXdlclVybCwgdGhlbWVVcmxdKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5pZnJhbWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmV2aWV3ZXJVcmwgPSBwcmV2aWV3ZXJVcmw7XG4gICAgICAgIHRoaXMudGhlbWVVcmwgPSB0aGVtZVVybCBhcyBzdHJpbmc7XG4gICAgICAgIHRoaXMud2lkZ2V0c01vZHVsZXMgPSBjb21wb25lbnRzTGlicmFyeU1vZHVsZXMgYXMgYW55W107XG4gICAgICAgIHRoaXMuaWZyYW1lLm5hdGl2ZUVsZW1lbnQuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGVtZVVybCxcbiAgICAgICAgICAgIHdpZGdldHNNb2R1bGVzOiBjb21wb25lbnRzTGlicmFyeU1vZHVsZXNcbiAgICAgICAgICB9LFxuICAgICAgICAgIGAke3dpbmRvdy5sb2NhdGlvbi5ocmVmfS8ke3ByZXZpZXdlclVybH1gXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0RGVza1RvcFdpdGR0aCgnMTAwJScpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLnByZXZpZXdlck1hbmFnZW1lbnRcbiAgICAgIC5zZWxlY3QoZ2V0U2NyZWVuVG9QcmV2aWV3KVxuICAgICAgLnBpcGUoXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMucHJldmlld2VyTWFuYWdlbWVudC5zZWxlY3QoZ2V0UHJldmlld2VyVXJsKSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoW3NjcmVlblJlbmRlclJlc3VsdCwgcHJldmlld2VyVXJsXSkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaWZyYW1lKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzY3JlZW5SZW5kZXJSZXN1bHQpIHtcbiAgICAgICAgICBzY3JlZW5SZW5kZXJSZXN1bHQud2lkZ2V0c01vZHVsZXMgPSB0aGlzLndpZGdldHNNb2R1bGVzO1xuICAgICAgICAgIHNjcmVlblJlbmRlclJlc3VsdC50aGVtZVVybCA9IHRoaXMudGhlbWVVcmw7XG4gICAgICAgICAgdGhpcy5pZnJhbWUubmF0aXZlRWxlbWVudC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICAgICAgc2NyZWVuUmVuZGVyUmVzdWx0LFxuICAgICAgICAgICAgYCR7d2luZG93LmxvY2F0aW9uLmhyZWZ9LyR7cHJldmlld2VyVXJsfWBcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaWZyYW1lLm5hdGl2ZUVsZW1lbnQuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgICAgICAgICdOT19TQ1JFRU4nLFxuICAgICAgICAgICAgYCR7d2luZG93LmxvY2F0aW9uLmhyZWZ9LyR7cHJldmlld2VyVXJsfWBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RGVza1RvcFdpdGR0aCgnMTIwMHB4Jyk7XG4gICAgICB9KTtcblxuICAgIHRoaXMucHJldmlld2VyTWFuYWdlbWVudFxuICAgICAgLnNlbGVjdChnZXRFcnJvcilcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMucHJldmlld2VyTWFuYWdlbWVudC5zZWxlY3QoZ2V0UHJldmlld2VyVXJsKSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoW2Vycm9yLCBwcmV2aWV3ZXJVcmxdKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5pZnJhbWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pZnJhbWUubmF0aXZlRWxlbWVudC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICAgIGVycm9yLFxuICAgICAgICAgIGAke3dpbmRvdy5sb2NhdGlvbi5ocmVmfS8ke3ByZXZpZXdlclVybH1gXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0RGVza1RvcFdpdGR0aCgnMTAwJScpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLnN1YnNjcmliZVRvSGlnaGxpZ2h0Q29tb25lbnQoKTtcbiAgICAvLyByZWNpZXZlIG1lc3NhZ2VzIGZyb20gdGhlIHByZXZpZXdlciBpZnJhbWVcbiAgICB0aGlzLnJlZ2lzdGVyTWVzc2FnZUV2ZW50TGlzdGVuZXIoKTtcbiAgfVxuKi9cbiAgLyoqXG4gICAqIG5vdGlmeSB0aGUgcHJldmlld2VyIHRvIGhpZ2hsaWdodCB0aGUgc2VsZWN0ZWRcbiAgICogY29tcG9uZW50XG4gICAqL1xuICAvKnByaXZhdGUgc3Vic2NyaWJlVG9IaWdobGlnaHRDb21vbmVudCgpIHtcbiAgICB0aGlzLnByb3BlcnRpZXNNYW5hZ2VtZW50LnNlbGVjdChnZXRQcm9wZXJ0aWVzKS5zdWJzY3JpYmUocHJvcGVydHkgPT4ge1xuICAgICAgY29uc3QgY29tcG9uZW50TmFtZSA9XG4gICAgICAgIHByb3BlcnR5ICYmIHByb3BlcnR5LnNjb3BlVG9VcGRhdGVcbiAgICAgICAgICA/IGtlYmFiQ2FzZShwcm9wZXJ0eS5kYXRhLm5hbWUpXG4gICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICBjb25zdCBwYXJlbnROYW1lID0gcHJvcGVydHkgJiYga2ViYWJDYXNlKHByb3BlcnR5LnBhcmVudE5hbWUpO1xuICAgICAgaWYgKHRoaXMuaWZyYW1lICYmIHRoaXMuaWZyYW1lLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5pZnJhbWUubmF0aXZlRWxlbWVudC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICAgIHsgSElHSFRMSUdIVF9DT01QT05FTlQ6IHsgbmFtZTogY29tcG9uZW50TmFtZSwgcGFyZW50TmFtZSB9IH0sXG4gICAgICAgICAgYCR7d2luZG93LmxvY2F0aW9uLmhyZWZ9LyR7dGhpcy5wcmV2aWV3ZXJVcmx9YFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4qL1xuICAvKipcbiAgICogcmVnaXN0ZXJzIGEgbWV0aG9kIGZyb20gdGhlIGdpdmVuIHNldmljZSBhcyBhIE1lc3NhZ2VFdmVudCBsaXN0ZW5lci5cbiAgICogQHBhcmFtIHByZXZpd2VyU2VydmljZTogUHJldmlld2VyU2VydmljZVxuICAgKi9cbiAgLypyZWdpc3Rlck1lc3NhZ2VFdmVudExpc3RlbmVyKCk6IHZvaWQge1xuICAgIGNvbnN0IHRoaXNDb21wb25lbnQgPSB0aGlzO1xuICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgLy8gRm9yIHN0YW5kYXJkcy1jb21wbGlhbnQgd2ViIGJyb3dzZXJzXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGUgPT4ge1xuICAgICAgICBpZiAoZS5kYXRhICYmIGUuZGF0YS5mcm9tID09PSAncHJldmlld2VyJykge1xuICAgICAgICAgIGlmIChlLmRhdGEud2lkZ2V0c0xpYnJhcmllc0xvYWRlZCkge1xuICAgICAgICAgICAgdGhpc0NvbXBvbmVudC5wcmV2aWV3ZXJNYW5hZ2VtZW50LmRpc3BhdGNoKFxuICAgICAgICAgICAgICBsb2FkUHJldmlld2VyTGlicmFpcmllc1N1Y2Nlc3NmdWxseSgpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZS5kYXRhLnJlbmRlcmluZ1N1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXNDb21wb25lbnQucHJldmlld2VyTWFuYWdlbWVudC5kaXNwYXRjaChcbiAgICAgICAgICAgICAgcmVuZGVyU2NyZWVuQ2xpZW50U3VjY2Vzc2Z1bGx5KClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIGlmICghZS5kYXRhLnJlbmRlcmluZ1N1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXNDb21wb25lbnQucHJldmlld2VyTWFuYWdlbWVudC5kaXNwYXRjaChcbiAgICAgICAgICAgICAgcmVuZGVyU2NyZWVuQ2xpZW50RmFpbGVkKClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcmV2aWV3ZXJGcmFtZUxvYWRlZCgkZXZlbnQpIHtcbiAgICBpZiAodGhpcy5pZnJhbWUpIHtcbiAgICAgIHRoaXMuaWZyYW1lTG9hZGVkJC5uZXh0KCk7XG4gICAgICB0aGlzLnByZXZpZXdlck1hbmFnZW1lbnQuZGlzcGF0Y2gocHJldmlld2VyTG9hZGVkU3VjY2Vzc2Z1bGx5KCkpO1xuICAgIH1cbiAgfVxuXG4gIHJvdGF0ZSgpIHtcbiAgICB0aGlzLmxhbmRzY2FwZU1vZGUgPSAhdGhpcy5sYW5kc2NhcGVNb2RlO1xuICB9XG5cbiAgZ2V0RGVza1RvcFdpdGR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXZpY2UgPT09IERldmljZS5ERVNLVE9QID8gdGhpcy5kZXNrdG9wV2lkdGggOiAnMTAwJSc7XG4gIH1cblxuICBzZXREZXNrVG9wV2l0ZHRoKHdpZHRoKSB7XG4gICAgdGhpcy5kZXNrdG9wV2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlLm5leHQoKTtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUuY29tcGxldGUoKTtcbiAgICB9Ki9cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICB9XG59XG4iXX0=