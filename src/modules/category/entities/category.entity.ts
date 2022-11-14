import { Column } from 'typeorm';

export class Category {
  @Column()
  type: string;
}
