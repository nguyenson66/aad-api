import { ICard } from './cards.interface';

export interface CardControllerImpl {
  create: (...props: any) => Promise<ICard> | ICard;
  findAll: (...props: any) => Promise<ICard[]> | ICard[];
  findOne: (...props: any) => Promise<ICard> | ICard;
  update: (...props: any) => Promise<ICard> | ICard;
  remove: (...props: any) => Promise<any> | any;
}
