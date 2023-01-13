export const MENULIST = [
  {
    title: 'Dashboard',
    iconName: 'dashboard',
    link: '/dashboard',
    child: [],
  },
  {
    title: 'List Curriculum',
    iconName: 'view_list',
    link: '/list-curriculum',
    child: [],
  },
  {
    title: 'Credit Allocation Schema',
    iconName: 'tune',
    link: '/cas',
    child: [],
  },
  {
    title: 'Master Management',
    iconName: 'tune',
    link: '/cas',
    child: [
      {
        title: 'Role Management',
        iconName: null,
        link: '/role-management',
      },
      {
        title: 'User Management',
        iconName: null,
        link: '/user-management',
      },
    ],
  },
  {
    title: 'Curriculum Development',
    iconName: 'developer_board',
    link: '/curriculum-development',
    child: [
      {
        title: 'Curriculum Review Form',
        iconName: null,
        link: '/phase-0',
      },
      {
        title: 'Phase 1',
        iconName: null,
        link: '/phase-1',
      },
      {
        title: 'Phase 2',
        iconName: null,
        link: '/phase-2',
      },
      {
        title: 'Phase 3',
        iconName: null,
        link: '/phase-3',
      },
      {
        title: 'Phase 4',
        iconName: null,
        link: '/phase-4',
      },
    ],
  },
  {
    title: 'Report Curriculum',
    iconName: 'summarize',
    link: '/report',
    child: [],
  },
];
