/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import { WorkspaceClientApi } from '@palmyra-devkit/core-api/client';
/** @type {?} */
const API_BASE_PATH = '/api';
export class WorkspaceClientApiImpl extends WorkspaceClientApi {
    /**
     * @param {?} http
     */
    constructor(http) {
        super();
        this.http = http;
    }
    /**
     * @return {?}
     */
    getCurrentProjectInfo() {
        if (this.shareProjectWithReplay) {
            return this.shareProjectWithReplay;
        }
        else {
            this.shareProjectWithReplay = new ReplaySubject();
            return this.http
                .get(`${API_BASE_PATH}/workspace/project/info`)
                .pipe(tap((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                this.shareProjectWithReplay.next(data);
            })));
            // shareReplay
        }
    }
    /**
     * @return {?}
     */
    getServices() {
        return this.http.get(`${API_BASE_PATH}/workspace/services`);
    }
    /**
     * @return {?}
     */
    getModels() {
        return this.http.get(`${API_BASE_PATH}/workspace/models`);
    }
    /**
     * @param {?} featureName
     * @return {?}
     */
    getModel(featureName) {
        if (featureName === undefined ||
            featureName === null ||
            featureName === '') {
            throw new Error('Required parameter featureName was empty, null or undefined.');
        }
        return this.http
            .get(`${API_BASE_PATH}/workspace/models/${featureName}`)
            .pipe(shareReplay());
    }
    /**
     * @return {?}
     */
    getAllFeatures() {
        return this.http.get(`${API_BASE_PATH}/workspace/features/all`);
    }
    /**
     * @param {?} featureName
     * @return {?}
     */
    getFeature(featureName) {
        if (featureName === undefined ||
            featureName === null ||
            featureName === '') {
            throw new Error('Required parameter featureName was empty, null or undefined.');
        }
        return this.http.get(`${API_BASE_PATH}/workspace/features/${featureName}`);
    }
    /**
     * @return {?}
     */
    getAllScreens() {
        return this.http.get(`${API_BASE_PATH}/workspace/screens/all`);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getPage(name) {
        return undefined;
    }
    /**
     * @return {?}
     */
    getAllPages() {
        /*const data = [
          {
            label: 'Dashboard',
            name: 'Dashboard',
            template: 'page',
            routePath: '/dashboard',
            expandedIcon: 'fa fa-folder-open',
            collapsedIcon: 'fa fa-file',
            content: {
              name: 'Dashboard',
              template: 'page',
              components: [
                {
                  name: 'updatorUserId',
                  type: 'Label',
                  properties: {
                    readOnly: true,
                    label: 'updatorUserId',
                    wordSize: 0,
                    mandatory: false,
                    showLabel: true
                  }
                },
                {
                  name: 'updateDate',
                  type: 'Label',
                  properties: {
                    readOnly: true,
                    label: 'updateDate',
                    wordSize: 0,
                    mandatory: false,
                    showLabel: true
                  }
                },
                {
                  name: 'creatorUserId',
                  type: 'Label',
                  properties: {
                    readOnly: true,
                    label: 'creatorUserId',
                    wordSize: 0,
                    mandatory: false,
                    showLabel: true
                  }
                },
                {
                  name: 'creationDate',
                  type: 'Label',
                  properties: {
                    readOnly: true,
                    label: 'creationDate',
                    wordSize: 0,
                    mandatory: false,
                    showLabel: true
                  }
                }
              ]
            }
          },
          {
            label: 'Data Visualization',
            name: 'Data Visualization',
            template: 'page',
            routePath: '/data-visualization',
            expandedIcon: 'fa fa-folder-open',
            collapsedIcon: 'fa fa-file'
          },
          {
            label: 'Currency exchange',
            name: 'Currency exchange',
            template: 'page',
            routePath: '/currency',
            expandedIcon: 'fa fa-file',
            collapsedIcon: 'fa fa-file'
          }
        ];*/
        return this.http.get(`${API_BASE_PATH}/workspace/pages/all`);
    }
}
WorkspaceClientApiImpl.decorators = [
    { type: Injectable }
];
/** @nocollapse */
WorkspaceClientApiImpl.ctorParameters = () => [
    { type: HttpClient }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    WorkspaceClientApiImpl.prototype.shareProjectWithReplay;
    /**
     * @type {?}
     * @private
     */
    WorkspaceClientApiImpl.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlLmNsaWVudC5hcGkuaW1wbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbImZha2UtYmFja2VuZC9tb2NrZWQtYXBpLWltcGwvd29ya3NwYWNlLmNsaWVudC5hcGkuaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBVWxELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztNQUUvRCxhQUFhLEdBQUcsTUFBTTtBQUc1QixNQUFNLE9BQU8sc0JBQXVCLFNBQVEsa0JBQWtCOzs7O0lBRTVELFlBQW9CLElBQWdCO1FBQ2xDLEtBQUssRUFBRSxDQUFDO1FBRFUsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUVwQyxDQUFDOzs7O0lBRUQscUJBQXFCO1FBQ25CLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDO2FBQU07WUFDTCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxhQUFhLEVBQVcsQ0FBQztZQUMzRCxPQUFPLElBQUksQ0FBQyxJQUFJO2lCQUNiLEdBQUcsQ0FBVSxHQUFHLGFBQWEseUJBQXlCLENBQUM7aUJBQ3ZELElBQUksQ0FDSCxHQUFHOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxDQUFDLEVBQUMsQ0FDSCxDQUFDO1lBQ0osY0FBYztTQUNmO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFZLEdBQUcsYUFBYSxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVyxHQUFHLGFBQWEsbUJBQW1CLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxXQUFtQjtRQUMxQixJQUNFLFdBQVcsS0FBSyxTQUFTO1lBQ3pCLFdBQVcsS0FBSyxJQUFJO1lBQ3BCLFdBQVcsS0FBSyxFQUFFLEVBQ2xCO1lBQ0EsTUFBTSxJQUFJLEtBQUssQ0FDYiw4REFBOEQsQ0FDL0QsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBUyxHQUFHLGFBQWEscUJBQXFCLFdBQVcsRUFBRSxDQUFDO2FBQy9ELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBWSxHQUFHLGFBQWEseUJBQXlCLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7OztJQUNELFVBQVUsQ0FBQyxXQUFtQjtRQUM1QixJQUNFLFdBQVcsS0FBSyxTQUFTO1lBQ3pCLFdBQVcsS0FBSyxJQUFJO1lBQ3BCLFdBQVcsS0FBSyxFQUFFLEVBQ2xCO1lBQ0EsTUFBTSxJQUFJLEtBQUssQ0FDYiw4REFBOEQsQ0FDL0QsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsR0FBRyxhQUFhLHVCQUF1QixXQUFXLEVBQUUsQ0FDckQsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVyxHQUFHLGFBQWEsd0JBQXdCLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxJQUFZO1FBQ2xCLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTJFSTtRQUNKLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVMsR0FBRyxhQUFhLHNCQUFzQixDQUFDLENBQUM7SUFDdkUsQ0FBQzs7O1lBdEpGLFVBQVU7Ozs7WUFoQkYsVUFBVTs7Ozs7OztJQWtCakIsd0RBQXVEOzs7OztJQUMzQyxzQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwLCBzaGFyZVJlcGxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgRW50aXR5LFxuICBTZXJ2aWNlLFxuICBGZWF0dXJlLFxuICBQcm9qZWN0LFxuICBTY3JlZW4sXG4gIFBhZ2Vcbn0gZnJvbSAnQHBhbG15cmEtZGV2a2l0L2NvcmUtYXBpL3NoYXJlZCc7XG5pbXBvcnQgeyBXb3Jrc3BhY2VDbGllbnRBcGkgfSBmcm9tICdAcGFsbXlyYS1kZXZraXQvY29yZS1hcGkvY2xpZW50JztcblxuY29uc3QgQVBJX0JBU0VfUEFUSCA9ICcvYXBpJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdvcmtzcGFjZUNsaWVudEFwaUltcGwgZXh0ZW5kcyBXb3Jrc3BhY2VDbGllbnRBcGkge1xuICBwcml2YXRlIHNoYXJlUHJvamVjdFdpdGhSZXBsYXk6IFJlcGxheVN1YmplY3Q8UHJvamVjdD47XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBnZXRDdXJyZW50UHJvamVjdEluZm8oKTogT2JzZXJ2YWJsZTxQcm9qZWN0PiB7XG4gICAgaWYgKHRoaXMuc2hhcmVQcm9qZWN0V2l0aFJlcGxheSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2hhcmVQcm9qZWN0V2l0aFJlcGxheTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaGFyZVByb2plY3RXaXRoUmVwbGF5ID0gbmV3IFJlcGxheVN1YmplY3Q8UHJvamVjdD4oKTtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgLmdldDxQcm9qZWN0PihgJHtBUElfQkFTRV9QQVRIfS93b3Jrc3BhY2UvcHJvamVjdC9pbmZvYClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaGFyZVByb2plY3RXaXRoUmVwbGF5Lm5leHQoZGF0YSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIC8vIHNoYXJlUmVwbGF5XG4gICAgfVxuICB9XG5cbiAgZ2V0U2VydmljZXMoKTogT2JzZXJ2YWJsZTxTZXJ2aWNlW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxTZXJ2aWNlW10+KGAke0FQSV9CQVNFX1BBVEh9L3dvcmtzcGFjZS9zZXJ2aWNlc2ApO1xuICB9XG5cbiAgZ2V0TW9kZWxzKCk6IE9ic2VydmFibGU8RW50aXR5W10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxFbnRpdHlbXT4oYCR7QVBJX0JBU0VfUEFUSH0vd29ya3NwYWNlL21vZGVsc2ApO1xuICB9XG5cbiAgZ2V0TW9kZWwoZmVhdHVyZU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8RW50aXR5PiB7XG4gICAgaWYgKFxuICAgICAgZmVhdHVyZU5hbWUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgZmVhdHVyZU5hbWUgPT09IG51bGwgfHxcbiAgICAgIGZlYXR1cmVOYW1lID09PSAnJ1xuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnUmVxdWlyZWQgcGFyYW1ldGVyIGZlYXR1cmVOYW1lIHdhcyBlbXB0eSwgbnVsbCBvciB1bmRlZmluZWQuJ1xuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxFbnRpdHk+KGAke0FQSV9CQVNFX1BBVEh9L3dvcmtzcGFjZS9tb2RlbHMvJHtmZWF0dXJlTmFtZX1gKVxuICAgICAgLnBpcGUoc2hhcmVSZXBsYXkoKSk7XG4gIH1cblxuICBnZXRBbGxGZWF0dXJlcygpOiBPYnNlcnZhYmxlPEZlYXR1cmVbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEZlYXR1cmVbXT4oYCR7QVBJX0JBU0VfUEFUSH0vd29ya3NwYWNlL2ZlYXR1cmVzL2FsbGApO1xuICB9XG4gIGdldEZlYXR1cmUoZmVhdHVyZU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8RmVhdHVyZT4ge1xuICAgIGlmIChcbiAgICAgIGZlYXR1cmVOYW1lID09PSB1bmRlZmluZWQgfHxcbiAgICAgIGZlYXR1cmVOYW1lID09PSBudWxsIHx8XG4gICAgICBmZWF0dXJlTmFtZSA9PT0gJydcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1JlcXVpcmVkIHBhcmFtZXRlciBmZWF0dXJlTmFtZSB3YXMgZW1wdHksIG51bGwgb3IgdW5kZWZpbmVkLidcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEZlYXR1cmU+KFxuICAgICAgYCR7QVBJX0JBU0VfUEFUSH0vd29ya3NwYWNlL2ZlYXR1cmVzLyR7ZmVhdHVyZU5hbWV9YFxuICAgICk7XG4gIH1cblxuICBnZXRBbGxTY3JlZW5zKCk6IE9ic2VydmFibGU8U2NyZWVuW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxTY3JlZW5bXT4oYCR7QVBJX0JBU0VfUEFUSH0vd29ya3NwYWNlL3NjcmVlbnMvYWxsYCk7XG4gIH1cblxuICBnZXRQYWdlKG5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8UGFnZT4ge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRBbGxQYWdlcygpOiBPYnNlcnZhYmxlPFBhZ2VbXT4ge1xuICAgIC8qY29uc3QgZGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdEYXNoYm9hcmQnLFxuICAgICAgICBuYW1lOiAnRGFzaGJvYXJkJyxcbiAgICAgICAgdGVtcGxhdGU6ICdwYWdlJyxcbiAgICAgICAgcm91dGVQYXRoOiAnL2Rhc2hib2FyZCcsXG4gICAgICAgIGV4cGFuZGVkSWNvbjogJ2ZhIGZhLWZvbGRlci1vcGVuJyxcbiAgICAgICAgY29sbGFwc2VkSWNvbjogJ2ZhIGZhLWZpbGUnLFxuICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgbmFtZTogJ0Rhc2hib2FyZCcsXG4gICAgICAgICAgdGVtcGxhdGU6ICdwYWdlJyxcbiAgICAgICAgICBjb21wb25lbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICd1cGRhdG9yVXNlcklkJyxcbiAgICAgICAgICAgICAgdHlwZTogJ0xhYmVsJyxcbiAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAndXBkYXRvclVzZXJJZCcsXG4gICAgICAgICAgICAgICAgd29yZFNpemU6IDAsXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93TGFiZWw6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3VwZGF0ZURhdGUnLFxuICAgICAgICAgICAgICB0eXBlOiAnTGFiZWwnLFxuICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICd1cGRhdGVEYXRlJyxcbiAgICAgICAgICAgICAgICB3b3JkU2l6ZTogMCxcbiAgICAgICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dMYWJlbDogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnY3JlYXRvclVzZXJJZCcsXG4gICAgICAgICAgICAgIHR5cGU6ICdMYWJlbCcsXG4gICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ2NyZWF0b3JVc2VySWQnLFxuICAgICAgICAgICAgICAgIHdvcmRTaXplOiAwLFxuICAgICAgICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0xhYmVsOiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdjcmVhdGlvbkRhdGUnLFxuICAgICAgICAgICAgICB0eXBlOiAnTGFiZWwnLFxuICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdjcmVhdGlvbkRhdGUnLFxuICAgICAgICAgICAgICAgIHdvcmRTaXplOiAwLFxuICAgICAgICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0xhYmVsOiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnRGF0YSBWaXN1YWxpemF0aW9uJyxcbiAgICAgICAgbmFtZTogJ0RhdGEgVmlzdWFsaXphdGlvbicsXG4gICAgICAgIHRlbXBsYXRlOiAncGFnZScsXG4gICAgICAgIHJvdXRlUGF0aDogJy9kYXRhLXZpc3VhbGl6YXRpb24nLFxuICAgICAgICBleHBhbmRlZEljb246ICdmYSBmYS1mb2xkZXItb3BlbicsXG4gICAgICAgIGNvbGxhcHNlZEljb246ICdmYSBmYS1maWxlJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdDdXJyZW5jeSBleGNoYW5nZScsXG4gICAgICAgIG5hbWU6ICdDdXJyZW5jeSBleGNoYW5nZScsXG4gICAgICAgIHRlbXBsYXRlOiAncGFnZScsXG4gICAgICAgIHJvdXRlUGF0aDogJy9jdXJyZW5jeScsXG4gICAgICAgIGV4cGFuZGVkSWNvbjogJ2ZhIGZhLWZpbGUnLFxuICAgICAgICBjb2xsYXBzZWRJY29uOiAnZmEgZmEtZmlsZSdcbiAgICAgIH1cbiAgICBdOyovXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UGFnZVtdPihgJHtBUElfQkFTRV9QQVRIfS93b3Jrc3BhY2UvcGFnZXMvYWxsYCk7XG4gIH1cbn1cbiJdfQ==