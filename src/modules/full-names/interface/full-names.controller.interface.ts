import { IFullName } from './full-names.interface';

export interface FullNameControllerImpl {
  create: (...props: any) => Promise<IFullName> | IFullName;
  findAll: (...props: any) => Promise<IFullName[]> | IFullName[];
  findOne: (...props: any) => Promise<IFullName> | IFullName;
  update: (...props: any) => Promise<IFullName> | IFullName;
  remove: (...props: any) => Promise<any> | any;
}
