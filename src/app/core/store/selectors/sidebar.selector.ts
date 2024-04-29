import { createSelector } from '@ngrx/store';
import { selectSharedAppState } from '../state/app.state';
import * as fromSidebar from '../reducers/sidebar.reducer';

export const selectSidebarState = createSelector(
  selectSharedAppState,
  (selectSharedAppState) => selectSharedAppState.sidebar
);

export const selectActiveMenu = createSelector(
  selectSidebarState,
  fromSidebar.activeMenu
);

export const selectCurrentStructure = createSelector(
  selectSidebarState,
  fromSidebar.sidebarCurrentStructure
);
