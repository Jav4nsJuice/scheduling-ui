import { NgModule } from '@angular/core';
import {
  ActionReducerMap,
  createFeatureSelector,
  StoreModule,
} from '@ngrx/store';
import { sidebarReducer, SidebarState } from '../reducers/sidebar.reducer';

export const FEATURE_KEY = 'store';

export interface AppState {
    sidebar: SidebarState;
}

export const reducers: ActionReducerMap<any> = {
    sidebar: sidebarReducer,
};

@NgModule({
    imports: [
        StoreModule.forFeature(FEATURE_KEY, reducers),
    ],
})
export class SchedulingStateModule {}

export const selectSharedAppState =
    createFeatureSelector<AppState>(FEATURE_KEY);
