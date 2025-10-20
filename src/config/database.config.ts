import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { getEnv } from '../utils/get-env';
import { User } from 'src/user/entities/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: getEnv('DB_HOST', 'localhost'),
  port: parseInt(getEnv('DB_PORT', '5432'), 10),
  username: getEnv('DB_USERNAME', 'tu_usuario'),
  password: getEnv('DB_PASSWORD', 'tu_contraseña'),
  database: getEnv('DB_NAME', 'mi_db'),
  entities: [User],
  synchronize: false,
  ssl: {
    rejectUnauthorized: false, 
  },
};
