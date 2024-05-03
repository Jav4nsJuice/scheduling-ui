import { createReducer, on } from '@ngrx/store';
import { sidebarStructure } from '../../../shared/components/sidebar/sidebar-structure';
import { Menu, SubMenu } from '../../../shared/models/menu.model';
import * as SidebarActions from '../actions/sidebar.action';

export interface SidebarState {
  activeMenu: Menu;
  currentSidebarStructure: Menu[];
}

export const initialState: SidebarState = {
  activeMenu: {
    id: 'side-bar-home-page',
    label: 'Home',
    path: '/home',
    icon: 'home',
    isExpanded: true,
    submenus: [],
  },
  currentSidebarStructure: sidebarStructure[0].menus,
};

export const sidebarReducer = createReducer(
  initialState,
  on(SidebarActions.updateSidebar, (state, { menu, submenu }) => ({
    ...state,
    currentSidebarStructure: updateMenus(
      menu,
      submenu,
      state.currentSidebarStructure
    ),
  })),
  on(SidebarActions.setSidebarByUserRole, (state, { role }) => ({
    ...state,
    currentSidebarStructure: setSidebarCurrentStructure(state, role),
  }))
);

const updateMenus = (menu: Menu, submenu: SubMenu | undefined , currentSidebar: Menu[]) =>
  currentSidebar.map((menus) => {
    let submenus = menus.submenus;
    submenus = submenus.map((sub) => {
      if (submenu && sub.id === submenu.id) {
        return Object.assign({}, sub, submenu);
      } else {
        return Object.assign({}, sub, { isActive: false });
      }
    });
    let editedSubmenus = {
      submenus: submenus,
    };
    return menus.id !== menu.id
      ? Object.assign({}, menus, { isExpanded: false }, editedSubmenus)
      : Object.assign({}, menus, menu, editedSubmenus);
  });

const setSidebarCurrentStructure = (state: SidebarState, role: string) => {
    const menu = compareMenus(state.currentSidebarStructure);
    const currentSidebar = updateMenus(
        menu,
        menu.submenus[0],
        sidebarStructure[0].menus
    );
    return currentSidebar;
};

const compareMenus = (currentSidebar: Menu[]) => {
    return currentSidebar.find((menu) => menu.isExpanded) || currentSidebar[0];
};

export const sidebarCurrentStructure = (state: SidebarState) =>
    state.currentSidebarStructure;

export const activeMenu = (state: SidebarState) => state.activeMenu;
