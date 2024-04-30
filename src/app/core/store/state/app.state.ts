import { NgModule } from '@angular/core';
import {
  ActionReducerMap,
  createFeatureSelector,
  StoreModule,
} from '@ngrx/store';
import { sidebarReducer, SidebarState } from '../reducers/sidebar.reducer';
import { studentReducer, StudentsState } from '../reducers/student.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from '../effects/student.effect';
import { courseReducer, CoursesState } from '../reducers/course.reducer';
import { CourseEffects } from '../effects/course.effect';

export const FEATURE_KEY = 'store';

export interface AppState {
    sidebar: SidebarState;
    student: StudentsState;
    course: CoursesState;
}

export const reducers: ActionReducerMap<any> = {
    sidebar: sidebarReducer,
    student: studentReducer,
    course: courseReducer,
};

@NgModule({
    imports: [
        StoreModule.forFeature(FEATURE_KEY, reducers),
        EffectsModule.forFeature([
            StudentEffects,
            CourseEffects,
        ]),
    ],
})
export class SchedulingStateModule {}

export const selectSharedAppState =
    createFeatureSelector<AppState>(FEATURE_KEY);
