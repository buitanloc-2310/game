type Env = {
  GAME_DB?: D1Database;
  GAME_ASSETS?: R2Bucket;
  ADMIN_SETUP_KEY?: string;
  APP_NAME?: string;
  MAIN_SITE_URL?: string;
};

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  return Response.json({
    GAME_DB: !!env.GAME_DB,
    GAME_ASSETS: !!env.GAME_ASSETS,
    ADMIN_SETUP_KEY: !!env.ADMIN_SETUP_KEY,
    APP_NAME: env.APP_NAME || null,
    MAIN_SITE_URL: env.MAIN_SITE_URL || null,
  });
};
