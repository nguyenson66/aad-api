import { ICustomer } from './customers.interface';

export interface CustomerControllerImpl {
  create: (...props: any) => Promise<ICustomer> | ICustomer;
  findAll: (...props: any) => Promise<ICustomer[]> | ICustomer[];
  findOne: (...props: any) => Promise<ICustomer> | ICustomer;
  update: (...props: any) => Promise<ICustomer> | ICustomer;
  remove: (...props: any) => Promise<any> | any;
}
