import { config } from 'dotenv';
config();

export const AppConfig = {
  port: process.env.PORT,
};

export const databaseConfig = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

export const jwtConfig = {
  accessToken_secret: process.env.JWT_ACCESS_TOKEN_SECRET,
  accressToken_expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN,
  refreshToken_secret: process.env.JWT_REFRESH_TOKEN_SECRET,
  refreshToken_expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN,
};

export const scrawlConfig = {
  scrawlKey: process.env.SCRAWL_KEY,
};

export const openWeatherMapConfig = {
  url: process.env.WEATHER_MAP_URL,
  appId: process.env.WEATHER_MAP_APPID,
};
