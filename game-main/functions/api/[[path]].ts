import { apiRequest } from '../../worker/index';

type Env = {
  GAME_DB: D1Database;
  GAME_ASSETS: R2Bucket;
  ADMIN_SETUP_KEY?: string;
  APP_NAME?: string;
  MAIN_SITE_URL?: string;
};

export const onRequest: PagesFunction<Env> = async (context) => {
  return apiRequest(context.request, context.env as any);
};
