import { ICart } from './carts.interface';

export interface CartControllerImpl {
  create: (...props: any) => Promise<ICart> | ICart;
  findAll: (...props: any) => Promise<ICart[]> | ICart[];
  findOne: (...props: any) => Promise<ICart> | ICart;
  update: (...props: any) => Promise<ICart> | ICart;
  remove: (...props: any) => Promise<any> | any;
}
