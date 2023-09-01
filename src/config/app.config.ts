interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Chef'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View available restaurants',
    'View restaurant menus',
    'Make a table reservation',
    'Update or cancel table reservation',
  ],
  ownerAbilities: [
    'Manage restaurant details',
    'Invite chefs to restaurant',
    'Manage restaurant tables',
    'Create new restaurant',
  ],
};
