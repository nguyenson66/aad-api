import { IItem } from './items.interface';

export interface ItemControllerImpl {
  create: (...props: any) => Promise<IItem> | IItem;
  findAll: (...props: any) => Promise<IItem[]> | IItem[];
  findOne: (...props: any) => Promise<IItem> | IItem;
  update: (...props: any) => Promise<IItem> | IItem;
  remove: (...props: any) => Promise<any> | any;
}
