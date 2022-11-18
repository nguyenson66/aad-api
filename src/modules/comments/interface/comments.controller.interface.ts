import { IComment } from './comments.interface';

export interface CommentsControllerImpl {
  create: (...props: any) => Promise<IComment> | IComment;
  findAll: (...props: any) => Promise<IComment[]> | IComment[];
  findOne: (...props: any) => Promise<IComment> | IComment;
  update: (...props: any) => Promise<IComment> | IComment;
  remove: (...props: any) => Promise<any> | any;
}
