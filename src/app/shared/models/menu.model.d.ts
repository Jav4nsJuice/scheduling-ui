export type Menu = {
    id: string;
    label: string;
    path: string | null;
    icon: string;
    isExpanded: boolean;
    submenus: SubMenu[];
  }
  
  export type SubMenu = {
    id: string;
    label: string;
    path: string | null;
    isActive: boolean;
  }
  