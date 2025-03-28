export const sideOptions = [
  {
    label: 'Home',
    icon: '🏠',
    route: 'home',
    isCollapsed: true,
    subItems: [{ item: 'Dashboard', route: 'home/dashboard' }],
  },
  {
    label: 'Documents',
    icon: '📄',
    route: 'document',
    isCollapsed: true,
    subItems: [{ item: 'Sales Report', route: 'document/sales' }],
  },
  {
    label: 'Settings',
    icon: '⚙️',
    route: 'settings',
    isCollapsed: true,
    subItems: [
      { item: 'Items', route: 'settings/items' },
      { item: 'Company Profile', route: 'settings/profile' },
    ],
  },
];
