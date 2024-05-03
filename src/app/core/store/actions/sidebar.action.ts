import { createAction, props } from '@ngrx/store';
import { Menu, SubMenu } from '../../../shared/models/menu.model';

export const expandSidebar = createAction('[Sidebar Action] Expand sidebar');

export const updateSidebar = createAction(
  '[Sidebar Action] Select new menu',
  props<{ menu: Menu; submenu: SubMenu }>()
);

export const setSidebarByUserRole = createAction(
  '[Sidebar Action] Set sidebar',
  props<{ role: string }>()
);
