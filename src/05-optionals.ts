export const createProduct = (
  id: string | number,
  stock?: number,
  isNew?: boolean
) => {
  return { id, stock: stock ?? 0, isNew: isNew ?? true };
};

const p1 = createProduct(1, 2, true);
console.log(p1);

// 0 === false
// '' === false
// false === false
const p2 = createProduct(2, 4);
console.log(p2);

const p3 = createProduct(3);
console.log(p3);
