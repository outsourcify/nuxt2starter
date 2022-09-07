/**
 * All Routes object
 *
 * key: menu key (vue router key)
 * label: menu label
 * icon: menu icon name for <a-icon /> component
 */
export const adminUserRoutes = [
  {
    key: 'index',
    label: 'Dashboard',
    disabled: false,
    icon: 'dashboard',
  }
]

export default {
  ADMIN_USER_ROLE: adminUserRoutes,
}
