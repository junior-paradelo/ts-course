import { addProduct } from './products/product.service';

addProduct({
  id: 1,
  title: 'product1',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 90,
  category: {
    id: 1,
    name: 'category1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
});
