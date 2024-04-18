import { faker } from '@faker-js/faker';
import {
  addProduct,
  products,
  updateProduct,
} from './products/product.service';

for (let index = 0; index < 5; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    title: faker.commerce.productName(),
    image: faker.image.url(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    color: faker.color.human(), // Corregido el método para obtener un color
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']), // Corregido el método para obtener un elemento aleatorio de un array
    price: parseFloat(faker.commerce.price()), // Corregido el método para obtener un precio y parsearlo a float
    isNew: faker.datatype.boolean(),
    tags: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()], // Ejemplo de tres palabras aleatorias como tags
    categoryId: faker.string.uuid(),
  });
}

const product = products[0];
console.log(
  updateProduct(product.id, {
    title: 'New title',
    stock: 80,
  })
);
