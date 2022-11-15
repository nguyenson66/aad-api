import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';

export const DatabaseProviders: Provider[] = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: '52.221.220.103',
        port: 5432,
        username: 'backend',
        password: 'soicon',
        database: 'postgres',
        entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
