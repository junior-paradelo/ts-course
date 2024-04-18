import { Product } from './product.model';

// omit this properties
export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// pick only this properties
type examplePick = Pick<Product, 'color' | 'description'>;

// partial needn't fill all fields
export interface UpdateProductDto extends Partial<CreateProductDto> {}

// required all must
type example2 = Required<Product>;

export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  tags: ReadonlyArray<string>;
}

