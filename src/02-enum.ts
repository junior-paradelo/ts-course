enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  COSTUMER = 'costumer',
}

type User = {
  username: string;
  role: ROLES;
};

const myUser: User = {
  username: 'juniorparadelo',
  role: ROLES.ADMIN,
};

console.log(myUser);
