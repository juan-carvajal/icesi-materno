interface MenuItem {
  icon: string;
  label: string;
  separator: boolean;
  to: string;
  requiredPermissions?: Array<string>;
}

export const menuList: Array<MenuItem> = [
  {
    icon: 'cases',
    label: 'Casos',
    separator: true,
    to: '/cases',
    requiredPermissions: ['cases.read'],
  },
  {
    icon: 'podcasts',
    label: 'Podcasts',
    separator: true,
    to: '/podcast',
    requiredPermissions: ['podcasts.read'],
  },
  {
    icon: 'warning',
    label: 'Alertas',
    separator: true,
    to: '/alerts',
    requiredPermissions: ['alerts.read'],
  },
  {
    icon: 'verified',
    label: 'Permisos',
    separator: true,
    to: '/admin/permissions',
    requiredPermissions: ['admin'],
  },
  {
    icon: 'supervised_user_circle',
    label: 'Roles',
    separator: true,
    to: '/admin/user-roles',
    requiredPermissions: ['admin'],
  },
  {
    icon: 'how_to_reg',
    label: 'Registrar Usuarios',
    separator: true,
    to: '/register-user',
    requiredPermissions: ['users.write'],
  },
  {
    icon: 'question_answer',
    label: 'Mensajes',
    separator: true,
    to: '/messages',
  },
  {
    icon: 'person',
    label: 'Mi perfil',
    separator: true,
    to: '/profile',
  },
];
