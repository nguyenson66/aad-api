import { IOrder } from './orders.interface';

export interface OrderControllerImpl {
  create: (...props: any) => Promise<IOrder> | IOrder;
  findAll: (...props: any) => Promise<IOrder[]> | IOrder[];
  findOne: (...props: any) => Promise<IOrder> | IOrder;
  update: (...props: any) => Promise<IOrder> | IOrder;
  remove: (...props: any) => Promise<any> | any;
}
