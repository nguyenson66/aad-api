import { IResponse } from 'src/common/utils/format-response';

export interface PublisherControllerImpl {
  create: (...props: any) => Promise<IResponse> | IResponse;
  findAll: (...props: any) => Promise<IResponse> | IResponse;
  findOne: (...props: any) => Promise<IResponse> | IResponse;
  update: (...props: any) => Promise<IResponse> | IResponse;
  remove: (...props: any) => Promise<IResponse> | IResponse;
}
