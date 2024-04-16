import { User, ROLES } from './02-enum';
const currentUser: User = {
  username: 'jpa',
  role: ROLES.COSTUMER,
};

export const checkAdminRole = () => {
  if (currentUser.role == ROLES.ADMIN) {
    return true;
  }
  return false;
};

const rta = checkAdminRole();
console.log('checkAdminRole', rta);

export const checkRole = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

const rta2 = checkRole(ROLES.ADMIN, ROLES.ADMIN);
console.log('checkRole', rta2);
