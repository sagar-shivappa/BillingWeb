export const sideOptions = [
  {
    label: 'Home',
    icon: 'bi bi-house-heart',
    route: 'home',
    isCollapsed: true,
    subItems: [{ item: 'Dashboard', route: 'home/dashboard' }],
  },

  {
    label: 'Settings',
    icon: 'bi bi-gear',
    route: 'settings',
    isCollapsed: true,
    subItems: [
      { item: 'Items', route: 'settings/items' },
      { item: 'Company Profile', route: 'settings/profile' },
    ],
  },
  {
    label: 'Documents',
    icon: 'bi bi-file-earmark-person',
    route: 'document',
    isCollapsed: true,
    subItems: [{ item: 'Sales Report', route: 'document/sales' }],
  },
];
