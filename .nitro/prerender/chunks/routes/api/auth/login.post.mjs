import { defineEventHandler, readBody, setResponseStatus } from 'file:///Users/sszyc8/Documents/workspace/github/sszyc8.github.io/node_modules/.pnpm/h3@1.12.0/node_modules/h3/dist/index.mjs';
import { b as useResponseError, f as forbiddenResponse, a as useResponseSuccess } from '../../../_/response.mjs';
import { a as MOCK_USERS, g as generateAccessToken, b as generateRefreshToken } from '../../../_/jwt-utils.mjs';
import { c as clearRefreshTokenCookie, s as setRefreshTokenCookie } from '../../../_/cookie-utils.mjs';
import 'file:///Users/sszyc8/Documents/workspace/github/sszyc8.github.io/node_modules/.pnpm/jsonwebtoken@9.0.2/node_modules/jsonwebtoken/index.js';

const login_post = defineEventHandler(async (event) => {
  const { password, username } = await readBody(event);
  if (!password || !username) {
    setResponseStatus(event, 400);
    return useResponseError(
      "BadRequestException",
      "Username and password are required"
    );
  }
  const findUser = MOCK_USERS.find(
    (item) => item.username === username && item.password === password
  );
  if (!findUser) {
    clearRefreshTokenCookie(event);
    return forbiddenResponse(event);
  }
  const accessToken = generateAccessToken(findUser);
  const refreshToken = generateRefreshToken(findUser);
  setRefreshTokenCookie(event, refreshToken);
  return useResponseSuccess({
    ...findUser,
    accessToken
  });
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
