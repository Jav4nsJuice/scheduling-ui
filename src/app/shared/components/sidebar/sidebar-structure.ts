export const sidebarStructure = [
    {
      menus: [
        {
          id: 'side-bar-home-page',
          label: 'Home',
          path: '/home',
          icon: 'home',
          isExpanded: true,
          submenus: [],
        },
        {
          id: 'side-bar-table-page',
          label: 'Table',
          path: '/table',
          icon: 'group',
          isExpanded: false,
          submenus: [],
        },
        {
          id: 'side-bar-create',
          label: 'create-pages',
          path: null,
          icon: 'add',
          isExpanded: false,
          submenus: [
            {
              id: 'create-student',
              label: 'Create Student',
              path: '/create/student',
              isActive: false
            },
            {
              id: 'create-course',
              label: 'Create Course',
              path: '/create/course',
              isActive: false
            }
          ],
        }
      ],
    }
];
  