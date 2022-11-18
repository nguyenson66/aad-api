import { ICash } from './cash.interface';

export interface CashControllerImpl {
  create: (...props: any) => Promise<ICash> | ICash;
  findAll: (...props: any) => Promise<ICash[]> | ICash[];
  findOne: (...props: any) => Promise<ICash> | ICash;
  update: (...props: any) => Promise<ICash> | ICash;
  remove: (...props: any) => Promise<any> | any;
}
