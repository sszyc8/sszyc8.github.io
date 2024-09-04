import { defineEventHandler } from 'file:///Users/sszyc8/Documents/workspace/github/sszyc8.github.io/node_modules/.pnpm/h3@1.12.0/node_modules/h3/dist/index.mjs';
import { a as useResponseSuccess } from '../../../_/response.mjs';
import { g as getRefreshTokenFromCookie, c as clearRefreshTokenCookie } from '../../../_/cookie-utils.mjs';

const logout_post = defineEventHandler(async (event) => {
  const refreshToken = getRefreshTokenFromCookie(event);
  if (!refreshToken) {
    return useResponseSuccess("");
  }
  clearRefreshTokenCookie(event);
  return useResponseSuccess("");
});

export { logout_post as default };
//# sourceMappingURL=logout.post.mjs.map
