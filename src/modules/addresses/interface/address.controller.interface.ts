import { IAddress } from './addresses.interface';

export interface AddressControllerImpl {
  create: (...props: any) => Promise<IAddress> | IAddress;
  findAll: (...props: any) => Promise<IAddress[]> | IAddress[];
  findOne: (...props: any) => Promise<IAddress> | IAddress;
  update: (...props: any) => Promise<IAddress> | IAddress;
  remove: (...props: any) => Promise<any> | any;
}
