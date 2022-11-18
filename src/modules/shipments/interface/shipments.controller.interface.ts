import { IShipment } from './shipments.interface';

export interface ShipmentControllerImpl {
  create: (...props: any) => Promise<IShipment> | IShipment;
  findAll: (...props: any) => Promise<IShipment[]> | IShipment[];
  findOne: (...props: any) => Promise<IShipment> | IShipment;
  update: (...props: any) => Promise<IShipment> | IShipment;
  remove: (...props: any) => Promise<any> | any;
}
