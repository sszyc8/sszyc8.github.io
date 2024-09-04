import { defineEventHandler } from 'file:///Users/sszyc8/Documents/workspace/github/sszyc8.github.io/node_modules/.pnpm/h3@1.12.0/node_modules/h3/dist/index.mjs';
import { c as verifyRefreshToken, a as MOCK_USERS, g as generateAccessToken } from '../../../_/jwt-utils.mjs';
import { g as getRefreshTokenFromCookie, c as clearRefreshTokenCookie, s as setRefreshTokenCookie } from '../../../_/cookie-utils.mjs';
import { f as forbiddenResponse } from '../../../_/response.mjs';
import 'file:///Users/sszyc8/Documents/workspace/github/sszyc8.github.io/node_modules/.pnpm/jsonwebtoken@9.0.2/node_modules/jsonwebtoken/index.js';

const refresh_post = defineEventHandler(async (event) => {
  const refreshToken = getRefreshTokenFromCookie(event);
  if (!refreshToken) {
    return forbiddenResponse(event);
  }
  clearRefreshTokenCookie(event);
  const userinfo = verifyRefreshToken(refreshToken);
  if (!userinfo) {
    return forbiddenResponse(event);
  }
  const findUser = MOCK_USERS.find(
    (item) => item.username === userinfo.username
  );
  if (!findUser) {
    return forbiddenResponse(event);
  }
  const accessToken = generateAccessToken(findUser);
  setRefreshTokenCookie(event, refreshToken);
  return accessToken;
});

export { refresh_post as default };
//# sourceMappingURL=refresh.post.mjs.map
