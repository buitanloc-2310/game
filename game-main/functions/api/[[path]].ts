import { apiRequest } from '../../worker/index';

type Env = {
  GAME_DB: D1Database;
  GAME_ASSETS: R2Bucket;
  ADMIN_SETUP_KEY?: string;
  APP_NAME?: string;
  MAIN_SITE_URL?: string;
};

export const onRequest: PagesFunction<Env> = async (context) => {
  // Fail clearly if the Cloudflare Pages runtime did not inject the required bindings.
  if (!context.env?.GAME_DB) {
    return Response.json({
      error: 'GAME_DB binding missing',
      hint: 'Bind D1 as GAME_DB in the Pages production environment or deploy with the included wrangler.jsonc.'
    }, { status: 500 });
  }
  return apiRequest(context.request, context.env as any);
};
